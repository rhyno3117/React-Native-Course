import React from "react";
import { Text, StyleSheet, View, Button } from "react-native"; //These are Primitive React Elements

const HomeScreen = () => {
  return <Text style={styles.text}>Hi there!</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
 

