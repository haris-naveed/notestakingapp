import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  ADD_BUTTON_IMG,
  DELETE_IMG,
  NOTE_IMG,
  WHITE_COLOR,
} from "../../../res/drawables";
import ImageButton from "../../components/ImageButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AdMobBanner } from "expo-ads-admob";
import firebaseApp from "../../../api/firebase";

const Main = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    loadAllKeyFromAsyncStorage();
  }, [data]);
  const loadAllKeyFromAsyncStorage = async () => {
    // await AsyncStorage.clear();

    var keys = await AsyncStorage.getAllKeys();
    if (keys.length != data.length) setData(keys);
  };

  const removeItem = async (item) => {
    // console.log(`removed ${item}`);
    try {
      await AsyncStorage.removeItem(item);
      props.navigation.replace("Main");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={4}
        // horizontal={true}
        data={data}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.replace("Create", { noteTitle: item })
                }
                style={{ margin: 2 }}
              >
                <View style={{ margin: 7 }}>
                  <Image style={styles.noteIcon} source={NOTE_IMG} />
                  {/* <Text style={styles.text}>{item}</Text> */}
                </View>
              </TouchableOpacity>
              <Text style={styles.text}>{item}</Text>
              <TouchableOpacity
                onPress={() => {
                  // console.log(`Pressed ${item}`);
                  removeItem(item);
                }}
              >
                <Image style={styles.deleteIcon} source={DELETE_IMG} />
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item) => item}
      />

      <ImageButton
        style={{
          justifyContect: "center",
          alignSelf: "flex-end",
          padding: 10,
        }}
        source={ADD_BUTTON_IMG}
        onPress={() => props.navigation.replace("Create", { noteTitle: null })}
      />
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noteIcon: {
    height: 80,
    width: 80,
  },
  text: {
    alignSelf: "center",
    fontWeight: "bold",
    width: 70,
    textAlign: "center",
  },
  deleteIcon: {
    height: 25,
    width: 25,
    alignSelf: "center",
  },
});

export default Main;
