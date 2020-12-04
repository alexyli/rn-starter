import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function CounterScreen(props) {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <View style={styles.buttonStyle}>
        <Button title="Increase" onPress={() => {setCounter(counter + 1)}} />
      </View>
      <View style={styles.buttonStyle}>
        <Button title="Decrease" onPress={() => {setCounter(counter - 1)}} />
      </View>
      <Text style={styles.text}>Current Count {counter}</Text>
      <View style={styles.buttonStyle}>
        <Button
          title="Reset"
          color="red"
          onPress={() => {setCounter(0)}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginVertical: 20,
    marginHorizontal: 40
  },
  text: {
    textAlign: "center",
    marginTop: 10
  }
})

export default CounterScreen;