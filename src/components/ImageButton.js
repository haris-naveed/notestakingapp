import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const ImageButton = (props) => {
  return (
    <TouchableOpacity style={props.style} onPress={props.onPress}>
      <Image style={styles.img} source={props.source} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 50,
    width: 50,
  },
  //   button: {
  //     position: "absolute",
  //     bottom: 35,
  //     right: 5,
  //     padding: 20,
  //     alignSelf: "flex-end",
  //   },
});

export default ImageButton;
