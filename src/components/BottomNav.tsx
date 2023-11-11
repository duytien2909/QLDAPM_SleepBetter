import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export interface BottomNavProps {
  testID?: string;
}

export function BottomNav(props: BottomNavProps) {
  return (
    <View style={styles.root} testID={props.testID}>
      <Pressable style={styles.IconWrapper}>
        <Ionicons name="home-outline" size={28} />
      </Pressable>
      <Pressable style={styles.IconWrapper}>
        <Ionicons name="moon-outline" size={28} />
      </Pressable>
      <Pressable style={styles.IconWrapper}>
        <Ionicons name="podium-outline" size={28} />
      </Pressable>
      <Pressable style={styles.IconWrapper}>
        <Ionicons name="bulb-outline" size={28} />
      </Pressable>
      <Pressable style={styles.IconWrapper}>
        <Ionicons name="settings-outline" size={28} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    width: "100%",
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 20,
    paddingTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "rgba(151, 118, 255, 1)",
  },
  IconWrapper: {
    flexDirection: "row",
    width: 36,
    height: 30,
    justifyContent: "space-between",
    alignItems: "center",
    flexShrink: 0,
  },
});
