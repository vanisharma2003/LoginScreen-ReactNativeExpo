import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const MainScreen = () => {
  const { name, age, gender } = useLocalSearchParams();
  return (
    <View>
      <Text>{`Hii ${name} Your age is ${age} and gender is ${gender}`}</Text>
    </View>
  );
};

export default MainScreen;
