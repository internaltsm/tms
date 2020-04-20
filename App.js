/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React , {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Routes from './src/Routers';
import Details from './src/screens/task/CreateTask'
import AccountsList from './src/screens/home/AccountsList'
import AccountDetails from './src/screens/home/AccountDetails'
import TaskDetails from './src/screens/home/TaskDetails'
import ForgotPassword from './src/screens/home/ForgotPassword'
import ChangePassword from './src/screens/home/ChangePassword'
import Home from './src/screens/home/Home'
import Dashboard from './src/screens/home/Dashboard'

class App extends Component {
  render() {
    return (

        <ForgotPassword />

    );
  }
}export default App;