import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, ImageBackground, TouchableOpacity , StyleSheet } from 'react-native';
import Config from '../../config';
import Helpers from '../../Helpers';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
class AccountDetails extends Component {
    constructor(props){
      super(props);
      this.state = {
          loader : true,
          account : [],
      }
    }
    componentDidMount(){
        this.fetchMyAccount();
    }
    fetchMyAccount(){
        const {account_id} = this.props;
        const url = Helpers + 'accountsDetails/'+account_id;
        axios.get(url).then(res => {
            const {info} = res.data;
            this.setState({account : info , loader : false});
        })
    }
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
          <Spinner
              visible={this.state.loader}
              textStyle={styles.spinnerTextStyle}
              animation = 'slide'
              cancelable = {false}
              textContent = "Loading..."
              size = 'large'
              textStyle = {{color : '#F4F6F9' , fontSize: 14}}
              />
        <View style={{ height: '100%' }}>
          <View style={{ height: 240, alignItems: 'center' }}>
            <ImageBackground source={require('../../assets/images/login_bg.png')} style={{ width: null, height: null, alignSelf: 'stretch', flex: 1 }} resizeMode={'cover'} >
              <View style = {{alignItems: 'center', flex: 1 }}>
                <Text style={{ fontSize: 23, color: '#fff', marginTop: 60 }}>Account Details</Text>
              </View>
          </ImageBackground>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -80 }}>
            <View style={{ width: '90%', borderTopLeftRadius: 25, borderTopRightRadius: 25, backgroundColor: '#fff', padding: '8%' }}>
                <View style={{ marginBottom: 40 }}>
                  <View style={{ borderBottomColor: '#efefef', borderBottomWidth: 1, paddingBottom: 15, marginBottom: 30  }}>
                    <Text style={{ fontSize: 20, color: '#373737' }}>Current Status</Text>
                  </View>
                  <View style={{ flexDirection:'row', marginBottom: 15 }}>
                    <Text style={{ width: 140, fontSize: 15, color: '#777' }}>Website Status:</Text><Text style={{ fontSize: 15, color: '#777' }}>Launched</Text>
                  </View>
                  <View style={{ flexDirection:'row' }}>
                    <Text style={{ width: 140, fontSize: 15, color: '#777' }}>Date Added:</Text><Text style={{ fontSize: 15, color: '#777' }}>March 20, 2020</Text>
                  </View>
                </View>
                <View style={{ marginBottom: 40 }}>
                  <View style={{ borderBottomColor: '#efefef', borderBottomWidth: 1, paddingBottom: 15, marginBottom: 30  }}>
                    <Text style={{ fontSize: 20, color: '#373737' }}>Contact Information</Text>
                  </View>
                  <View style={{ flexDirection:'row', marginBottom: 15 }}>
                    <Text style={{ width: 140, fontSize: 15, color: '#777' }}>Company Name:</Text><Text style={{ fontSize: 15, color: '#777' }}>{this.state.account.account_name}</Text>
                  </View>
                  <View style={{ flexDirection:'row', marginBottom: 15 }}>
                    <Text style={{ width: 140, fontSize: 15, color: '#777' }}>Contact Person:</Text><Text style={{ fontSize: 15, color: '#777' }}>...................</Text>
                  </View>
                  <View style={{ flexDirection:'row', marginBottom: 15 }}>
                    <Text style={{ width: 140, fontSize: 15, color: '#777' }}>Address:</Text><Text style={{ fontSize: 15, color: '#777' }}>...................</Text>
                  </View>
                  <View style={{ flexDirection:'row', marginBottom: 15 }}>
                    <Text style={{ width: 140, fontSize: 15, color: '#777' }}>Phone:</Text><Text style={{ fontSize: 15, color: '#777' }}>...................</Text>
                  </View>
                  <View style={{ flexDirection:'row', marginBottom: 15 }}>
                    <Text style={{ width: 140, fontSize: 15, color: '#777' }}>Email:</Text><Text style={{ fontSize: 15, color: '#777' }}>...................</Text>
                  </View>
                  <View style={{ flexDirection:'row', marginBottom: 15 }}>
                    <Text style={{ width: 140, fontSize: 15, color: '#777' }}>Country:</Text><Text style={{ fontSize: 15, color: '#777' }}>...................</Text>
                  </View>
                </View>
                <View style={{ marginBottom: 40 }}>
                  <View style={{ borderBottomColor: '#efefef', borderBottomWidth: 1, paddingBottom: 15, marginBottom: 30  }}>
                    <Text style={{ fontSize: 20, color: '#373737' }}>Email Address For Updates</Text>
                  </View>
                  <View style={{ flexDirection:'row', marginBottom: 15 }}>
                    <Text style={{ width: 50, fontSize: 15, color: '#777' }}>To:</Text><Text style={{ fontSize: 15, color: '#777' }}>sample@sample.com</Text>
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection:'row', alignContent: 'center', justifyContent: 'center' }}>
                  <TouchableOpacity style={{ width: '48%', height: 55, backgroundColor: '#3081ff', textAlign: 'center', borderRadius: 5, margin: 5}}>
                    <Text style={{ color: '#fff', lineHeight: 55, textAlign: 'center', color: '#fff' }}>Task History</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ width: '48%', height: 55, borderColor: '#3081ff', borderWidth: 1, textAlign: 'center', borderRadius: 5, margin: 5}}>
                    <Text style={{ color: '#fff', lineHeight: 55, textAlign: 'center', color: '#727272' }}>Create Tasks</Text>
                  </TouchableOpacity>
                </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: '#FFF',
        fontSize: 12,
    },
})
export default AccountDetails;
