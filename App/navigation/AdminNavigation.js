import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import ServicesScreen from "../Screens/ServicesScreen";
import BookingScreen from "../Screens/Booking";
import PaymentScreen from "../Screens/PaymentScreen";
import BookingConfirmationScreen from "../Screens/BookingConfirmationScreen";
import AddCardScreen from "../Screens/PaymentScreen";
import AddServiceScreen from "../Screens/AddServiceScreen";
import EditServiceScreen from "../Screens/EditServiceScreen";
import SalonServicesScreen from "../Screens/SalonServicesScreen";
import SalonStylistsScreen from "../Screens/SalonStylistsScreen";
import AdminScreen from "../Screens/AdminScreen";
import AddStylistScreen from "../Screens/AddStylistScreen";
import UpcomingAppointments from "../Screens/UpcomingAppointments";
import EditStylistScreen from "../Screens/EditStylistScreen";
import StatisticsScreen from "../Screens/StatisticsScreen";
import ServiceCategoryScreen from "../Screens/ServiceCategoryScreen";
import UpdateStylistScreen from "../Screens/UpdateStylistScreen"
const Stack = createStackNavigator();

const AdminNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="AdminDashboard">
    <Stack.Screen name="AdminDashboard" component={AdminScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Services" component={SalonServicesScreen} options={{ headerShown: false }} />
    <Stack.Screen name="AddService" component={AddServiceScreen} options={{ headerShown: false }} />
    <Stack.Screen name="EditService" component={EditServiceScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Stylists" component={SalonStylistsScreen} options={{ headerShown: false }} />
    <Stack.Screen name="AddStylist" component={AddStylistScreen} options={{ headerShown: false }} />
    <Stack.Screen name="EditStylist" component={EditStylistScreen} options={{ headerShown: false }} />
    <Stack.Screen name="UpcomingAppointments" component={UpcomingAppointments} options={{ headerShown: false }} />
    <Stack.Screen name="Statistics" component={StatisticsScreen} options={{ headerShown: false }} /> 
    <Stack.Screen name="ServiceCategory" component={ServiceCategoryScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="UpdateStylist" component={UpdateStylistScreen} options={{headerShown:false}}/>
  </Stack.Navigator>
  );
};

export default AdminNavigation;