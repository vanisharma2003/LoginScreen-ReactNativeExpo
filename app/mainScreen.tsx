import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const MainScreen = () => {
  const [name, setName] = useState<any>("");
  const [age, setAge] = useState<any>("");
  const [gender, setGender] = useState<any>("");
  const loadData = async () => {
    setName(await AsyncStorage.getItem("name"));
    setGender(await AsyncStorage.getItem("gender"));
    setAge(await AsyncStorage.getItem("age"));
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <View>
      <Text>{`Hii ${name} your age is ${age} and gender is ${gender}`}</Text>
    </View>
  );
};

export default MainScreen;
