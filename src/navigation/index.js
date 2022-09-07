import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/Splash";
import Main from "../screens/main";
import CreateNote from "../screens/CreateNote";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          // options={{ headerShown: false }}
          name="Main"
          component={Main}
        />
        <Stack.Screen
          // options={{ headerShown: false }}
          name="Create"
          component={CreateNote}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
