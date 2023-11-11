import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { BottomNav } from "../components/BottomNav";
import ProgressCircle from "../components/ProgressCircle";

const UI6Screen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sleep Analytics</Text>
        <Text style={styles.subtitle}>Based on our Data</Text>
      </View>
      <ImageBackground
        style={styles.backgroundImg}
        source={require("../../assets/UI_6/bg_purple.png")}
        resizeMode="stretch"
      >
        <Text style={styles.review}>
          You almost reach a perfect month of sleep
        </Text>
        <ProgressCircle radius={45} progress={75} />
      </ImageBackground>
      <View style={styles.overview}>
        <Text style={styles.title}>Sleep Overview</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View style={styles.box}>
            <Text style={styles.month}>Monthly Change</Text>
            <Text style={styles.textUp}>26%</Text>
            <Image source={require("../../assets/UI_6/graph_up.png")} />
          </View>
          <View style={styles.box}>
            <Text style={styles.month}>Monthly Change</Text>
            <Text style={styles.textDown}>-30%</Text>
            <Image source={require("../../assets/UI_6/graph_down.png")} />
          </View>
        </View>
        <Text style={styles.title}>Weekly Overview</Text>
        <Image
          source={require("../../assets/UI_6/weekly_graph.png")}
          style={styles.weeklyGraph}
        />
      </View>

      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
  },
  header: {
    paddingHorizontal: 36,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 16,
    color: "#8189B0",
  },
  backgroundImg: {
    height: 152,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 56,
    alignItems: "center",
    justifyContent: "space-between",
  },
  review: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    width: 100,
    marginLeft: 50,
  },
  overview: {
    paddingHorizontal: 36,
  },
  box: {
    width: 150,
    height: 130,
    backgroundColor: "#f8f7fe",
    borderRadius: 20,
    paddingLeft: 16,
    paddingVertical: 18,
    marginBottom: 20,
  },
  month: {
    fontSize: 12,
    fontWeight: "600",
  },
  textUp: {
    fontSize: 23,
    fontWeight: "600",
    color: "#4DC771",
  },
  textDown: {
    fontSize: 23,
    fontWeight: "600",
    color: "#FF5959",
  },
  weeklyGraph: {
    width: "100%",
    resizeMode: "cover",
  },
});

export default UI6Screen;
