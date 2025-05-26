import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginPage = () => {
  const go = async () => {
    if (name != "" && age != "" && gender != "") {
      await AsyncStorage.setItem("name", name);
      await AsyncStorage.setItem("age", age);
      await AsyncStorage.setItem("gender", gender);
      router.push("/mainScreen");
    } else {
      alert("Pls fill all the fields");
    }
  };
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
         <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextInput
        placeholder="Enter your Name"
        onChangeText={setName}
        value={name}
        style={styles.textInputStyle}
      />
      <TextInput
        placeholder="Enter your Age"
        onChangeText={setAge}
        value={age}
        style={styles.textInputStyle}
      />
      
      <TextInput
        placeholder="Enter your gender"
        onChangeText={setGender}
        value={gender}
        style={styles.textInputStyle}
      />
      <TextInput
        placeholder="Enter your gender"
        onChangeText={setGender}
        value={gender}
        style={styles.textInputStyle}
      />
      <TextInput
        placeholder="Enter your gender"
        onChangeText={setGender}
        value={gender}
        style={styles.textInputStyle}
      />
      <TextInput
        placeholder="Enter your gender"
        onChangeText={setGender}
        value={gender}
        style={styles.textInputStyle}
      />
      <TextInput
        placeholder="Enter your gender"
        onChangeText={setGender}
        value={gender}
        style={styles.textInputStyle}
      />
      <TextInput
        placeholder="Enter your gender"
        onChangeText={setGender}
        value={gender}
        style={styles.textInputStyle}
      /><TextInput
        placeholder="Enter your gender"
        onChangeText={setGender}
        value={gender}
        style={styles.textInputStyle}
      />
      <TextInput
        placeholder="Enter your gender"
        onChangeText={setGender}
        value={gender}
        style={styles.textInputStyle}
      />
      <TextInput
        placeholder="Enter your gender"
        onChangeText={setGender}
        value={gender}
        style={styles.textInputStyle}
      />
      <TextInput
        placeholder="Enter your gender"
        onChangeText={setGender}
        value={gender}
        style={styles.textInputStyle}
      />
      <TextInput
        placeholder="Enter your gender"
        onChangeText={setGender}
        value={gender}
        style={styles.textInputStyle}
      />
      <TextInput
        placeholder="Enter your gender"
        onChangeText={setGender}
        value={gender}
        style={styles.textInputStyle}
      />
      <TextInput
        placeholder="Enter your gender"
        onChangeText={setGender}
        value={gender}
        style={styles.textInputStyle}
      />

      <TouchableOpacity
        style={{
          width: 100,
          height: 30,
          borderWidth: 2,
          backgroundColor: "orange",
          padding: 2,
          borderColor: "orange",
          borderRadius: 20,
        }}
        onPress={go}
      >
        <Text
          style={{
            color: "black",
            fontSize: 16,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
 
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    borderWidth: 2,
    borderColor: "black",
    width: 200,
    margin: 10,
  },
});
export default LoginPage;
