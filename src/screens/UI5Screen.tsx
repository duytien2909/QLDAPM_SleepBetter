import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHouse,
  faMicrophone,
  faMicrophoneSlash,
  faBars,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const UI5Screen = () => {
  const [isOnMic, setIsOnMic] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <a style={styles.homeIconContainer} href="/">
          <FontAwesomeIcon icon={faHouse} />
        </a>
        <Text style={styles.text}>Back</Text>
      </View>
      <View style={styles.row}>
        <TouchableHighlight
          style={styles.iconContainer}
          onPress={() => setIsOnMic((isOnMic) => !isOnMic)}
        >
          {isOnMic ? (
            <FontAwesomeIcon icon={faMicrophone} style={styles.onMicIcon} />
          ) : (
            <FontAwesomeIcon
              icon={faMicrophoneSlash}
              style={styles.defaultIcon}
            />
          )}
        </TouchableHighlight>
        <Text style={styles.text}>Micro is {isOnMic ? "on" : "off"}</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon icon={faMusic} />
        </View>
        <View>
          <View>
            <Text style={styles.text}>Time start</Text>
            <Text style={styles.timestamp}>11:40</Text>
          </View>
          <View>
            <Text style={styles.text}>Time end</Text>
            <Text style={styles.timestamp}>06:00</Text>
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <TouchableHighlight style={styles.iconContainer}>
          <FontAwesomeIcon icon={faBars} />
        </TouchableHighlight>
        <Text style={styles.text}>Choose music</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: "auto",
    marginBottom: "auto",
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Roboto, sans-serif",
    fontSize: 28,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: 28,
    marginTop: 16,
    paddingLeft: 20,
  },
  iconContainer: {
    padding: 12,
    marginRight: 15,
    borderRadius: 100,
    backgroundColor: "rgb(228,230,235)",
  },
  homeIconContainer: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingRight: 12,
    paddingLeft: 12,
    marginRight: 15,
    borderRadius: 100,
    backgroundColor: "rgb(228,230,235)",
  },
  defaultIcon: {
    color: "rgb(28,30,33)",
  },
  onMicIcon: {
    color: "#08A045",
  },
  text: {
    fontSize: 18,
  },
  timestamp: {
    padding: 4,
    backgroundColor: "#04AA6D",
    color: "#fff",
    borderRadius: 4,
    marginTop: 5,
    marginBottom: 20,
    fontSize: 18,
  },
});

export default UI5Screen;
