import "react-native-gesture-handler";

import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import ErrorBoundary from "./src/containers/ErrorBoundary";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import SleepAnalyticsScreen from "./src/screens/SleepAnalyticsScreen";
import SleepRecordStacks, {
  RecordSleepStackParamList,
} from "./src/routes/StackNavigators/SleepRecordStacks/SleepRecordStacks";
import Ionicons from "@expo/vector-icons/Ionicons";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#3828B7",
      100: "#3828B7",
      200: "#3828B7",
      300: "#3828B7",
      400: "#3828B7",
      500: "#3828B7",
      600: "#3828B7",
      700: "#3828B7",
      800: "#3828B7",
      900: "#3828B7",
    },
  },
  components: {
    Button: {
      baseStyle: () => ({
        rounded: "full",
        paddingTop: 4,
        paddingBottom: 4,
        fontWeight: 700,
        fontSize: 18,
      }),
    },
  },
});

export type RootTabParamList = {
  Home: undefined;
  RecordSleepStack: NavigatorScreenParams<RecordSleepStackParamList>;
  SleepAnalytics: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <ErrorBoundary>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: {
                backgroundColor: "#7750F5",
              },
            }}
            initialRouteName="Home"
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
        </NavigationContainer>
      </NativeBaseProvider>
    </ErrorBoundary>
  );
}
