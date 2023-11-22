import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import PushNotification from 'react-native-push-notification';
import { useToast } from 'react-native-toast-notifications';
import {
  AppRegistry,
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
  const [isBedTime, setIsBedTime] = useState(false);
  const toggleBedTimeSwitch = () =>
    setIsBedTime((previousState) => !previousState);
  const [isAlarm, setIsAlarm] = useState(false);

  const toggleAlarmSwitch = () => {
    setIsAlarm((previousState) => !previousState);
    if (!isAlarm) {
      const hours = selectedAlarmDate.getHours();
      const minutes = selectedAlarmDate.getMinutes();
  
      const currentDate = new Date();

      const nextAlarmDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hours, minutes);
  
      PushNotification.localNotificationSchedule({
        title: 'Daily Alarm',
        message: 'Time to wake up!',
        date: nextAlarmDate, 
        repeatType: 'day', 
      });
    } else {
      PushNotification.cancelAllLocalNotifications();
    }
  };
  const [isAlarmDatePickerVisible, setAlarmDatePickerVisible] = useState(false);
  const [selectedAlarmDate, setSelectedAlarmDate] = useState(new Date());

  const [isBedTimeDatePickerVisible, setBedTimeDatePickerVisible] =
    useState(false);
  const [selectedBedTimeDate, setSelectedBedTimeDate] = useState(new Date());

  const showAlarmDatePicker = () => setAlarmDatePickerVisible(true);
  const hideAlarmDatePicker = () => setAlarmDatePickerVisible(false);
  const handleAlarmDateConfirm = (date: any) => {
    hideAlarmDatePicker();
    setSelectedAlarmDate(date);
    // Do something with the selected date (set Alarm)
  };

  const showBedTimeDatePicker = () => setBedTimeDatePickerVisible(true);
  const hideBedTimeDatePicker = () => setBedTimeDatePickerVisible(false);
  const handleBedTimeDateConfirm = (date: any) => {
    hideBedTimeDatePicker();
    setSelectedBedTimeDate(date);
    scheduleBedTimeNotification(date);
  };

  const scheduleBedTimeNotification = (bedTime: any) => {
    PushNotification.localNotificationSchedule({
      title: "BedTime",
      message: "Time to go to sleep!",
      date: bedTime,
    });
  };
  const formatTime = (date: any) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}H and ${minutes}Min`;
  };

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
              color: "white",
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
            <Pressable onPress={showBedTimeDatePicker}>
              <Text style={{ fontSize: 12, color: "black" }}>
                {formatTime(selectedBedTimeDate)}
              </Text>
            </Pressable>
            <DateTimePickerModal
              isVisible={isBedTimeDatePickerVisible}
              mode="time"
              onConfirm={handleBedTimeDateConfirm}
              onCancel={hideBedTimeDatePicker}
            />
            <Switch
              trackColor={{ false: "gray", true: "#8F6FF5" }}
              thumbColor={isBedTime ? "#f5dd4b" : "#8F6FF5"}
              onValueChange={toggleBedTimeSwitch}
              value={isBedTime}
              style={{ alignSelf: "flex-start" }}
            />
          </View>
          <View style={styles.ButtonContainer}>
            <View style={styles.circle}>
              <Ionicons name="alarm-outline" size={30} />
            </View>
            <Text style={{ fontSize: 20, color: "black" }}>Alarm</Text>
            <Pressable onPress={showAlarmDatePicker}>
              <Text style={{ fontSize: 12, color: "black" }}>
                {formatTime(selectedAlarmDate)}
              </Text>
            </Pressable>
            <DateTimePickerModal
              isVisible={isAlarmDatePickerVisible}
              mode="time"
              onConfirm={handleAlarmDateConfirm}
              onCancel={hideAlarmDatePicker}
            />
            <Switch
              trackColor={{ false: "gray", true: "#8F6FF5" }}
              thumbColor={isAlarm ? "#f5dd4b" : "#8F6FF5"}
              onValueChange={toggleAlarmSwitch}
              value={isAlarm}
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
            <Text style={{ fontSize: 16, color: "lightgray" }}>Have a problem?</Text>
            <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
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
    color: "white",
  },
  dateText: {
    fontSize: 16,
    marginTop: 5,
    color: "white",
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
