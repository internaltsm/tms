import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, ImageBackground, TouchableOpacity, Image } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { Actions } from 'react-native-router-flux';
import Helpers from '../../Helpers';
import AsyncStorage from '@react-native-community/async-storage';
const KEYS_TO_FILTERS = ['user.name', 'subject'];
class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    // const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: '100%' }}>
          <View style={{ height: 240, alignItems: 'center' }}>
            <ImageBackground source={require('../../assets/images/login_bg.png')} style={{ width: null, height: null, alignSelf: 'stretch', flex: 1 }} resizeMode={'cover'} >
              <View style = {{alignItems: 'center', flex: 1 }}>
                <Text style={{ fontSize: 23, color: '#fff', marginTop: 60 }}>Search Area</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -80 }}>
            <View style={{ width: '90%', justifyContent: 'center', flex: 1, alignItems: 'center', borderTopLeftRadius: 25, borderTopRightRadius: 25, backgroundColor: '#fff', paddingLeft: '8%', paddingRight: '8%', paddingTop: 150, paddingBottom: 50 }}>
                <TouchableOpacity onPress={() => Actions.accountsList()} style={{ borderColor: '#eaebed', borderWidth: 1, width: '85%', height: 200, justifyContent: 'center', alignItems: 'center', marginBottom: 100, borderRadius: 8  }}>
                  <Image source = {require('../../assets/images/dashboardIcon1.png')} style = {{ width: 130, height: 130, resizeMode: 'contain', marginTop: -120}} />
                  <Text style={{ fontSize: 20, color: '#727272', borderBottomColor: '#ff5897', borderBottomWidth: 2, paddingBottom: 25, marginTop: 30 }}>My Account</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress = {async() => Actions.createtask({company : await Helpers.getSingleInfo('company')})} style={{ borderColor: '#eaebed', borderWidth: 1, width: '85%', height: 200, justifyContent: 'center', alignItems: 'center', borderRadius: 8  }}>
                  <Image source = {require('../../assets/images/dashboardIcon2.png')} style = {{ width: 130, height: 130, resizeMode: 'contain', marginTop: -120 }} />
                  <Text style={{ fontSize: 20, color: '#727272', borderBottomColor: '#1ed57a', borderBottomWidth: 2, paddingBottom: 25, marginTop: 30 }}>Create Tasks</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Dashboard;
