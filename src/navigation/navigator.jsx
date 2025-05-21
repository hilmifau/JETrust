import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Color } from '../constants.js/color';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import Profile from '../screens/Profile';
import Tarif from '../screens/Tarif';
import Resi from '../screens/Resi';
import Nearby from '../screens/Nearby';
import Job from '../screens/Job';
import Cod from '../screens/Cod';
import Wallet from '../screens/Wallet';
import { PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();

const screenOptions = {
    animation: 'slide_from_left'
}

function TabHome() {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="Home" component={HomeScreen}
            />
            <Stack.Screen name="Tarif" component={Tarif} options={screenOptions} />
            <Stack.Screen name="Resi" component={Resi} options={screenOptions} />
            <Stack.Screen name="Nearby" component={Nearby} options={screenOptions} />
            <Stack.Screen name="Job" component={Job} options={screenOptions}/>
            <Stack.Screen name="Cod" component={Cod} options={screenOptions}/>
            <Stack.Screen name="Wallet" component={Wallet} options={screenOptions}/>
        </Stack.Navigator>
    );
}

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    headerTitleAlign: 'center',
                    tabBarActiveTintColor: Color.TextPrimary,
                    tabBarInactiveTintColor: Color.TextSecondary,
                    tabBarStyle: {
                        backgroundColor: '#F6F2ED',
                        height: 60
                    },
                    tabBarLabelStyle: {
                        fontSize: 12
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'TabHome') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'account' : 'account-outline';
                        }

                        // You can return any component that you like here!
                        return <Icon name={iconName} size={25} color={Color.PrimaryDark} />;
                    },
                })}
            >
                <Tab.Screen
                    name="TabHome"
                    component={TabHome}
                    options={{
                        // tabBarBadge: 3,
                    }}
                />
                <Tab.Screen name="Profile" component={Profile} color="black" />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
