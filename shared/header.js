import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { Foundation } from "@expo/vector-icons";

const Header = ({ home, review, voucher }) => {
  return (
    <View style={styles.header}>
      {home && (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Text style={styles.headerText}>EventX</Text>
        </View>
      )}

      {review && <Text style={styles.headerText}>Review</Text>}

      {voucher && (
        <View style={[globalStyles.center, { flexDirection: "row" }]}>
          <Foundation name="ticket" size={24} color="white" />
          <Text style={globalStyles.eventTitle}> VOUCHERS </Text>
          <Foundation name="ticket" size={24} color="white" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#80bfff",
  },
});

export default Header;
