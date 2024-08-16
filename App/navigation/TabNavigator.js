import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import AppointmentNavigator from './AppointmentNavigator';
import NotificationScreen from '../Screens/NotificationScreen';
import MiddleTabNavigator from './MiddleTabNavigator';
import HomeNavigator from './HomeNavigator';
import AccountNavigator from './AccountNavigator';

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
                tabBarHideOnKeyboard: true, // Hide tab bar when keyboard appears

            }}
        >
            <Tab.Screen
                name='Home'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo name="home" size={24} color={focused ? '#E7BD8D' : 'white'} />
                    ),
                }}
            />
            {/* <Tab.Screen
                name='Services'
                component={AppointmentNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="shopping" size={24} color={focused ? '#E7BD8D' : 'white'} />
                    ),
                }}
            /> */}
            <Tab.Screen
                name='AppointmentOverview'
                component={MiddleTabNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="calendar" size={28} color={focused ? '#FFD29F' : 'white'} />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    ),
                }}
            />
            {/* <Tab.Screen
                name='Notification'
                component={NotificationScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="notifications" size={24} color={focused ? '#E7BD8D' : 'white'} />
                    ),
                }}
            /> */}
            <Tab.Screen
                name='Profile'
                component={AccountNavigator}
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
