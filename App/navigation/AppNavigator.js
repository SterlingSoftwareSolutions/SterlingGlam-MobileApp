import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Dashboard from "../Screens/Dashboard";
import AppoinmentHistory from '../Screens/AppoinmentHistory';
import { Color } from "../Styles/GlobalStyles";
import CustomerProfile from "../Screens/CustomerProfile";
import RootNavigator from "./RootNavigator";


const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarActiveTintColor: Color.colorPurple,
      headerShown: false,
      tabBarHideOnKeyboard: true,
      activeTintColor: Color.colorPurple,
      inactiveTintColor: 'grey',
      tabBarInactiveTintColor: Color.colorBlack,
      tabBarLabelStyle: {
        paddingBottom: 5
      }
    }}
  >
    <Tab.Screen
      name="Home"
      component={RootNavigator}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Notification"
      component={AppoinmentHistory}
      options={{
        tabBarLabel: "Notification",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bell" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={CustomerProfile}
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
  );
}


export default AppNavigator;