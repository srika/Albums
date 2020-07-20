import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
      flex:1,
      alignSelf:'stretch',
      backgroundColor:'#fff',
      borderRadius:5,
      borderWidth:1,
      borderColor:'#007aff',
      marginHorizontal: 5
  },
  textStyle: {
      alignSelf:'center',
      color:'#007aff',
      fontSize:16,
      fontWeight:'600',
      paddingVertical:10
  }
});

export default Button;
