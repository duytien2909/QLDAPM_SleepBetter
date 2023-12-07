import React from "react";
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import BackButton from "../components/BackButton";
import {
  faChevronLeft,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Checkbox, ScrollView } from "native-base";
import AdviceItem from "../components/AdviceItem";
import { useNavigation } from "@react-navigation/native";
import { AdviceScreenNavigationProp } from "../routes/StackNavigators/AdviceStacks/AdviceStacks";

const AdviceScreen = () => {
  const navigation = useNavigation<AdviceScreenNavigationProp>();

  const SAMPLE_ADVICES = [
    "Should go to bed before 11:00 PM",
    "You have so many noisy devices in the room",
    "It would be better if we can maintain sleep duration about 7 to 8 hours instead of 9",
    "Keep doing exercise before bedtime",
  ];

  return (
    <View style={styles.page}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Advices")}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          size={40}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            Good Afternoon!
          </Text>
          <Text style={{ color: "#7C7C7C", fontSize: 16, fontWeight: "500" }}>
            82,348 people are here today
          </Text>
        </View>
        <View style={styles.todoContainer}>
          <View style={styles.searchBar}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ marginLeft: 8 }}
              size={24}
            />
            <TextInput style={styles.searchBarInput} />
          </View>
          <View style={styles.todoList}>
            <Text style={{ fontSize: 18, fontWeight: "800" }}>To do list</Text>
            <ScrollView style={{ flex: 1 }}>
              {SAMPLE_ADVICES.map((advice, index) => (
                <View
                  style={{
                    margin: 4,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Checkbox value={""} />
                  <View style={styles.adviceItem}>
                    <AdviceItem title={`${index + 1}. ${advice}`} />
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#D4CEFF",
  },
  backButton: {
    alignSelf: "flex-start",
    margin: 16,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 1,
    marginBottom: 8,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  todoContainer: {
    height: "90%",
    backgroundColor: "white",
    borderRadius: 30,
    width: "85%",
    alignItems: "center",
  },
  searchBar: {
    marginTop: 8,
    backgroundColor: "#DAD1F6",
    width: "70%",
    height: 40,
    borderRadius: 16,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  searchBarInput: {
    width: "80%",
    height: "100%",
    marginLeft: 8,
  },
  todoList: {
    borderColor: "black",
    marginTop: 8,
    alignItems: "center",
    width: "90%",
    flex: 1,
    borderWidth: 0.2,
    marginBottom: 8,
  },
  adviceItem: {
    marginLeft: 8,
    width: '90%',
  },
});

export default AdviceScreen;
