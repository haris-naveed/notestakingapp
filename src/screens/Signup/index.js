import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Image } from "react-native";
import {
  BACKGROUND_COLOR,
  BLACK_COLOR,
  WHITE_COLOR,
} from "../../../res/drawables";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = (props) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {}, []);

  const onSignupPressed = async () => {
    console.log("Signup pressed");
    const auth = getAuth();
    try {
      let res = await createUserWithEmailAndPassword(auth, email, password);
      alert("user created successfuly");
      props.navigation.goBack();
    } catch (e) {
      alert(`there is error :${e.message}`);
    }
  };
  const onAlreadyAccountPressed = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/Logo.png")} />

      <View style={{ ...styles.card, height: "8%" }}>
        <TextInput
          style={{ margin: 10 }}
          placeholder="enter Email here"
          multiline={true}
          onChangeText={(t) => setEmail(t)}
          value={email}
        />
      </View>
      <View style={{ ...styles.card, height: "8%" }}>
        <TextInput
          style={{ margin: 10 }}
          placeholder="enter Password here"
          // multiline={true}
          secureTextEntry={true}
          onChangeText={(t) => setPassword(t)}
          value={password}
        />
      </View>
      <View style={styles.btn}>
        <Button title={"Signup"} onPress={() => onSignupPressed()} />
      </View>
      <View style={styles.btn}>
        <Button
          title={"already have an account?"}
          onPress={() => onAlreadyAccountPressed()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    justifyContent: "center",
  },
  card: {
    backgroundColor: WHITE_COLOR,
    borderRadius: 20,
    margin: 10,
    borderWidth: 0.5,
    borderColor: BLACK_COLOR,
    // ShadowColor: BLACK_COLOR,
  },
  btn: {
    alignItems: "center",
    marginTop: 5,
  },
  logo: {
    height: 160,
    width: 220,
    alignSelf: "center",
  },
});

export default Signup;
