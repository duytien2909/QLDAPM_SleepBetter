// AdvicesStackNavigator.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AdvicesScreen from "../../../screens/AdvicesScreen";
import AdviceScreen from "../../../screens/AdviceScreen";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootTabParamList } from "../../../../App";

export type AdviceStackParamList = {
    Advices: undefined;
    Advice: undefined;
}

const Stack = createStackNavigator();

export type AdviceScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, "Home">,
  StackNavigationProp<AdviceStackParamList>
>;

const AdvicesStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Advices" component={AdvicesScreen} />
      <Stack.Screen name="Advice" component={AdviceScreen} />
    </Stack.Navigator>
  );
};

export default AdvicesStack;
