import React, { Component } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView, View, Text, ImageBackground, Dimensions, TextInput,SafeAreaView } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import Styles from '../../assets/Styles';
import { LinearButton,BackgroundStyle } from '../../components/Common';
const devHeight = Dimensions.get('window').height;
const height = devHeight/2;
class Details extends Component {
  constructor(props){
    super(props);
    this.state = {
        email:'',
        password:''
        
    }
}

  render() {
    return (
      <View style={{flex:1}}>
      <BackgroundStyle   height={devHeight} />
      <View style={{flex:1,borderWidth:1,margin:50,borderRadius:25,backgroundColor:'white',borderColor:'white'}}>
          <View style={[Styles.headerDiv]}>
              <Text style={[Styles.fontGilroyBold,Styles.textHeader]}>Create Login Details</Text>
          </View>

          <View style={{paddingHorizontal:20,paddingTop:30}}>
            <TextInput placeholder="Email"
                       style={{borderRadius:10,padding:20,borderColor:'#E3E3E3',borderWidth:1}}
                       value={this.state.password}
                       onChangeText={(password) => this.setState({password})}
            />
          </View>
          <View style={{paddingHorizontal:20,paddingTop:30}}>
            <TextInput placeholder="Password"
                       style={{borderRadius:10,padding:20,borderColor:'#E3E3E3',borderWidth:1}}
            />
          </View>
          <View style={{paddingHorizontal:20,paddingTop:30}}>
            <TextInput placeholder="Confirm Password"
                       style={{borderRadius:10,padding:20,borderColor:'#E3E3E3',borderWidth:1}}
            />
          </View>
          <View style={{ flex:1,justifyContent:'flex-end' }}>
                    <LinearButton
                        title="Submit"
                        style={[Styles.buttonText,Styles.fontGilroyLight]}
                    />
          </View>
          </View>

      </View>

    );
  }
}

export default Details;
