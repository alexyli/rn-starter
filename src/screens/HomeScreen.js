import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function HomeScreen(props) {
  const { navigation } = props;

  return (
    <View>
      <Text style={styles.text}>Alex's App</Text>
      <Button title="Go to Components Demo" onPress={() => navigation.navigate("Components")} />
    </View>

  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
