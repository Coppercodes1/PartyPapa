import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#80bfff",
  },
  buttonText: {
    color: "#00001a",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 17,
    textAlign: "center",
  },
});

export default Button;
