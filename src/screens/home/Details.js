import React, { Component } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView, View, Text, ImageBackground, Dimensions, Button } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import Styles from '../../assets/Styles'
const devHeight = Dimensions.get('window').height;

class Details extends Component {
  render() {
    return (
      <View style={{flex:1}}>
          <View style={{paddingVertical:10,paddingHorizontal:20}}>
              <Text style={[Styles.fontGilroyBold,Styles.textHeader]}>Create Login Details</Text>
            </View>
      </View>
    );
  }
}

export default Details;