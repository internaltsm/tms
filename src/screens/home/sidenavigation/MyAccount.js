import React , {Component}from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, ActivityIndicator, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Styles from '../../../assets/Styles'
import { Actions } from 'react-native-router-flux';

class SideNavigation extends Component{
  constructor(props){
      super();
    
  }
  render(){
      return(
          <>
          <Text>My Account</Text>
          </>
      )
  }
}
export default SideNavigation;