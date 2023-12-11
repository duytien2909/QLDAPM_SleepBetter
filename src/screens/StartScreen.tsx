import { Pressable, VStack } from "native-base";
import React from "react";
import { ImageBackground } from "react-native";
import { Text } from "native-base";
import { useNavigation } from "@react-navigation/native";

const StartScreen = () => {
  const navigation = useNavigation();

  const backgroundImg = require("../../assets/Start/start-screen-bg.png");

  return (
    <Pressable flex={1} onPress={() => {}}>
      <ImageBackground source={backgroundImg} style={{ flex: 1 }}>
        <VStack
          flex={1}
          color={"white"}
          justifyContent={"space-between"}
          px={8}
          py={12}
        >
          <VStack>
            <Text color={"white"} fontSize={48} fontWeight={"bold"}>
              Welcome
            </Text>
            <Text color={"white"} fontSize={18} fontWeight={"medium"}>
              We’re here to better your sleep
            </Text>
          </VStack>
          <Text
            color={"white"}
            fontSize={20}
            fontWeight={"medium"}
            mb={20}
            w={"full"}
            textAlign={"center"}
          >
            Tap to login
          </Text>
        </VStack>
      </ImageBackground>
    </Pressable>
  );
};

export default StartScreen;
