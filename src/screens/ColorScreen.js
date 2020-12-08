import React, { useState } from "react";
import { View, Button, FlatList, StyleSheet } from "react-native";

function ColorScreen() {
  const [colors, setColors] = useState([])

  function addColor() {
    setColors([...colors, randomRgb()]);
  }

  return (
    <View>
      <View>
        <Button title="Add a color" onPress={() => addColor()} />
        <Button color="red" title="Reset" onPress={() => setColors([])} />
      </View>
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({item}) => (
          <View style={{ height: 100, width: 100, backgroundColor: item }} />
        )}
      />
    </View>
  )
}

function randomRgb() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
}

const styles = StyleSheet.create({

});

export default ColorScreen;