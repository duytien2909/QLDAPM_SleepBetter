import { StyleSheet, Text, View } from "react-native";

import UI5Screen from "./src/screens/UI5Screen";

export default function App() {
  return (
    // tạo 1 screen mới trong src/screen
    // import vào đây
    // có thể tạo components thì để trong src/components
    <UI5Screen />
    // đây là màn hình ví dụ nha, tạo branch mới thì xóa tag này đi, chỉ để tag bạn làm vào đây
  );
}
