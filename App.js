import { StyleSheet, Text, View } from "react-native";

import ExampleScreen from "./src/screens/ExampleScreen";
import UI6Screen from "./src/screens/UI6";

export default function App() {
  return (
    // tạo 1 screen mới trong src/screen
    // import vào đây
    // có thể tạo components thì để trong src/components
    <UI6Screen />
    // đây là màn hình ví dụ nha, tạo branch mới thì xóa tag này đi, chỉ để tag bạn làm vào đây
  );
}
