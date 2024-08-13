import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import { Entypo, MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import ServicesScreen from '../Screens/ServicesScreen';
import BookingScreen from '../Screens/Booking';
import BookingConfirmationScreen from '../Screens/BookingConfirmationScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import AppointmentNavigator from './AppointmentNavigator';
import ReviewBookingScreen from '../Screens/ReviewBookingScreen';
import Overview from '../Screens/Overview';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = (props) => {
    const { children, onPress } = props;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.customButton}
        >
            <View style={styles.customButtonContainer}>
                {children}
            </View>
        </TouchableOpacity>
    );
};

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 5,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#544D4D',
                    borderRadius: 30,
                    height: 60,
                },
            }}
        >
            <Tab.Screen
                name='Home'
                component={AppointmentNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo name="home" size={24} color={focused ? '#E7BD8D' : 'white'} />
                    ),
                }}
            />
            <Tab.Screen
                name='Services'
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="shopping" size={24} color={focused ? '#E7BD8D' : 'white'} />
                    ),
                }}
            />
            <Tab.Screen
                name='Appointment'
                component={Overview}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="calendar" size={28} color={focused ? '#E7BD8D' : 'white'} />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    ),
                }}
            />
            <Tab.Screen
                name='Notification'
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="notifications" size={24} color={focused ? '#E7BD8D' : 'white'} />
                    ),
                }}
            />
            <Tab.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5 name="user-alt" size={24} color={focused ? '#E7BD8D' : 'white'} />
                    ),
                }}
            />
            
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    customButton: {
        top: -13, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#24150E',
        borderRadius: 30,
        width: 60,
        height: 60,
        elevation: 5, 
    },
    customButtonContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TabNavigator;
