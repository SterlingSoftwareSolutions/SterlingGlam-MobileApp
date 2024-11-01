import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import ServicesScreen from "../Screens/ServicesScreen";
import BookingScreen from "../Screens/Booking";
import PaymentScreen from "../Screens/PaymentScreen";
import BookingConfirmationScreen from "../Screens/BookingConfirmationScreen";
import ReviewBookingScreen from "../Screens/ReviewBookingScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
    <Stack.Screen name="Dashboard" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Services" component={ServicesScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Booking" component={BookingScreen} options={{ headerShown: false }} />
    <Stack.Screen name="BookingConfirm" component={ReviewBookingScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Payment" component={PaymentScreen} options={{ headerShown: false }} />

  </Stack.Navigator>
  );
};

export default HomeNavigator;