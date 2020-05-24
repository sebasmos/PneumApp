import React from 'react';
import {
    createStackNavigator,
    createSwitchNavigator,
} from 'react-navigation';
import { View, StatusBar } from 'react-native';
import {
    LoginScreen,
    DashboardScreen,
    GettingStarted,
    SignupScreen,
    PasswordRetrieveScreen
} from '../screens';

const Router = createSwitchNavigator({
    Main: {
        screen: createStackNavigator({
            /* Dashboard */
            Dashboard: {
                screen: DashboardScreen
            },            
            GettingStarted: {
                screen: GettingStarted,
                navigationOptions: {
                    headerMode: 'none',
                    header: (
                        <View style={{
                            width: '100%',
                            height: StatusBar.currentHeight,
                            backgroundColor: '#EEE' //TODO: use global styles and colors
                        }}></View>),
                }
            }
           
        }, {
            /* Custom Drawer config */
            initialRouteName: 'Dashboard',
            /* Config to Avoid global stack header overlapping */
            // navigationOptions: {
            //     headerVisible: false,
            //     header: null,
            // }
        })
    },
    /* Launch flow */
    Login: {
        screen: createStackNavigator({
            Launch: {
                screen: LoginScreen,
                navigationOptions: {
                    headerMode: 'none',
                    header: (
                        <View style={{
                            width: '100%',
                            height: StatusBar.currentHeight,
                            backgroundColor: '#EEE' //TODO: use global styles and colors
                        }}></View>),
                }
            },     

            Signup: {
                screen: SignupScreen,
                navigationOptions: {
                    headerMode: 'none',
                    header: (
                        <View style={{
                            width: '100%',
                            height: StatusBar.currentHeight,
                            backgroundColor: '#EEE' //TODO: use global styles and colors
                        }}></View>),
                }
            },
            PasswordRetrieveScreen: {
                screen: PasswordRetrieveScreen,
                navigationOptions: {
                    headerMode: 'none',
                    header: (
                        <View style={{
                            width: '100%',
                            height: StatusBar.currentHeight,
                            backgroundColor: '#EEE' //TODO: use global styles and colors
                        }}></View>),
                }
            }
        }, {
            initialRouteName: 'Launch'
        })
    },
}, {
    initialRouteName: 'Login'
});

export default Router;
