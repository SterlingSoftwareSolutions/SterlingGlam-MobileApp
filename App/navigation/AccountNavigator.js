import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../Screens/ProfileScreen";
import NotificationScreen from "../Screens/NotificationScreen";
import EditProfileScreen from "../Screens/EditProfileScreen";
import AboutScreen from "../Screens/AboutScreen";
import LanguageSettingsScreen from "../Screens/LanguageSettingsScreen";
import InviteFriend from "../Screens/InviteFriend";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Account">
    <Stack.Screen name="Account" component={ProfileScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Notification" component={NotificationScreen} options={{ headerShown: false }} />
    <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: false }} />
    <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Language" component={LanguageSettingsScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Invite" component={InviteFriend} options={{ headerShown: false }} />

  </Stack.Navigator>
  );
};

export default AccountNavigator;