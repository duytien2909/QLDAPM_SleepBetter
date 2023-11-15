import { Button, Center, HStack, Text, VStack } from "native-base";
import React from "react";
import { ImageBackground } from "react-native";
import BackgroundUrl from "../../assets/background.png";
import dayjs from "dayjs";
import { StackActions, useNavigation } from "@react-navigation/native";

const SleepReportScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={BackgroundUrl}
      style={{ flex: 1, display: "flex", justifyContent: "center" }}
    >
      <VStack space={3}>
        <VStack flex={1}>
          <Center>
            <Text fontSize={45} fontWeight={700} color={"white"}>
              Sleep Report
            </Text>
            <Text fontSize={16} fontWeight={600} color={"white"}>
              Quality report of your sleep
            </Text>
          </Center>
        </VStack>
        <VStack p={5} bg={"white"} roundedTopRight={60} space={2.5}>
          <HStack
            alignItems={"center"}
            w={"full"}
            justifyContent={"space-evenly"}
          >
            <VStack>
              <Text fontSize={64} fontWeight={700}>
                80
              </Text>
              <Text fontSize={20} fontWeight={700}>
                Sleep Score
              </Text>
            </VStack>
            <Text opacity={0.5} fontWeight={700}>
              {dayjs().format("DD/MM/YYYY")}
            </Text>
          </HStack>
          <VStack bg={"#C6C3DC"} py={2.5} alignItems={"center"}>
            <Text>How do you feel?</Text>
            <Text>Do you have nightmares?</Text>
            <HStack space={8}>
              <Text>Yes</Text>
              <Text>No</Text>
            </HStack>
          </VStack>
          <VStack w={"full"} maxW={"none"} space={5}>
            <HStack w={"full"}>
              <HStack flex={1} space={1}>
                <Text fontWeight={600}>Sleep Time</Text>
                <Text color={"#3828B7"} fontWeight={600}>
                  22 : 00
                </Text>
              </HStack>
              <HStack flex={1} space={1}>
                <Text fontWeight={600}>Wake-up time</Text>
                <Text color={"#3828B7"} fontWeight={600}>
                  06 : 00
                </Text>
              </HStack>
            </HStack>
            <HStack w={"full"}>
              <HStack flex={1} space={1}>
                <Text fontWeight={600}>Sleep duration</Text>
                <Text color={"#3828B7"} fontWeight={600}>
                  7h30min
                </Text>
              </HStack>
              <HStack flex={1} space={1}>
                <Text color={"#3828B7"} fontWeight={600}>
                  One
                </Text>
                <Text fontWeight={600}>Daydream</Text>
              </HStack>
            </HStack>
          </VStack>
        </VStack>
        <Button
          onPress={() => {
            navigation.dispatch(StackActions.popToTop());
            navigation.navigate("Home" as never);
          }}
          mx={6}
        >
          <Text color={"white"} fontWeight={700} fontSize={18}>
            SKIP TO MAIN SCREEN
          </Text>
        </Button>
      </VStack>
    </ImageBackground>
  );
};

export default SleepReportScreen;
