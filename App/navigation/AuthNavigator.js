import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppNavigator from "./AppNavigator";
import WelcomeScreen from "../Screens/Welcome";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Main" component={WelcomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    <Stack.Screen name="Signup" component={SignUp} options={{ headerShown: false }} />
    <Stack.Screen name="Dashboard" component={AppNavigator} options={{ headerShown: false }} />

  </Stack.Navigator>
);

export default AuthNavigator;