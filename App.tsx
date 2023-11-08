import "react-native-gesture-handler";

import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import ErrorBoundary from "./src/containers/ErrorBoundary";
import ExampleScreen from "./src/screens/ExampleScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AdvicesScreen from "./src/screens/AdvicesScreen";
import StartScreen from "./src/screens/Start";
import UI3Screen from "./src/screens/UI3Screen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <ErrorBoundary>
      <NativeBaseProvider>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Example" component={ExampleScreen} />
            <Drawer.Screen name="Advices" component={AdvicesScreen} />
            <Drawer.Screen name="Start" component={StartScreen} />
            <Drawer.Screen name="UI_3" component={UI3Screen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </ErrorBoundary>
  );
}
