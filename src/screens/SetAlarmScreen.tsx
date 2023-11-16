import React, { useState } from "react";
import {
  Button,
  Container,
  Flex,
  HStack,
  Pressable,
  Text,
  VStack,
  View,
} from "native-base";
import BackgroundUrl from "../../assets/background.png";
import BackButton from "../components/BackButton";
import { ImageBackground } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { ProfileScreenNavigationProp } from "../routes/StackNavigators/SleepRecordStacks/SleepRecordStacks";
import dayjs, { Dayjs } from "dayjs";
import { Image } from "react-native";
import WhiteBedUrl from "../../assets/icon-bed-white.png";
import WhiteBellUrl from "../../assets/icon-bell-white.png";
import DateTimePicker from "react-native-modal-datetime-picker";

const SetAlarmScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const [date, setDate] = useState<Date>(new Date());
  const [sleepTime, setSleepTime] = useState<Dayjs>(dayjs());
  const [wakeUpTime, setWakeUpTime] = useState<Dayjs>(dayjs());
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);

  const handleConfirmTime = (date: Date) => {
    setShowTimePicker(false);
    setWakeUpTime(dayjs(date));
  };

  const hourDiff = wakeUpTime.diff(sleepTime, "hours");

  return (
    <View flex={1}>
      <ImageBackground source={BackgroundUrl} style={{ flex: 1 }}>
        <DateTimePicker
          date={wakeUpTime.toDate()}
          isVisible={showTimePicker}
          onConfirm={handleConfirmTime}
          onCancel={() => setShowTimePicker(false)}
          mode="time"
          minimumDate={sleepTime.toDate()}
        />
        <Flex
          justifyContent={"space-between"}
          p={9}
          background={`url(${BackgroundUrl})`}
          flex={1}
        >
          <BackButton isCloseIcon />
          <VStack flex={1} justifyContent={"space-between"}>
            <VStack space={4}>
              <Text>Clock</Text>
              <HStack pt={30} space={2.5}>
                <VStack
                  bg={"white"}
                  rounded={"2xl"}
                  justifyContent={"flex-end"}
                  alignItems={"center"}
                  py={2.5}
                  h={90}
                  pb={3.5}
                  flex={1}
                >
                  <Container
                    w={45}
                    h={45}
                    bg="#311B6B"
                    rounded={"full"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Image source={WhiteBedUrl} />
                  </Container>
                  <Text fontWeight={500} fontSize={13}>
                    Bedtime
                  </Text>
                  <Text fontWeight={700} fontSize={20}>
                    {sleepTime.format("HH:mm A")}
                  </Text>
                </VStack>
                <Pressable onPress={() => setShowTimePicker(true)} flex={1}>
                  <VStack
                    bg={"white"}
                    rounded={"2xl"}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                    py={2.5}
                    h={90}
                    pb={3.5}
                  >
                    <Container
                      w={45}
                      h={45}
                      bg="#311B6B"
                      rounded={"full"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Image source={WhiteBellUrl} />
                    </Container>
                    <Text fontWeight={500} fontSize={13}>
                      Wakeup
                    </Text>
                    <Text fontWeight={700} fontSize={20}>
                      {wakeUpTime.format("HH:mm A")}
                    </Text>
                  </VStack>
                </Pressable>
              </HStack>

              <HStack
                bg={"white"}
                rounded="2xl"
                justifyContent={"space-between"}
                p={4}
              >
                <HStack space={4} alignItems={"center"}>
                  <Container
                    w={25}
                    h={25}
                    bg="#311B6B"
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    rounded={"full"}
                  >
                    <FontAwesomeIcon icon={faCheck} color="white" size={16} />
                  </Container>
                  <Text fontSize={20} fontWeight={500}>
                    Sleep goal
                  </Text>
                </HStack>
                <Text fontSize={20} fontWeight={500}>
                  {hourDiff >= 0 ? hourDiff : 24 + hourDiff} h
                </Text>
              </HStack>
              <HStack
                bg={"white"}
                rounded="2xl"
                justifyContent={"space-between"}
                p={4}
              >
                <Text fontSize={20} fontWeight={500}>
                  Set reminder
                </Text>
                <Text fontSize={20} fontWeight={500}>
                  15 min
                </Text>
              </HStack>

              <Text>Clock</Text>
              <Text>Clock</Text>
            </VStack>
            <Button
              onPress={() =>
                navigation.navigate("RecordSleep", {
                  startTime: sleepTime.unix(),
                  endTime: wakeUpTime.unix(),
                })
              }
            >
              <Text fontWeight={700} fontSize={18} color={"white"}>
                SET ALARM
              </Text>
            </Button>
          </VStack>
        </Flex>
      </ImageBackground>
    </View>
  );
};

export default SetAlarmScreen;
