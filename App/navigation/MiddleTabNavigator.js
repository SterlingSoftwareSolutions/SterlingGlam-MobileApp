import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Overview from "../Screens/Overview";

const Stack = createStackNavigator();

const MiddleTabNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Overview">
    <Stack.Screen name="Overview" component={Overview} options={{ headerShown: false }} />
  </Stack.Navigator>
  );
};

export default MiddleTabNavigator;