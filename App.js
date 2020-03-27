/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Routes from './src/Routes';
<<<<<<< HEAD
import Details from './src/screens/home/Details';
import Home from './src/screens/home/Home';
import LoginVerify from './src/screens/home/LoginVerify';
import AccountDetails from './src/screens/home/AccountDetails';
const App: () => React$Node = () => {
  return (
    <>
      <LoginVerify />
=======
import ForgotPassword from './src/screens/home/ChangePassword'
const App: () => React$Node = () => {
  return (
    <>
      <ForgotPassword />
>>>>>>> c542ce0dc6af9d25a0249a59c3e8ac6947b17a93
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;