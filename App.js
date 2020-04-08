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

class App extends Component {
  render() {
    return (

        <Details />
   
    );
  }
}export default App;
