import React from "react";
import { View, Text, Image } from "react-native";

function ImageDetail({ title, imageSource, score }) {
  return (
    <View>
      <Image source={imageSource} />
      <Text>Show image of {title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  )
}

export default ImageDetail;
