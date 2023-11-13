import React from "react";
import {
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "native-base";
import BackgroundUrl from "../../assets/background.png";
import BackButton from "../components/BackButton";
import { ImageBackground } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { ProfileScreenNavigationProp } from "../routes/StackNavigators/SleepRecordStacks/SleepRecordStacks";
import dayjs from "dayjs";

const SetAlarmScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return (
    <ImageBackground source={BackgroundUrl} style={{ flex: 1 }}>
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
                flex={1}
                bg={"white"}
                rounded={"2xl"}
                justifyContent={"flex-end"}
                alignItems={"center"}
                py={2.5}
                h={90}
              >
                <Text fontWeight={500} fontSize={13}>
                  Bedtime
                </Text>
                <Text fontWeight={700} fontSize={20}>
                  10:00 PM
                </Text>
              </VStack>
              <VStack
                flex={1}
                bg={"white"}
                rounded={"2xl"}
                justifyContent={"flex-end"}
                alignItems={"center"}
                py={2.5}
                h={90}
              >
                <Text fontWeight={500} fontSize={13}>
                  Wakeup
                </Text>
                <Text fontWeight={700} fontSize={20}>
                  6:00 PM
                </Text>
              </VStack>
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
                8 h
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
                startTime: dayjs().unix(),
                endTime: dayjs().unix() + 60,
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
  );
};

export default SetAlarmScreen;
