import { StyleSheet, Text, View } from "react-native";
import AdviceItem from "../../components/AdviceItem";

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
      <Text style={styles.navbar}>Navigation bar</Text>
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
    height: "3rem",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: "0.625rem",
    backgroundColor: "#2b4162",
    backgroundImage: "linear-gradient(315deg, #2b4162 0%, #12100e 74%)",
  },
  title: {
    fontSize: "2.5rem",
    width: "100%",
    textAlign: "center",
    marginTop: "1rem",
    fontWeight: "600",
    color: "white",
  },
  adviceContainer: {
    marginTop: "1.5rem",
    display: "flex",
    gap: "0.75rem",
  },
});

export default AdvicesScreen;
