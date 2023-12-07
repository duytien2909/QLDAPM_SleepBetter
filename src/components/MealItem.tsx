  import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
  import React, { useEffect, useState } from "react";
  import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

  interface MealItemProps {
    mealType: string;
    calo: number;
    foodName: string;
    image: string;
    ingredients: string[];
  }

  const MealItem: React.FC<MealItemProps> = ({
    mealType,
    calo,
    foodName,
    image,
    ingredients,
  }) => {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-start",
            alignItems: "center",
          }}
        >
          <View style={{width: 120}}>
          <Text style={{ color: "#4430F4", fontSize: 24 }}>
            {mealType}
          </Text>
          </View>
          <View style={styles.caloContainer}>
            <Text style={{ fontSize: 14, fontWeight: "700" }}>{calo} Cal</Text>
          </View>
        </View>
        <View style={styles.foodContainer}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 22, fontWeight: "400" }}>{foodName}</Text>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faPenToSquare} size={24} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent:'space-around' }}>
            <Image
              source={{ uri: image }}
              style={{ width: 150, height: 150, flex: 1 }}
            />
            <View style={{ flex: 1, justifyContent:'center' }}>
              <View style={{ flexDirection: "column", justifyContent:'center', left:'25%' }}>
                {ingredients.map((ingredient) => (
                  <Text style={{fontSize: 19, fontWeight:'600'}} key={ingredient}>{ingredient}</Text>
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    caloContainer: {
      backgroundColor: "#FBBB17",
      width: 90,
      height: 30,
      borderRadius: 30,
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      margin: 10,
    },
    foodContainer: {
      backgroundColor: "white",
      width: 330,
      height: 220,
      borderRadius: 20,
      padding: 10,
    },
  });

  export default MealItem;
