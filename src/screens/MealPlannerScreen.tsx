import React from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../components/BackButton";
import {
  faCalendar,
  faChevronLeft,
  faChevronRight,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Checkbox, Container, ScrollView } from "native-base";
import AdviceItem from "../components/AdviceItem";
import MealItem from "../components/MealItem";
import { useNavigation } from "@react-navigation/native";
import { AdviceScreenNavigationProp } from "../routes/StackNavigators/AdviceStacks/AdviceStacks";

const MealPlannerScreen = () => {
  const navigation = useNavigation<AdviceScreenNavigationProp>();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const generateDays = () => {
    const currentDate = new Date();
    const days = [];

    for (let i = 0; i < 30; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + i
      );
      const dayOfWeek = daysOfWeek[date.getDay()];
      const formattedDate = date.getDate();

      days.push({
        date: formattedDate,
        day: dayOfWeek,
      });
    }

    return days;
  };

  return (
    <View style={styles.page}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("Advices")}
      >
        <FontAwesomeIcon icon={faChevronLeft} size={40} />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Mediterranean Diet
      </Text>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text
            style={{
              color: "#4430F4",
              fontSize: 28,
              fontWeight: "600",
              marginLeft: 16,
            }}
          >
            Daily Meal Planner
          </Text>
          <Pressable>
            <FontAwesomeIcon icon={faCalendar} size={24} color="#FBBB17" />
          </Pressable>
          <Pressable>
            <FontAwesomeIcon
              icon={faSquarePlus}
              size={24}
              style={{ marginRight: 16 }}
              color="#FBBB17"
            />
          </Pressable>
        </View>
        <Pressable
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            marginLeft: 16,
            marginTop: 8,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>April 2023</Text>
          <FontAwesomeIcon icon={faChevronRight} size={16} />
        </Pressable>
        <View style={styles.dateContainer}>
          <View style={{ flexDirection: "row" }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={generateDays()}
              keyExtractor={(item) => item.date.toString()}
              renderItem={({ item }) => (
                <View style={styles.dateItem}>
                  <Text style={{ fontSize: 16, fontWeight: "800" }}>
                    {item.day}
                  </Text>
                  <Text style={{ fontSize: 20, fontWeight: "800" }}>
                    {item.date}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
        <ScrollView
          style={{ width: "90%", alignSelf: "center" }}
          showsVerticalScrollIndicator={false}
        >
          <MealItem
            mealType="Breakfast"
            calo={456}
            foodName="Oatmeal"
            image="https://media.istockphoto.com/id/470664446/vi/anh/b%C3%A1t-b%E1%BB%99t-y%E1%BA%BFn-m%E1%BA%A1ch-c%E1%BA%AFt-th%C3%A9p-t%E1%BB%B1-ch%E1%BA%BF-trong-b%C3%A1t-m%C3%A0u-xanh.jpg?s=1024x1024&w=is&k=20&c=eR58YQ4oKgzQ36Zdp3jfBEWScJOIJFwJ_sS73Ja8pEM="
            ingredients={["Oatmeal", "Bananas", "BlueBerry", "Milk"]}
          />
          <MealItem
            mealType="Lunch"
            calo={373}
            foodName="Chicken Sandwich"
            image="https://images.squarespace-cdn.com/content/5d96a22649af0e131e78ca1c/1645276157065-GYTYW2CVTR4IA05VNELS/_DSC0543-2.jpg?format=1500w&content-type=image%2Fjpeg"
            ingredients={["Chicken Breast", "Wheat Buns", "Lettuce"]}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  backButton: {
    alignSelf: "flex-start",
    margin: 16,
  },
  container: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: "black",
    flex: 1,
    width: "95%",
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
    backgroundColor: "#E5E5E5",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  dateContainer: {
    flexDirection: "row",
    marginLeft: 8,
    marginRight: 8,
  },
  dateItem: {
    margin: 10,
    borderBlockColor: "black",
    borderWidth: 1,
    height: 80,
    width: 80,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 8,
  },
});

export default MealPlannerScreen;
