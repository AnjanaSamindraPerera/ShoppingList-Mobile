import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Goal = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItems}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    marginVertical: 10,
    borderWidth: 1,
  },
});

export default Goal;
