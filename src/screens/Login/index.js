import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Image } from "react-native";
import {
  BACKGROUND_COLOR,
  BLACK_COLOR,
  WHITE_COLOR,
} from "../../../res/drawables";

const Login = (props) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {}, []);

  const onLoginPressed = () => {
    console.log("login pressed");
  };
  const onForgetPasswordPressed = () => {
    console.log("Forget password pressed");
  };
  const onSignupPressed = () => {
    props.navigation.navigate("Signup");
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
        <Button title={"Login"} onPress={() => onLoginPressed()} />
      </View>
      <View style={styles.btn}>
        <Button
          title={"Forget password"}
          onPress={() => onForgetPasswordPressed()}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title={"Does not have an account?"}
          onPress={() => onSignupPressed()}
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

export default Login;
