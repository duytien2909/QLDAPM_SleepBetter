import {
  Button,
  HStack,
  Image,
  Input,
  Pressable,
  Text,
  VStack,
  View,
} from "native-base";
import React from "react";
import FacebookIcon from "../../assets/LoginScreen/icons/facebook.png";
import GoogleIcon from "../../assets/LoginScreen/icons/google.png";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const nagivation = useNavigation();

  const handleLogin = () => {};

  return (
    <View flex={1} bg={"#251751"} py={8} px={10}>
      <VStack justifyContent={"space-between"} h={"full"}>
        <VStack space={8}>
          <VStack>
            <Text color={"white"} fontWeight={"medium"} fontSize={48}>
              Login
            </Text>
            <Text color={"white"} fontWeight={"medium"} fontSize={18}>
              Welcome we’re glad you’re back
            </Text>
          </VStack>
          <VStack space={3.5} px={3}>
            <HStack
              w={"full"}
              bg={"white"}
              rounded={"full"}
              px={5}
              py={2.5}
              space={6}
            >
              <Image source={FacebookIcon} w={25} h={25} alt="facebook-icon" />
              <Text color={"#3828B7"} fontSize={15} fontWeight={"bold"}>
                Continue with Facebook
              </Text>
            </HStack>
            <HStack
              w={"full"}
              bg={"white"}
              rounded={"full"}
              px={5}
              py={2.5}
              space={6}
            >
              <Image source={GoogleIcon} w={25} h={25} alt="google-icon" />
              <Text
                color={"#3828B7"}
                fontSize={15}
                fontWeight={"bold"}
                bg={"white"}
              >
                Continue with Google
              </Text>
            </HStack>
          </VStack>
          <VStack space={6} alignItems={"flex-end"}>
            <VStack space={4}>
              <Text fontWeight={"bold"} color={"white"} fontSize={16}>
                Email or your phone number
              </Text>
              <Input placeholder="example@gmail.com" w="100%" bg={"white"} />
            </VStack>
            <VStack space={4}>
              <Text fontWeight={"bold"} color={"white"} fontSize={16}>
                Password
              </Text>
              <Input placeholder="Password" w="100%" bg={"white"} />
            </VStack>
            <Text fontWeight={"bold"} color={"white"} fontSize={15}>
              Forgot Password?
            </Text>
          </VStack>
        </VStack>
        <VStack alignItems={"center"} space={8}>
          <Button w={"full"} h={54} onPress={handleLogin}>
            <Text color={"white"} fontWeight={"bold"}>
              LOGIN
            </Text>
          </Button>
          <HStack space={1}>
            <Text color={"white"} fontWeight={"bold"} fontSize={12}>
              DON’T HAVE AN ACCOUNT?
            </Text>
            <Pressable onPress={() => nagivation.navigate("SignUp" as never)}>
              <Text color={"#9D91FF"} fontWeight={"bold"} fontSize={12}>
                SIGN UP
              </Text>
            </Pressable>
          </HStack>
        </VStack>
      </VStack>
    </View>
  );
};

export default LoginScreen;
