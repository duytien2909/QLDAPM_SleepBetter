import { StyleSheet, Text, View } from "react-native";
import AdviceItem from "../../components/AdviceItem";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faHouse } from "@fortawesome/free-solid-svg-icons";

//TODO: Replace this later
const SAMPLE_ADVICES = [
  "Should go to bed before 11:00 PM",
  "You have so many noisy devices in the room",
  "It would be better if we can maintain sleep duration about 7 to 8 hours instead of 9",
  "Keep doing exercise before bedtime",
];

const AdvicesScreen = () => {
  return (
    <View style={styles.container}>
      {/* TODO: Replace this as main navbar later since we didn't sync screens yet */}
      {/* <View style={styles.row}>
        <a style={styles.homeIconContainer} href="/">
          <FontAwesomeIcon style={styles.homeIcon} icon={faHouse} />
        </a>
        <Text style={styles.text}>Back</Text>
      </View> */}
      <Text style={styles.title}>Advices</Text>
      <View style={styles.adviceContainer}>
        {SAMPLE_ADVICES.map((advice, index) => (
          <AdviceItem title={`${index + 1}. ${advice}`} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 48,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    // backgroundColor: "#2b4162",
    // backgroundImage: "linear-gradient(315deg, #2b4162 0%, #12100e 74%)",
  },
  title: {
    fontSize: 40,
    width: "100%",
    textAlign: "center",
    marginTop: 60,
    fontWeight: "600",
  },
  adviceContainer: {
    marginTop: 24,
    display: "flex",
    gap: 12,
  },
});

export default AdvicesScreen;
