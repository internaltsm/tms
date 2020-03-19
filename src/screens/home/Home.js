import React, { Component } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView, View, Text, ImageBackground, Dimensions } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

const devHeight = Dimensions.get('window').height;

class Home extends Component {
  render() {
    return (
      <View>
        <ImageBackground source={require('../../assets/images/login_bg.png')} style={{ width: '100%', height: 100 }} resizeMode={'contain'} >
          <Text> Sample Text </Text>
        </ImageBackground>
        <FormLabel>Name</FormLabel>
        <FormInput onChangeText={someFunction}/>
        <FormValidationMessage>Error message</FormValidationMessage>
      </View>
    );
  }
}

export default Home;