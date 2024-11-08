import React from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import AppointmentNavigator from './AppointmentNavigator';
import NotificationScreen from '../Screens/NotificationScreen';
import MiddleTabNavigator from './MiddleTabNavigator';
import HomeNavigator from './HomeNavigator';
import AccountNavigator from './AccountNavigator';
import AdminNavigation from './AdminNavigation';
import UpcomingAppointments from '../Screens/UpcomingAppointments';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = (props) => {
    const { children, onPress } = props;
    const scaleValue = new Animated.Value(1);

    const animateScale = (toValue) => {
        Animated.spring(scaleValue, {
            toValue,
            useNativeDriver: true,
            friction: 3,
        }).start();
    };

    return (
        <TouchableOpacity
            onPressIn={() => animateScale(1.1)}
            onPressOut={() => animateScale(1)}
            onPress={onPress}
            style={styles.customButton}
        >
            <Animated.View style={[styles.customButtonContainer, { transform: [{ scale: scaleValue }] }]}>
                {children}
            </Animated.View>
        </TouchableOpacity>
    );
};

const AdminTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tab.Screen
                name='Home'
                component={AdminNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo name="home" size={24} color={focused ? 'white' : '#636363'} />
                    ),
                }}
            />
            <Tab.Screen
                name='AppointmentOverview'
                component={UpcomingAppointments}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="grid" size={28} color={focused ? 'white' : '#636363'} />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    ),
                }}
            />
            <Tab.Screen
                name='Profile'
                component={AccountNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5 name="user-alt" size={24} color={focused ? 'white' : '#636363'} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 5,
        left: 20,
        right: 20,
        height: 70,
        backgroundColor: '#000000',
        borderRadius: 30,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#FFFFFF',
    },
    customButton: {
        top: -15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButtonContainer: {
        width: 70,
        height: 70,
        backgroundColor: '#000',
        borderRadius: 35,
        borderWidth: 2,
        borderColor: 'white',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AdminTabNavigator;
