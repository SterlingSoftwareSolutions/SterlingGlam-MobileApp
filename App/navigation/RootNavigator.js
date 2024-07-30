import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../Screens/Welcome";
import Login from "../Screens/Login";
import Dashboard from "../Screens/Dashboard";
import SignUp from "../Screens/SignUp";
import SubCategories from "../Screens/SubCategories";
import Appointment from "../Screens/Appoinment";
import AppoinmentHistory from "../Screens/AppoinmentHistory";

const Stack = createStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name='Welcome' component={WelcomeScreen}/> */}
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Dashboard' component={Dashboard}/>
        {/* <Stack.Screen name='SignUp' component={SignUp}/> */}
        <Stack.Screen name='SubCategories' component={SubCategories}/>
        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen name="AppoinmentHistory" component={AppoinmentHistory} />
      </Stack.Navigator>
    );
};

export default RootNavigator;