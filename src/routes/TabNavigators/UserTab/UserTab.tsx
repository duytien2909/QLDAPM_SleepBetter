import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import SleepRecordStacks, {
  RecordSleepStackParamList,
} from "../../StackNavigators/SleepRecordStacks/SleepRecordStacks";
import HomeScreen from "../../../screens/HomeScreen";
import SleepAnalyticsScreen from "../../../screens/SleepAnalyticsScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

export type RootTabParamList = {
  Start: undefined;
  Home: undefined;
  RecordSleepStack: NavigatorScreenParams<RecordSleepStackParamList>;
  SleepAnalytics: undefined;
  Login: undefined;
  SignUp: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const UserTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#7750F5",
        },
      }}
      initialRouteName="Login"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="home-outline"
              size={size}
              color={focused ? "#BBBFD0" : "#000"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="RecordSleepStack"
        component={SleepRecordStacks}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="moon-outline"
              size={size}
              color={focused ? "#BBBFD0" : "#000"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SleepAnalytics"
        component={SleepAnalyticsScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="podium-outline"
              size={size}
              color={focused ? "#BBBFD0" : "#000"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default UserTab;
