import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../Screens/Welcome";
import Login from "../Screens/Login";
import Dashboard from "../Screens/Dashboard";
import SignUp from "../Screens/SignUp";
import SubCategories from "../Screens/SubCategories";
import Appointment from "../Screens/Appoinment";
import AppoinmentHistory from "../Screens/AppoinmentHistory";
import BackButton from "../components/BackButton";
import { FontSize, Color, Border } from '../Styles/GlobalStyles';


const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: Color.colorPurple },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerLeft: route.name !== 'Home' ? () => <BackButton /> : undefined,
      })}
    >
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />        
      <Stack.Screen name='SubCategories' component={SubCategories} />
      <Stack.Screen name="Appointment" component={Appointment} />
      <Stack.Screen name="AppoinmentHistory" component={AppoinmentHistory} />
    </Stack.Navigator>
  );
};

export default RootNavigator;