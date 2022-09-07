import { StyleSheet, Text, View, Image } from "react-native";
import Splash from "./src/screens/Splash";
import Navigation from "./src/navigation";
import Main from "./src/screens/main";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Splash /> */}
      <Navigation />
      {/* <Main /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
