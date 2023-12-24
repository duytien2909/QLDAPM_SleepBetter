import { useNavigation } from "@react-navigation/native";
import {
  Button,
  HStack,
  Input,
  Pressable,
  Text,
  VStack,
  View,
} from "native-base";
import React, { useState } from "react";
import { signUpWithEmailPassword } from "../services/firebase/firestore/authentication";

const SignUpScreen = () => {
  const nagivation = useNavigation();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignUp = () => {
    signUpWithEmailPassword(email, password);
    nagivation.navigate("Login" as never);
  };

  return (
    <View flex={1} bg={"#251751"} py={8} px={10}>
      <VStack justifyContent={"flex-end"} space={60} h={"full"}>
        <VStack>
          <Text color={"white"} fontWeight={"medium"} fontSize={48}>
            Sign Up
          </Text>
          <Text color={"white"} fontWeight={"medium"} fontSize={18}>
            Let’s get started to better your sleep
          </Text>
        </VStack>
        <VStack space={8}>
          <VStack space={6} alignItems={"flex-end"}>
            <VStack space={4}>
              <Text fontWeight={"bold"} color={"white"} fontSize={16}>
                Username
              </Text>
              <Input placeholder="Username" w="100%" bg={"white"} />
            </VStack>
            <VStack space={4}>
              <Text fontWeight={"bold"} color={"white"} fontSize={16}>
                Email or your phone number
              </Text>
              <Input
                placeholder="example@gmail.com"
                w="100%"
                bg={"white"}
                value={email}
                onChangeText={setEmail}
              />
            </VStack>
            <VStack space={4}>
              <Text fontWeight={"bold"} color={"white"} fontSize={16}>
                Password
              </Text>
              <Input
                placeholder="Password"
                w="100%"
                bg={"white"}
                value={password}
                onChangeText={setPassword}
              />
            </VStack>
            <Text fontWeight={"bold"} color={"white"} fontSize={15}>
              Forgot Password?
            </Text>
          </VStack>
        </VStack>
        <VStack alignItems={"center"} space={8}>
          <Button w={"full"} h={54} onPress={handleSignUp}>
            <Text color={"white"} fontWeight={"bold"}>
              SIGN UP
            </Text>
          </Button>
          <HStack space={1}>
            <Text color={"white"} fontWeight={"bold"} fontSize={12}>
              ALREADY HAVE AN ACCOUNT?
            </Text>
            <Pressable onPress={handleSignUp}>
              <Text color={"#9D91FF"} fontWeight={"bold"} fontSize={12}>
                LOG IN
              </Text>
            </Pressable>
          </HStack>
        </VStack>
      </VStack>
    </View>
  );
};

export default SignUpScreen;
