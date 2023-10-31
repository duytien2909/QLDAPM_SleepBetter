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

const UI5Screen = () => {
  const [isOnMic, setIsOnMic] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <a style={styles.homeIconContainer} href='/'>
          <FontAwesomeIcon style={styles.homeIcon} icon={faHouse} />
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
    fontSize: "28px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: "28px",
    marginTop: "1em",
    paddingLeft: "20px",
  },
  iconContainer: {
    padding: "12px",
    marginRight: "15px",
    borderRadius: "50%",
    backgroundColor: "rgb(228,230,235)",
  },
  homeIconContainer: {
    paddingTop: "6px",
    paddingBottom: "6px",
    paddingRight: "12px",
    paddingLeft: "12px",
    marginRight: "15px",
    borderRadius: "50%",
    backgroundColor: "rgb(228,230,235)",
  },
  defaultIcon: {
    color: "rgb(28,30,33)",
    outline: "none",
  },
  onMicIcon: {
    color: "#08A045",
    outline: "none",
  },
  text: {
    fontSize: "18px",
  },
  timestamp: {
    padding: "4px",
    backgroundColor: "#04AA6D",
    color: "#fff",
    borderRadius: "4px",
    marginTop: "5px",
    marginBottom: "20px",
    fontSize: "18px",
  },
});

export default UI5Screen;
