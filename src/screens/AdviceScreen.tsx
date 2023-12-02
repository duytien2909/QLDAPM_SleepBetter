import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import BackButton from "../components/BackButton";
import { faChevronLeft, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ScrollView } from "native-base";

const AdviceScreen = () => {
  return (
    <View style={styles.page}>
      <FontAwesomeIcon icon={faChevronLeft} style={styles.backButton} size={40} />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={{fontSize: 24, fontWeight:'bold'}}>Good Afternoon!</Text>
          <Text style={{color: '#7C7C7C', fontSize: 16, fontWeight: '500'}}>82,348 people are here today</Text>
        </View>
        <ScrollView style={styles.todoContainer}>
          <View style={styles.searchBar}>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{margin: 8,}} size={46} />
            <TextInput  style={styles.searchBarInput} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#D4CEFF',
  },
  backButton: {
    alignSelf: 'flex-start',
    margin: 16,
  },
  container:{
    justifyContent:'center',
    alignItems:'center',
    width: '80%',
  },
  textContainer: {
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 8,
  },
  todoContainer: {
    height: '100%',
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 30,
    minHeight: 450,
    alignContent:'center',
  },
  searchBar: {
    backgroundColor: '#DAD1F6',
    width: '70%',
    height: 40,
    marginTop: 8,
  },
  searchBarInput: {
    width: '80%',
    height: '100%',
  },
});

export default AdviceScreen;
