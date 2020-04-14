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

class App extends Component {
  render() {
    return (

        <AccountDetails />

    );
  }
}export default App;
