import React from "react";
import { View, Text, Button } from "react-native";

function CounterScreen(props) {
  let counter = 0;

  return (
    <View>
       <Button title="Increase" onPress={() => {counter++}} />
       <Button title="Decrease" onPress={() => {counter--}} />
       <Text>Current Count {counter}</Text>
    </View>
  )
}

export default CounterScreen;