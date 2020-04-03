import React, { Component } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView, View, Text, ImageBackground, Dimensions, TextInput,SafeAreaView } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import Styles from '../../assets/Styles';
import { LinearButton,BackgroundStyle } from '../../components/Common';
const devHeight = Dimensions.get('window').height;
const height = devHeight/2;
import axios from "axios";
import qs from 'qs';
import Helpers from '../../Helpers'
import { Actions } from 'react-native-router-flux';
class ChangePassword extends Component {
  constructor(props){
    super(props);
    this.state = {
        password:'', 
    }
}
newPassword = () => {
  const data = this.state;
  console.log(data);
  
  axios.post(Helpers.api_url +'newPassword/2',qs.stringify(data)).then(response => {
  if(response.data.type == "success"){
    Actions.taskhistory();
  }
   
});
}
  render() {
    return (
      <View style={{flex:1}}>
      <BackgroundStyle   height={devHeight} />
      <View style={{flex:1,borderWidth:1,margin:50,borderRadius:25,backgroundColor:'white',borderColor:'white'}}>
          <View style={[Styles.headerDiv]}>
              <Text style={[Styles.fontGilroyBold,Styles.textHeader]}>Reset password</Text>
          </View>

          
          <View style={{paddingHorizontal:20,paddingTop:30}}>
            <TextInput placeholder="New Password" 
                       style={{borderRadius:10,padding:20,borderColor:'#E3E3E3',borderWidth:1}}
                       value={this.state.password}
                       onChangeText={(password) => this.setState({password})}
            />
          </View>
         
          <View style={{ flex:1,justifyContent:'flex-end' }}>
                    <LinearButton
                        title="Submit"
                        style={[Styles.buttonText,Styles.fontGilroyLight]}
                        onPress={()=>this.newPassword()}
                    />
          </View>
          </View>
       
      </View>
    
    );
  }
}

export default ChangePassword;