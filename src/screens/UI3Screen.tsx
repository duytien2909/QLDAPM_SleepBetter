import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const UI3Screen = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<number>(0);

  const handleAnswerButton = (answerId: number) => {
    setSelectedAnswer(answerId);
  };

  const handleSendButton = () => {
    console.log(selectedAnswer);
  };

  const handleBackButton = () => {
    console.log("Back");
  };

  const data = [
    { id: 1, title: "Answer 1" },
    { id: 2, title: "Answer 2" },
    { id: 3, title: "Answer 3" },
    { id: 4, title: "Answer 4" },
  ];

  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={handleBackButton} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.appBar}>
          <Text>App Title</Text>
        </View>
        <View style={styles.question_container}>
          <Image
            style={styles.icon}
            source={require("../../assets/night-mode.png")}
          />
          <Text style={styles.question}>Câu hỏi 1</Text>
        </View>
        <View>
          <Text style={styles.question}>
            Bạn có đang gặp vấn đề về mộng du hay không?
          </Text>
        </View>
        {data.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.button,
              selectedAnswer === item.id && styles.selectedButton,
            ]}
            onPress={() => handleAnswerButton(item.id)}
          >
            <Text style={styles.buttonText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.sendButton} onPress={handleSendButton}>
          <Text style={styles.sendButtonText}>Gửi trả lời</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  appBar: {
    flexDirection: "row",
    alignItems: "center",
    color: "white",
  },
  backButton: {
    marginRight: 10,
    color: "white",
  },
  question: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  question_container: {
    width: Dimensions.get("window").width * 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
  answer_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "70%",
    height: 40,
    borderRadius: 20,
    backgroundColor: "lightblue",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedButton: {
    backgroundColor: "green",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  sendButton: {
    width: "70%",
    height: 40,
    borderRadius: 20,
    backgroundColor: "lightblue",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  sendButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  icon: {
    width: 150,
    height: 150,
  },
});

export default UI3Screen;
