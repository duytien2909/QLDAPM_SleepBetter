import React, { useCallback, useEffect, useRef, useState } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import BackgroundUrl from "../../assets/background.png";
import {
  Text,
  VStack,
  Container,
  HStack,
  Button,
  Pressable,
  Badge,
  View,
  Box,
} from "native-base";
import BackButton from "../components/BackButton";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClock, faMusic } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Audio } from "expo-av";
import { Image } from "react-native";
import SleepIconUrl from "../../assets/sleep-icon.png";
import { ProfileScreenNavigationProp } from "../routes/StackNavigators/SleepRecordStacks/SleepRecordStacks";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import * as DocumentPicker from "expo-document-picker";
import SelectMusicScreen from "../components/Music/SelectMusic";
import TimerMusicScreen from "../components/Music/TimerMusic";

dayjs.extend(utc);
dayjs.extend(timezone);

const RecordSleepScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  // TODO: check any
  const {
    params: { startTime, endTime, reminderDuration = 60 * 15 },
  } = useRoute<any>();

  const [recording, setRecording] = useState<Audio.Recording>();
  const [timeString, setTimeString] = useState<string>(
    dayjs().format("HH:mm A")
  );
  const [timeUnix, setTimeUnix] = useState<number>(dayjs().unix());
  const [devModeCount, setDevModeCount] = useState<number>(0);
  const interValRef = useRef<any>();

  useEffect(() => {
    interValRef.current = setInterval(() => {
      setTimeString(dayjs().format("HH:mm A"));
      setTimeUnix(dayjs().unix());
    }, 1000);

    return () => {
      if (interValRef.current) clearInterval(interValRef.current);
    };
  }, []);

  const handleBeginSleep = async () => {
    try {
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      startTimer();
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  };

  const handleCompleteSleep = async () => {
    console.log("Stopping recording..");
    setRecording(undefined);
    setTimerFinished(true);
    await recording?.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording?.getURI();
    console.log("Recording stopped and stored at", uri);
    if (!uri) {
      navigation.navigate("Home");
      return;
    }
    navigation.navigate("SleepReport", {
      recordUri: uri,
      startTime,
      endTime: dayjs().unix(),
    });
  };

  const handleImportAudio = async () => {
    await recording?.stopAndUnloadAsync();
    const files = await DocumentPicker.getDocumentAsync();
    const outputUri = files.assets?.[0].uri;
    if (!outputUri) return;
    navigation.navigate("SleepReport", {
      recordUri: outputUri,
      startTime,
      endTime: dayjs().unix(),
    });
  };

  const [isSelectMusicOpen, setIsSelectMusicOpen] = useState(false);
  const [isSelectTimerOpen, setIsSelectTimerOpen] = useState(false);

  const [remainingTime, setRemainingTime] = useState<number | null>(null);
  const [timerDuration, setTimerDuration] = useState<number | null>(0);
  const [timerFinished, setTimerFinished] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (remainingTime !== null) {
      interval = setInterval(() => {
        setRemainingTime((currentRemainingTime) => {
          if (currentRemainingTime && currentRemainingTime > 0) {
            return currentRemainingTime - 1;
          } else {
            clearInterval(interval);
            setTimerDuration(0);
            setTimerFinished(true);
            return null;
          }
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [remainingTime]);

  const startTimer = useCallback(() => {
    if (timerDuration) {
      setRemainingTime(timerDuration * 60);
    }
  }, [timerDuration]);

  const handleSelectDuration = useCallback((duration: number | null) => {
    setTimerDuration(duration);
    setIsSelectTimerOpen(false);
  }, []);

  const formatRemainingTime = (time: number | null) => {
    if (time === null) return null;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <ImageBackground source={BackgroundUrl} style={{ flex: 1 }}>
      <VStack flex={1} color={"white"} justifyContent={"space-between"} p={9}>
        <BackButton onPress={() => recording?.stopAndUnloadAsync()} />
        <VStack flex={1} alignItems={"center"} space={7}>
          <VStack alignItems={"center"}>
            <Text color={"white"} fontSize={16}>
              Good night
            </Text>
            <Text color={"white"} fontSize={48} fontWeight={700}>
              {timeString}
            </Text>
          </VStack>

          <Container>
            <AnimatedCircularProgress
              size={232}
              width={8}
              fill={
                recording
                  ? ((timeUnix - startTime) * 100) / (endTime - startTime)
                  : 0
              }
              tintColor="#3828B7"
              backgroundColor="#fff"
              fillLineCap="round"
              backgroundWidth={4}
              rotation={0}
            />
            <Image
              source={SleepIconUrl}
              width={190}
              height={190}
              alt="sleep icon"
              style={{
                position: "absolute",
                top: 17,
                left: 17,
              }}
            />
          </Container>
          <HStack
            bg={"rgba(157,145,255,.5)"}
            alignItems={"center"}
            rounded={"full"}
            px={6}
            py={2}
            space={2.5}
          >
            <FontAwesomeIcon icon={faClock} color="#fff" />
            <Text color={"white"} fontWeight={700} fontSize={20}>
              {dayjs((endTime + reminderDuration) * 1000).format("HH:mm")}
            </Text>
          </HStack>
          <VStack alignItems={"flex-start"} space={5}>
            <Container>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => setIsSelectMusicOpen(true)}
              >
                <FontAwesomeIcon icon={faMusic} color="#0019ff" size={25} />
                <Text
                  color={"white"}
                  fontWeight={500}
                  fontSize={20}
                  marginLeft={5}
                >
                  Open Music Selector
                </Text>
              </TouchableOpacity>
              <SelectMusicScreen
                isOpen={isSelectMusicOpen}
                onClose={() => setIsSelectMusicOpen(false)}
                timerFinished={timerFinished}
              />
            </Container>
            <VStack>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => setIsSelectTimerOpen(true)}
              >
                <FontAwesomeIcon icon={faClock} color={"#90b4e8"} size={25} />
                <Text
                  color={"white"}
                  fontWeight={500}
                  fontSize={20}
                  marginLeft={5}
                >
                  Timer to turn off music
                </Text>
                <TimerMusicScreen
                  isOpen={isSelectTimerOpen}
                  onClose={() => setIsSelectTimerOpen(false)}
                  onSelectDuration={handleSelectDuration}
                />
              </TouchableOpacity>
              {remainingTime ? (
                <Text italic color={"white"} fontSize={16} textAlign={"right"}>
                  Time Set: {formatRemainingTime(remainingTime)}
                </Text>
              ) : (
                <Text italic color={"white"} fontSize={16} textAlign={"right"}>
                  Time Set: {formatRemainingTime(timerDuration)}
                </Text>
              )}
            </VStack>
          </VStack>
        </VStack>
        {devModeCount >= 10 && (
          <Pressable
            color={"white"}
            w={"full"}
            onPress={handleImportAudio}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mb={3}
          >
            <Text color={"white"} fontWeight={600} fontSize={20}>
              Press here to import audio file
            </Text>
          </Pressable>
        )}
        {!recording ? (
          <Button onPress={handleBeginSleep}>
            <Text color={"white"} fontWeight={700} fontSize={18}>
              START SLEEPING
            </Text>
          </Button>
        ) : (
          <VStack space={3}>
            <Button onPress={handleCompleteSleep} w={"full"}>
              <Text color={"white"} fontWeight={700} fontSize={18}>
                DONE SLEEPING
              </Text>
            </Button>
            <Pressable
              w={"full"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              onPress={() => {
                console.log(devModeCount);
                setDevModeCount((prev) => prev + 1);
              }}
            >
              <Text underline color={"gray.200"}>
                Powered by Sleep Better Inc.
              </Text>
            </Pressable>
          </VStack>
        )}
      </VStack>
    </ImageBackground>
  );
};

export default RecordSleepScreen;
