import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import TabBar from "../components/TabBar";

const UI6Screen = () => {
  const sleepQualityPercentage = 60;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.homeIconContainer}
          onPress={() => alert("Home Button Pressed!")}
        >
          <FontAwesomeIcon style={styles.homeIcon} icon={faHome} />
        </TouchableOpacity>
        <Text style={styles.text}>Back</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Sleep Quality in this week</Text>
        <View style={styles.progressBar}>
          <View
            style={[styles.progress, { width: `${sleepQualityPercentage}%` }]}
          >
            <Text style={styles.percentageText}>{sleepQualityPercentage}%</Text>
          </View>
        </View>
      </View>
      <TabBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  homeIconContainer: {
    padding: 12,
    marginRight: 10,
    borderRadius: 50,
    backgroundColor: "rgb(228,230,235)",
  },
  homeIcon: {
    color: "rgb(28,30,33)",
  },
  text: {
    fontSize: 18,
  },
  contentContainer: {
    width: "100%",
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
  },
  progressBar: {
    width: "100%",
    height: 20,
    backgroundColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    backgroundColor: "#4caf50",
    position: "relative",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  percentageText: {
    height: "100%",
    marginRight: 10,
    fontSize: 16,
    color: "#fff",
  },
});

export default UI6Screen;
