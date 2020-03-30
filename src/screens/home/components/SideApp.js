import React , {Component}from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Icon } from 'react-native-vector-icons/FontAwesome'
import { ProfileScreen,AboutScreen,HomeScreen,ContactScreen,ListScreen,MessageScreen   } from './Screen'

const DrawerNavigator = createDrawerNavigator({
    ProfileScreen,
    MessageScreen,
    AboutScreen,
    ListScreen,
    HomeScreen,
    ContactScreen
});

export default createAppContainer(DrawerNavigator);