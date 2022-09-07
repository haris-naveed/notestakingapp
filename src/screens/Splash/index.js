import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { BACKGROUND_COLOR } from "../../../res/drawables";
const Splash = (props) => {
  setTimeout(() => {
    props.navigation.replace("Login");
  }, 3000);
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/Logo.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BACKGROUND_COLOR,
  },
  logo: {
    height: 160,
    width: 220,
  },
});

export default Splash;
