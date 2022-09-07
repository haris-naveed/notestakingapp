import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import {
  BACKGROUND_COLOR,
  BLACK_COLOR,
  WHITE_COLOR,
} from "../../../res/drawables";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CreateNote = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(null);

  const { noteTitle } = props.route.params;

  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    if (noteTitle) {
      let description = await AsyncStorage.getItem(noteTitle);
      setTitle(noteTitle);
      setDescription(description);
    }
  };

  const onAddPressed = async () => {
    if (title != "" && description != "") {
      try {
        let value = await AsyncStorage.getItem(title);

        if (value && !noteTitle) {
          alert("title already exist");
        } else {
          await AsyncStorage.setItem(title, description);
          // setTitle("");
          // setDescription("");
          alert("notes saved");
          props.navigation.replace("Main");
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("kindly add title and description");
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ ...styles.card, height: "8%" }}>
        <TextInput
          style={{ margin: 10 }}
          placeholder="enter title here"
          multiline={true}
          onChangeText={(t) => setTitle(t)}
          value={title}
        />
      </View>
      <View style={{ ...styles.card, height: "70%" }}>
        <TextInput
          style={{ margin: 10 }}
          placeholder="enter description here"
          multiline={true}
          onChangeText={(t) => setDescription(t)}
          value={description}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title={noteTitle ? "Update Note" : "Add Note"}
          onPress={() => onAddPressed()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
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
  },
});

export default CreateNote;
