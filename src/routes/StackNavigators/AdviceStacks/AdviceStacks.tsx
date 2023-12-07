import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AdviceScreen from "../../../screens/AdviceScreen";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootTabParamList } from "../../../../App";
import MealPlannerScreen from "../../../screens/MealPlannerScreen";
import AdvicesScreen from "../../../screens/AdvicesScreen";

export type AdviceStackParamList = {
  Advices: undefined;
  MealPlan: undefined;
  Advice: undefined;
};

const Stack = createStackNavigator<AdviceStackParamList>();

export type AdviceScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, "AdviceStack">,
  StackNavigationProp<AdviceStackParamList>
>;

const AdvicesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Advices"
    >
      <Stack.Screen name="Advices" component={AdvicesScreen} />
      <Stack.Screen name="MealPlan" component={MealPlannerScreen} />
      <Stack.Screen name="Advice" component={AdviceScreen} />
    </Stack.Navigator>
  );
};

export default AdvicesStack;
