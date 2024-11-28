import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "../Screens/SplashScreen";
import GetStartedScreen from "../Screens/GetStartedScreen";

import AppNavigator from "./ApplictaionNavigator";
import WelcomeScreen from "../Screens/Welcome";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Dashboard from "../Screens/Dashboard";
import HomeScreen from "../Screens/HomeScreen";
import AdminScreen from "../Screens/AdminScreen";
import AdminTabNavigator from "./AdminTabNavigator";

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
    <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="GetStarted" component={GetStartedScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AdminDashboard" component={AdminTabNavigator} />

    </Stack.Navigator>
);

export default MainNavigator;