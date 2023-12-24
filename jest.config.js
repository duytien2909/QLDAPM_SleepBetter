// module.exports = {
//   preset: "react-native",
//   setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
//   transformIgnorePatterns: [
//     "node_modules/(?!(react-native|sleepbetter|react-native-button)/)",
//   ],
// };

module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|@expo/vector-icons|@react-native|@react-native-community|@react-navigation|react-native-circular-progress|expo-av|expo-modules-core|dayjs|expo-document-picker|@fortawesome/react-native-fontawesome|@react-native/js-polyfills)/)",
  ],
};
