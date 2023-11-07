import ExampleScreen from "./src/screens/ExampleScreen";
import ErrorBoundary from "./src/containers/ErrorBoundary";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // tạo 1 screen mới trong src/screen
    // import vào đây
    // có thể tạo components thì để trong src/components
    <ErrorBoundary>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={ExampleScreen} />
            <Stack.Screen name="Login" component={ExampleScreen} />
            <Stack.Screen name="Signup" component={ExampleScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </ErrorBoundary>
    // đây là màn hình ví dụ nha, tạo branch mới thì xóa tag này đi, chỉ để tag bạn làm vào đây
  );
}
