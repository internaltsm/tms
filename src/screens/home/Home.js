import React, { Component } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView, View, Text, ImageBackground, Dimensions,  TouchableOpacity, Image, TextInput , ToastAndroid } from 'react-native';
import Helpers from '../../Helpers';
import axios from 'axios';
import qs from 'qs'
import { Actions } from 'react-native-router-flux';
import Loader from '../../components/Loader';
import CryptoJS from "react-native-crypto-js";
import AsyncStorage from '@react-native-community/async-storage';

const devwidth = Dimensions.get('window').height;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader : true,
      email: '',
      password: '',
      loader : false
    }
  }
  componentDidMount(){
      AsyncStorage.clear();
  }
// Actions.dashboard();
    checklogin = () => {
        this.setState({loader : true});
        const {email , password} = this.state;
        let formdata = new FormData();
        formdata.append('email' ,email );
        formdata.append('password' ,password );

        axios.post(Helpers.orc_api('Login/requestlogin') , formdata ).then( async(res) => {
            const {account_data , status} = res.data;

            if(status === 'success'){
                let user_data = CryptoJS.AES.encrypt(JSON.stringify(account_data) , Helpers.key).toString();
                await AsyncStorage.setItem('usersdata',user_data);
                Actions.dashboard();
            }else{
                ToastAndroid.show("Invalid email or password.", ToastAndroid.LONG);
            }
            this.setState({loader : false});
        });
    }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Loader visible = {this.state.loader} />
        <View style={{ height: devwidth }}>
          <View style={{ height: '30%', alignItems: 'center' }}>
            <ImageBackground source={require('../../assets/images/login_bg.png')} style={{ width: null, height: null, alignSelf: 'stretch', flex: 1 }} resizeMode={'cover'} >
              <View style = {{alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                <Image source = {require('../../assets/images/app_logo.png')} style = {{ alignItems: 'center', width: 170, resizeMode: 'contain'}} />
              </View>
            </ImageBackground>
          </View>
          <View style={{ backgroundColor: '#fff', height: '75%', borderTopLeftRadius: 25, borderTopRightRadius: 25, marginTop: -20 }}>
            <Text style={{ fontSize: 35, textAlign: 'center', color: '#579fff', marginTop: 70, marginBottom: 40 }}>Sign In</Text>
            <View style={{ paddingLeft: '10%', paddingRight: '10%', marginBottom: 15 }}>
              <TextInput style={{ height: 50, borderColor: '#e2e2e2', borderWidth: 1, paddingLeft: 15, borderRadius: 7}} underlineColorAndroid = "transparent" placeholder = "Username" placeholderTextColor = "#000" autoCapitalize = "none" value={this.state.email} onChangeText={(email) => this.setState({ email })}></TextInput>
            </View>
            <View style={{ paddingLeft: '10%', paddingRight: '10%', marginBottom: 35 }}>
              <TextInput secureTextEntry = {true} style={{ height: 50, borderColor: '#e2e2e2', borderWidth: 1, paddingLeft: 15, borderRadius: 7}} underlineColorAndroid = "transparent" placeholder = "Password" placeholderTextColor = "#000" autoCapitalize = "none" value={this.state.password} onChangeText={(password) => this.setState({ password })}></TextInput>
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
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Home;
