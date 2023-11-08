import "react-native-gesture-handler";

import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import ErrorBoundary from "./src/containers/ErrorBoundary";
import ExampleScreen from "./src/screens/ExampleScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AdvicesScreen from "./src/screens/AdvicesScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <ErrorBoundary>
      <NativeBaseProvider>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Example" component={ExampleScreen} />
            <Drawer.Screen name="Advices" component={AdvicesScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </ErrorBoundary>
  );
}
