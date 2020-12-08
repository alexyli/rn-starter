import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function HomeScreen(props) {
  const { navigation } = props;

  return (
    <View>
      <Text style={styles.text}>Alex's React Native App</Text>

      <View style={styles.marginSpace}>
        <Button
          title={"Go to Components Demo"}
          onPress={() => navigation.navigate("Components")}
        />
      </View>
      <View style={styles.marginSpace}>
        <Button
          title="Go to List Demo"
          onPress={() => navigation.navigate("List")}
        />
      </View>
      <View style={styles.marginSpace}>
        <Button
          title="Go to Image Demo"
          onPress={() => navigation.navigate("Image")}
        />
      </View>
      <View style={styles.marginSpace}>
        <Button
          title="Go to Counter Demo"
          onPress={() => navigation.navigate("Counter")}
        />
      </View>
      <View style={styles.marginSpace}>
        <Button
          title="Go to Color Demo"
          onPress={() => navigation.navigate("Color")}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 40
  },
  marginSpace: {
    paddingVertical: 20,
    paddingHorizontal: 40
  }
});

export default HomeScreen;
