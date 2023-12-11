import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../../screens/LoginScreen";
import SignUpScreen from "../../../screens/SignUpScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
  //DONT PUT THIS INSIDE COMPONENT!
  // <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
