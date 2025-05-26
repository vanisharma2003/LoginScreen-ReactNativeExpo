import { View, Text, FlatList, SafeAreaView } from "react-native";
import React from "react";

const FlatListMethod = () => {
  const renderHeader = () => {
    return <Text>Boxes</Text>;
  };
  const renderFooter = () => {
    return <Text>Footer</Text>;
  };
  const renderSeparator = () => {
    return <Text>separator</Text>;
  };
  return (
    <SafeAreaView>
      <FlatList
        data={[1, 2, 3, 4, 6, 7, 8, 9, 7, 7, 7, 7, 7, 7, 7, 7]}
        //  numColumns={3}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: "red",
                margin: 10,
              }}
            >
              <Text>{item}</Text>
            </View>
          );
        }}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  );
};

export default FlatListMethod;
