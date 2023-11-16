import React from "react";
import RecordSleepScreen from "../../../screens/RecordSleepScreen";
import SetAlarmScreen from "../../../screens/SetAlarmScreen";
import SleepReportScreen from "../../../screens/SleepReportScreen";
import { RootTabParamList } from "../../../../App";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";

export type RecordSleepStackParamList = {
  SetAlarm: undefined;
  RecordSleep: {
    startTime: number;
    endTime: number;
    reminderDuration?: number;
  };
  SleepReport: {
    recordUri: string;
    startTime: number;
    endTime: number;
  };
};

const Stack = createNativeStackNavigator<RecordSleepStackParamList>();

export type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, "RecordSleepStack">,
  StackNavigationProp<RecordSleepStackParamList>
>;

const SleepRecordStacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SetAlarm"
    >
      <Stack.Screen name="SetAlarm" component={SetAlarmScreen} />
      <Stack.Screen name="RecordSleep" component={RecordSleepScreen} />
      <Stack.Screen name="SleepReport" component={SleepReportScreen} />
    </Stack.Navigator>
  );
};

export default SleepRecordStacks;
