import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

function HomeScreen(props) {
  const { navigation } = props;
  const buttons = [
    { title: "Go to Components Demo", screen: "Components" },
    { title: "Go to List Demo", screen: "List" },
    { title: "Go to Image Demo", screen: "Image" },
    { title: "Go to Counter Demo", screen: "Counter" },
    { title: "Go to Color Demo", screen: "Color" },
    { title: "Go to Square Demo", screen: "Square" }
  ]

  return (
    <View>
      <Text style={styles.text}>Alex's React Native App</Text>
      <FlatList
        keyExtractor={button => button.screen}
        data={buttons}
        renderItem={({item}) => (
          <View style={styles.marginSpace}>
            <Button
              title={item.title}
              onPress={() => navigation.navigate(item.screen)}
            />
          </View>
        )}
      />
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
