import React from "react";
import { Text, View, StyleSheet } from "react-native";

function ComponentsScreen(props) {
  return (
    <View>
      <Text style={styles}>This is the component screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
})

export default ComponentsScreen;