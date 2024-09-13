import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import SplashScreen from "../Screens/SplashScreen";
import GetStartedScreen from "../Screens/GetStartedScreen";
import TabNavigator from "./TabNavigator";
import AdminTabNavigator from "./AdminTabNavigator";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
    <Stack.Screen name="GetStarted" component={GetStartedScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    <Stack.Screen name="Signup" component={SignUp} options={{ headerShown: false }} />
    <Stack.Screen name="Dashboard" component={AdminTabNavigator} options={{ headerShown: false }} />
  </Stack.Navigator>
  );
};

export default RootNavigator;