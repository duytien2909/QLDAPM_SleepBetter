import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
  FlatList,
  Switch,
  Image,
  Pressable,
} from "react-native";

const HomeScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

  const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  const startDate = 23;

  return (
    <View style={styles.page}>
      <ImageBackground
        style={styles.background}
        source={require("../../assets/background.png")}
      >
        <View
          style={{
            backgroundColor: "#8F6FF5",
            width: "80%",
            height: "20%",
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "white",
              margin: 6,
            }}
          >
            You have slept at 09:30 that is above your recommendation
          </Text>
        </View>
        <View style={{ height: "20%", marginTop: 16, width: "80%" }}>
          <Text
            style={{
              fontSize: 24,
              color: "black",
              fontWeight: "bold",
              alignSelf: "center",
              marginBottom: 8,
            }}
          >
            Your Slept Calendar
          </Text>
          <View style={{ flexDirection: "row" }}>
            <FlatList
              horizontal
              data={daysOfWeek}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View style={styles.dayContainer}>
                  <Text style={styles.dayText}>{item}</Text>
                  <Text style={styles.dateText}>{startDate + index}</Text>
                </View>
              )}
            />
          </View>
        </View>
        <View
          style={{
            width: "80%",
            height: "20%",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View style={styles.ButtonContainer}>
            <View style={styles.circle}>
              <Ionicons name="bed-outline" size={30} />
            </View>
            <Text style={{ fontSize: 20, color: "black" }}>Bed Time</Text>
            <Text style={{ fontSize: 12, color: "gray" }}>7H and 28Min</Text>
            <Switch
              trackColor={{ false: "gray", true: "#8F6FF5" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#8F6FF5"}
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{ alignSelf: "flex-start" }}
            />
          </View>
          <View style={styles.ButtonContainer}>
            <View style={styles.circle}>
              <Ionicons name="alarm-outline" size={30} />
            </View>
            <Text style={{ fontSize: 20, color: "black" }}>Alarm</Text>
            <Text style={{ fontSize: 12, color: "gray" }}>7H and 28Min</Text>
            <Switch
              trackColor={{ false: "gray", true: "#8F6FF5" }}
              thumbColor={isEnabled2 ? "#f5dd4b" : "#8F6FF5"}
              onValueChange={toggleSwitch2}
              value={isEnabled2}
              style={{ alignSelf: "flex-start" }}
            />
          </View>
        </View>
        <View
          style={{
            width: "80%",
            height: "20%",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View>
            <Text style={{ fontSize: 16, color: "gray" }}>Have a problem?</Text>
            <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
              Sleeping?
            </Text>
            <Pressable>
              <View
                style={{
                  backgroundColor: "whitesmoke",
                  borderRadius: 32,
                  padding: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <Text style={{ color: "#8F6FF5" }}>Consult an expert</Text>
              </View>
            </Pressable>
          </View>
          <View>
            <Image source={require("../../assets/demo.png")} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "120%",
  },
  dayContainer: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  dayText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  dateText: {
    fontSize: 16,
    marginTop: 5,
    color: "black",
  },
  ButtonContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    height: "90%",
    width: "40%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: 10,
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
});
