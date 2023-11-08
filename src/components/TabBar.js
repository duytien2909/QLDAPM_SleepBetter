import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import TabContent from "./TabContent";

const TabBar = () => {
  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabItemContainer}>
        <TouchableOpacity style={styles.tabItem}>
          <Text>Day</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text>Week</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text>Month</Text>
        </TouchableOpacity>
      </View>
      <TabContent />
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    marginTop: 20,
  },
  tabItemContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "#eee",
    paddingVertical: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
  },
});

export default TabBar;
