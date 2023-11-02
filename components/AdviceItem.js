import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

//TODO: Replace this later
const ADVICE_CONTENT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const AdviceItem = ({ title }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        onPress={() => setIsExpanded((prev) => !prev)}
        style={styles.adviceTitle}
      >
        {title}
      </Text>
      {isExpanded && <Text style={styles.adviceContent}>{ADVICE_CONTENT}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "1rem",
    // backgroundColor: "#5078f2",
    // backgroundImage: "linear-gradient(315deg, #5078f2 0%, #efe9f4 74%)",
    borderRadius: "0.5rem",
    shadowOffset: {
      height: "0.25rem",
      width: "0.25rem",
    },
    borderWidth: 1,
  },
  adviceTitle: {
    fontSize: "1.25rem",
    fontWeight: "500",
  },
  adviceContent: {
    marginTop: "0.625rem",
    fontSize: "1rem",
  },
});

export default AdviceItem;
