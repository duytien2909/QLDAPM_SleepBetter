import React, { useEffect, useRef, useState } from "react";
import { ImageBackground } from "react-native";
import BackgroundUrl from "../../assets/background.png";
import { Text, VStack, Image, Container, HStack, Button } from "native-base";
import BackButton from "../components/BackButton";
import SleepIconUrl from "../../assets/sleep-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Audio } from "expo-av";

const RecordSleepScreen = () => {
  const navigation = useNavigation();
  // TODO: check any
  const {
    params: { startTime, endTime },
  } = useRoute<any>();

  const [recording, setRecording] = useState<Audio.Recording>();
  const [timeString, setTimeString] = useState<string>(
    dayjs().format("HH:mm A")
  );
  const [timeUnix, setTimeUnix] = useState<number>(dayjs().unix());
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
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  };

  const handleCompleteSleep = async () => {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording?.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording?.getURI();
    console.log("Recording stopped and stored at", uri);
    // navigation.navigate("SleepReport" as never);
  };

  return (
    <ImageBackground source={BackgroundUrl} style={{ flex: 1 }}>
      <VStack flex={1} color={"white"} justifyContent={"space-between"} p={9}>
        <BackButton />
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
              source={{ uri: SleepIconUrl }}
              w={190}
              h={190}
              alt="sleep icon"
              position={"absolute"}
              top={17}
              left={17}
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
              04:00
            </Text>
          </HStack>
          {!!recording ? (
            <Button onPress={handleCompleteSleep} w={"full"}>
              <Text color={"white"} fontWeight={700} fontSize={18}>
                DONE SLEEPING
              </Text>
            </Button>
          ) : (
            <>
              <Text color={"white"} fontWeight={500} fontSize={20}>
                Select chilling music
              </Text>
              <Text color={"white"} fontWeight={500} fontSize={20}>
                Timer to turn off music
              </Text>
            </>
          )}
        </VStack>
        {!recording && (
          <Button onPress={handleBeginSleep}>
            <Text color={"white"} fontWeight={700} fontSize={18}>
              START SLEEPING
            </Text>
          </Button>
        )}
      </VStack>
    </ImageBackground>
  );
};

export default RecordSleepScreen;
