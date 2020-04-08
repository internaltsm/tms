import React, { Component } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView, View, Text, ImageBackground, Dimensions,  TouchableOpacity, Image, TextInput } from 'react-native';
import Config from '../../config';
import axios from 'axios';
import qs from 'qs'
import { Actions } from 'react-native-router-flux';
const devwidth = Dimensions.get('window').height;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader : true,
      username: '',
      password: ''
    }
  }

  checklogin = () => {
    console.log(Actions);
    const {username , password} = this.state;
    const url = Config.api_url + 'login/tmsLogin';
    const data = { username:username, password:password }

    axios({
      url: url,
      method: 'POST',
      data: qs.stringify(data),
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(result => {
      if (result.data.status == 'canlogin') {
        Actions.dashboard();
      } else {
        alert('Login Failed');
      }
    })

  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: devwidth }}>
          <View style={{ height: '30%', alignItems: 'center' }}>
            <ImageBackground source={require('../../assets/images/login_bg.png')} style={{ width: null, height: null, alignSelf: 'stretch', flex: 1 }} resizeMode={'cover'} >
              <View style = {{alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                <Image source = {require('../../assets/images/app_logo.png')} style = {{ alignItems: 'center', width: 170, resizeMode: 'contain'}} />
              </View>
            </ImageBackground>
          </View>
          <View style={{ backgroundColor: '#fff', height: '75%', borderTopLeftRadius: 25, borderTopRightRadius: 25, marginTop: '-5%' }}>
            <Text style={{ fontSize: 35, textAlign: 'center', color: '#579fff', marginTop: 70, marginBottom: 40 }}>Sign In</Text>
            <View style={{ paddingLeft: '10%', paddingRight: '10%', marginBottom: 15 }}>
              <TextInput style={{ height: 50, borderColor: '#e2e2e2', borderWidth: 1, paddingLeft: 15, borderRadius: 7}} underlineColorAndroid = "transparent" placeholder = "Username" placeholderTextColor = "#000" autoCapitalize = "none" value={this.state.username} onChangeText={(username) => this.setState({ username })}></TextInput>
            </View>
            <View style={{ paddingLeft: '10%', paddingRight: '10%', marginBottom: 35 }}>
              <TextInput style={{ height: 50, borderColor: '#e2e2e2', borderWidth: 1, paddingLeft: 15, borderRadius: 7}} underlineColorAndroid = "transparent" placeholder = "Password" placeholderTextColor = "#000" autoCapitalize = "none" value={this.state.password} onChangeText={(password) => this.setState({ password })}></TextInput>
            </View>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
              <TouchableOpacity onPress={() => this.checklogin()} style={{ width: 150, height: 45, backgroundColor: '#3081ff', textAlign: 'center', borderRadius: 5}}>
                <Text style={{ color: '#fff', lineHeight: 45, textAlign: 'center' }}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 10 }}>
            <TouchableOpacity onPress={()=> Actions.forgotpass()}>
              <Text style={{ textAlign: 'center', color: '#848181', fontSize: 15, lineHeight: 45 }}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
            
            <View>
            <TouchableOpacity onPress={()=>Actions.loginverify()}>
                <Text style={{ textAlign: 'center', color: '#60a1f7', fontSize: 20, lineHeight: 35 }}>Verify Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Home;