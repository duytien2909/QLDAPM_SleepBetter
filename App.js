import ExampleScreen from "./src/screens/ExampleScreen";
import ErrorBoundary from "./src/containers/ErrorBoundary";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    // tạo 1 screen mới trong src/screen
    // import vào đây
    // có thể tạo components thì để trong src/components
    <ErrorBoundary>
      <NativeBaseProvider>
        <ExampleScreen />
      </NativeBaseProvider>
    </ErrorBoundary>
    // đây là màn hình ví dụ nha, tạo branch mới thì xóa tag này đi, chỉ để tag bạn làm vào đây
  );
}
