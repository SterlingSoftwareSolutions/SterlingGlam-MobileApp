import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Dashboard from "../Screens/Dashboard";
import AppoinmentHistory from '../Screens/AppoinmentHistory';
import { Color } from "../Styles/GlobalStyles";
import CustomerProfile from "../Screens/CustomerProfile";
import RootNavigator from "./RootNavigator";
import BackButton from "../components/BackButton";

const Tab = createBottomTabNavigator();

function ApplictaionNavigator(props) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Color.colorPurple,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: { paddingBottom: 5 },
        headerShown: true,
        headerStyle: { backgroundColor: Color.colorPurple },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerLeft: route.name !== 'Home' ? () => <BackButton /> : undefined, 
      })}
    >
    <Tab.Screen
      name="Home"
      component={RootNavigator}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
        headerShown: false,
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


export default ApplictaionNavigator;