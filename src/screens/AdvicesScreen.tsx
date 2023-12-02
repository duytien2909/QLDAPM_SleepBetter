import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import AdviceItem from "../components/AdviceItem";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowRight,
  faBowlFood,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import AdvicesStack, { AdviceScreenNavigationProp, AdviceStackParamList } from "../routes/StackNavigators/AdviceStacks/AdviceStacks";

//TODO: Replace this later
const SAMPLE_ADVICES = [
  "Should go to bed before 11:00 PM",
  "You have so many noisy devices in the room",
  "It would be better if we can maintain sleep duration about 7 to 8 hours instead of 9",
  "Keep doing exercise before bedtime",
];

const AdvicesScreen = () => {

  const navigation = useNavigation<AdviceScreenNavigationProp>();

  return (
    <View style={styles.container}>
      {/* TODO: Replace this as main navbar later since we didn't sync screens yet */}
      {/* <View style={styles.row}>
        <a style={styles.homeIconContainer} href="/">
          <FontAwesomeIcon style={styles.homeIcon} icon={faHouse} />
        </a>
        <Text style={styles.text}>Back</Text>
      </View> */}
      {/* <Text style={styles.title}>Advices</Text>
      <View style={styles.adviceContainer}>
        {SAMPLE_ADVICES.map((advice, index) => (
          <AdviceItem title={`${index + 1}. ${advice}`} key={index} />
        ))}
      </View> */}

      <View style={styles.title}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Good Afternoon!
        </Text>
        <Text style={{ fontSize: 16, color: "#7C7C7C" }}>
          {" "}
          82.348 people are here today
        </Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.main_contentContainer}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              rowGap: 12,
              columnGap: 12,
              flexShrink: 0,
              margin: 16,
            }}
          >
            <Text
              style={{
                width: "auto",
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "Mulish",
                fontSize: 16,
                fontStyle: "normal",
                fontWeight: "800",
              }}
            >
              {`Five Principles of Living Mindfully`}
            </Text>
            <Text
              style={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "Mulish",
                fontSize: 14,
                fontStyle: "normal",
                fontWeight: "500",
              }}
            >
              {`with Natalie James`}
            </Text>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 8,
                paddingLeft: 16,
                paddingRight: 16,
                paddingBottom: 8,
                alignItems: "flex-start",
                rowGap: 10,
                columnGap: 10,
                flexShrink: 0,
                borderRadius: 12,
                backgroundColor: "rgba(165, 80, 62, 1)",
              }}
            >
              <Text
                style={{
                  color: "rgba(255, 255, 255, 1)",
                  fontFamily: "Mulish",
                  fontSize: 12,
                  fontWeight: "700",
                }}
              >
                {`Today - 08:00 PM`}
              </Text>
            </View>
          </View>
          <View></View>
        </View>
      </View>
      <View style={styles.navigatorContainer}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 12,
            color: "#565656",
            margin: 8,
            marginLeft: 16,
          }}
        >{`Let us support you!!!`}</Text>
        <Pressable style={styles.buttonContainer}>
          <View style={styles.buttonIcon}>
            <FontAwesomeIcon
              style={{ color: "white" }}
              icon={faUserGroup}
              size={24}
            />
          </View>
          <View style={{ marginHorizontal: 8, width: "70%" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Advice</Text>
            <Text style={{ fontSize: 14, fontWeight: "400" }}>
              Take advice, give questions, get support
            </Text>
          </View>
          <View
            style={{
              height: 40,
              width: 40,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 8,

            }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </View>
        </Pressable>
        <Pressable style={styles.buttonContainer} >
          <View style={styles.buttonIcon}>
            <FontAwesomeIcon
              style={{ color: "white" }}
              icon={faBowlFood}
              size={24}
            />
          </View>
          <View style={{ marginHorizontal: 8, width: "70%" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Meal plan</Text>
            <Text style={{ fontSize: 14, fontWeight: "400" }}>
              Take healthy plan eating
            </Text>
          </View>
          <View
            style={{
              height: 40,
              width: 40,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 8,
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </View>
        </Pressable>
      </View>
      <View style={styles.emojiContainer}>
        <Text
          style={{
            color: "rgba(86, 86, 86, 1)",
            fontFamily: "Mulish",
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: "700",
            margin: 8,
          }}
        >{`Daily Check In`}</Text>
        <Text
          style={{
            color: "rgba(36, 36, 36, 1)",
            fontFamily: "Mulish",
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: "700",
            margin: 8,
          }}
        >
          How are you feeling today?
        </Text>
        <View style={styles.emojiContainer}>
          <View style={styles.emojiButton}>
            <Text style={styles.emojiText}>{`😃 Great`}</Text>
          </View>
          <View style={styles.emojiButton}>
            <Text style={styles.emojiText}>{`😊 Good`}</Text>
          </View>
          <View style={styles.emojiButton}>
            <Text style={styles.emojiText}>{`😕 Okay`}</Text>
          </View>
          <View style={styles.emojiButton}>
            <Text style={styles.emojiText}>{`🙁 Sad`}</Text>
          </View>
          <View style={styles.emojiButton}>
            <Text style={styles.emojiText}>{`😩 Awful`}</Text>
          </View>
        </View>
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
    backgroundColor: "#EAE8FE",
    paddingHorizontal: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    // backgroundColor: "#2b4162",
    // backgroundImage: "linear-gradient(315deg, #2b4162 0%, #12100e 74%)",
  },
  title: {
    width: "100%",
    textAlign: "center",
    marginTop: 60,
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 0.5,
  },
  adviceContainer: {
    marginTop: 24,
    display: "flex",
    gap: 12,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    width: "75%",
  },
  main_contentContainer: {
    width: "100%",
    borderRadius: 30,
    backgroundColor: "rgba(207, 111, 90, 1)",
    shadowRadius: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  navigatorContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignContent: "flex-start",
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 30,
    marginBottom: 8,
    width: "75%",
  },
  buttonContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    margin: 8,
  },

  buttonIcon: {
    height: 40,
    width: 40,
    backgroundColor: "blue",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  emojiContainer: {
    flex: 1,
    marginBottom: 8,
    flexDirection: "column",
    justifyContent: "space-between",
    width: "75%",
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 16,
    flexWrap: "wrap",
  },
  emojiListContainer: {
  },
  emojiText: {
    color: "rgba(36, 36, 36, 1)",
    fontFamily: "Mulish",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
  },
  emojiButton: {
    flexDirection: "row",
    margin: 10,
    borderRadius: 12,
    backgroundColor: "#FFF5F3",
    width: 87,
    height: 42,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default AdvicesScreen;
