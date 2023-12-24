import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme } from "native-base";
import React from "react";
import AuthProvider from "./src/containers/AuthProvider";
import ErrorBoundary from "./src/containers/ErrorBoundary";
import AuthStack from "./src/routes/StackNavigators/AuthStack";
import UserTab from "./src/routes/TabNavigators/UserTab/UserTab";
import { Provider } from "react-redux";
import store from "./src/redux/store";

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

export default function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer>
            <AuthProvider authComponent={UserTab} unAuthComponent={AuthStack} />
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
    </ErrorBoundary>
  );
}
