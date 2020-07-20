import React from "react";
import { StyleSheet, Text } from "react-native";

const Header = ({ title }) => {
  return <Text style={styles.headerStyle}>{title}</Text>;
};

const styles = StyleSheet.create({
  headerStyle: {
    textAlign: "center",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },
});

export default Header;
