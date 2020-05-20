import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, ImageBackground, TouchableOpacity , StyleSheet } from 'react-native';
import Helpers from '../../Helpers';
import axios from 'axios';
import Loader from '../../components/Loader';

import { Actions } from 'react-native-router-flux';
class AccountDetails extends Component {
    constructor(props){
      super(props);
      this.state = {
          loader : false,
          account : [],
          loader : false
      }
    }
    componentDidMount(){
        this.fetchMyAccount();
    }

    async fetchMyAccount(){
        this.setState({loader : true});
        axios.get(Helpers.orc_api('Api/account/'+await Helpers.getSingleInfo('acc_id'))).then( res => {
            this.setState({account : res.data[0] , loader : false});
        });
    }
  render() {
      const {account} = this.state;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Loader visible = {this.state.loader} />
        <View style={{ height: '100%' }}>
          <View style={{ height: 240, alignItems: 'center' }}>
            <ImageBackground source={require('../../assets/images/login_bg.png')} style={{ width: null, height: null, alignSelf: 'stretch', flex: 1 }} resizeMode={'cover'} >
              <View style = {{alignItems: 'center', flex: 1 }}>
                <Text style={{ fontSize: 23, color: '#fff', marginTop: 60 }}>{this.props.account_id}</Text>
              </View>
          </ImageBackground>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -80 }}>

            <View style={{ width: '90%', borderTopLeftRadius: 25, borderTopRightRadius: 25, backgroundColor: '#fff', padding: '8%' }}>
                <View style={{ marginBottom: 30 }}>
                  <View style={{ borderBottomColor: '#efefef', borderBottomWidth: 1, paddingBottom: 15, marginBottom: 30  }}>
                    <Text style={{ fontSize: 20, color: '#373737' }}>Current Status</Text>
                  </View>
                  <View style={{ flexDirection:'row', marginBottom: 15 }}>
                    <Text style={{ width: 140, fontSize: 15, color: '#777' }}>Website Status:</Text><Text style={{ fontSize: 15, color: '#2b2121', flex: 1, flexWrap: 'wrap' }}>Launched</Text>
                  </View>
                  <View style={{ flexDirection:'row', marginBottom: 15 }}>
                    <Text style={{ width: 140, fontSize: 15, color: '#777' }}>Date Added:</Text><Text style={{ fontSize: 15, color: '#2b2121', flex: 1, flexWrap: 'wrap' }}>{account.date_added}</Text>
                  </View>
                  <View style={{ flexDirection:'row', marginBottom: 15 }}>
                    <Text style={{ width: 140, fontSize: 15, color: '#777' }}>Reseller Status:</Text><Text style={{ fontSize: 15, color: '#2b2121', flex: 1, flexWrap: 'wrap' }}>Active</Text>
                  </View>
                  <View style={{ flexDirection:'row', marginBottom: 15 }}>
                    <Text style={{ width: 140, fontSize: 15, color: '#777' }}>Reseller Type:</Text><Text style={{ fontSize: 15, color: '#2b2121', flex: 1, flexWrap: 'wrap' }}>Commission-Based</Text>
                  </View>
                </View>

                <View style={{ marginBottom: 30 }}>
                  <View style={{ borderBottomColor: '#efefef', borderBottomWidth: 1, paddingBottom: 15, marginBottom: 30  }}>
                    <Text style={{ fontSize: 20, color: '#373737' }}>Contact Information</Text>
                  </View>
                  <View style={{ marginBottom: 25 }}>
                    <Text style={{ width: 140, fontSize: 15, color: '#777', marginBottom: 10 }}>Company Name:</Text><Text style={{ fontSize: 15, color: '#2b2121' }}>{account.company}</Text>
                  </View>
                  <View style={{ flexDirection:'row', marginBottom: 15 }}>
                    <Text style={{ width: 140, fontSize: 15, color: '#777' }}>Contact Person:</Text><Text style={{ fontSize: 15, color: '#2b2121', flex: 1, flexWrap: 'wrap' }}>{account.contact_person}</Text>
                  </View>
                  <View style={{ flexDirection:'row', marginBottom: 15 }}>
                    <Text style={{ width: 140, fontSize: 15, color: '#777' }}>Phone:</Text><Text style={{ fontSize: 15, color: '#2b2121', flex: 1, flexWrap: 'wrap' }}>{account.phone}</Text>
                  </View>
                  <View style={{ flexDirection:'row', marginBottom: 15 }}>
                    <Text style={{ width: 140, fontSize: 15, color: '#777' }}>Fax:</Text><Text style={{ fontSize: 15, color: '#2b2121', flex: 1, flexWrap: 'wrap' }}>{account.fax}</Text>
                  </View>
                  <View style={{ flexDirection:'row', marginBottom: 15 }}>
                    <Text style={{ width: 140, fontSize: 15, color: '#777' }}>Mobile:</Text><Text style={{ fontSize: 15, color: '#2b2121', flex: 1, flexWrap: 'wrap' }}>{account.mobile}</Text>
                  </View>
                  <View style={{ flexDirection:'row', marginBottom: 15 }}>
                    <Text style={{ width: 140, fontSize: 15, color: '#777' }}>Email:</Text><Text style={{ fontSize: 15, color: '#2b2121', flex: 1, flexWrap: 'wrap' }}>{account.email}</Text>
                  </View>
                  <View style={{ flexDirection:'row', marginBottom: 15 }}>
                    <Text style={{ width: 140, fontSize: 15, color: '#777' }}>Address:</Text><Text style={{ fontSize: 15, color: '#2b2121', flex: 1, flexWrap: 'wrap' }}>{account.address}</Text>
                  </View>
                  <View style={{ flexDirection:'row', marginBottom: 15 }}>
                    <Text style={{ width: 140, fontSize: 15, color: '#777' }}>Country:</Text><Text style={{ fontSize: 15, color: '#2b2121', flex: 1, flexWrap: 'wrap' }}>{account.country}</Text>
                  </View>
                  <View style={{ flexDirection:'row', marginBottom: 15 }}>
                    <Text style={{ width: 140, fontSize: 15, color: '#777' }}>State:</Text><Text style={{ fontSize: 15, color: '#2b2121', flex: 1, flexWrap: 'wrap' }}>{account.state}</Text>
                  </View>
                  <View style={{ flexDirection:'row', marginBottom: 15 }}>
                    <Text style={{ width: 140, fontSize: 15, color: '#777' }}>Zip:</Text><Text style={{ fontSize: 15, color: '#2b2121', flex: 1, flexWrap: 'wrap' }}>{account.zip}</Text>
                  </View>
                </View>

                <View style={{ marginBottom: 30 }}>
                  <View style={{ borderBottomColor: '#efefef', borderBottomWidth: 1, paddingBottom: 15, marginBottom: 30  }}>
                    <Text style={{ fontSize: 20, color: '#373737' }}>Email Address For Updates</Text>
                  </View>
                  <View style={{ flexDirection:'row', marginBottom: 15 }}>
                    <Text style={{ width: 50, fontSize: 15, color: '#777' }}>To:</Text><Text style={{ fontSize: 15, color: '#2b2121', flex: 1, flexWrap: 'wrap' }}>{account.email_updates}</Text>
                  </View>
                  <View style={{ flexDirection:'row', marginBottom: 15 }}>
                    <Text style={{ width: 50, fontSize: 15, color: '#777' }}>CC:</Text><Text style={{ fontSize: 15, color: '#2b2121', flex: 1, flexWrap: 'wrap' }}>{account.email_updates_cc}</Text>
                  </View>
                </View>

                <View style={{ marginBottom: 30 }}>
                  <View style={{ borderBottomColor: '#efefef', borderBottomWidth: 1, paddingBottom: 15, marginBottom: 30  }}>
                    <Text style={{ fontSize: 20, color: '#373737' }}>Project Specifications</Text>
                  </View>
                  <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 15, color: '#777', marginBottom: 5 }}>Nature of Business:</Text><Text style={{ fontSize: 15, color: '#2b2121', flex: 1, flexWrap: 'wrap' }}>{account.nature_of_business}</Text>
                  </View>
                  <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 15, color: '#777', marginBottom: 5 }}>Additional Information:</Text><Text style={{ fontSize: 15, color: '#2b2121' }}>{account.additional_info}</Text>
                  </View>
                </View>

                <View style={{ flex: 1, flexDirection:'row', alignContent: 'center', justifyContent: 'center' }}>
                  <TouchableOpacity onPress={() => Actions.history()} style={{ width: '48%', height: 55, backgroundColor: '#3081ff', textAlign: 'center', borderRadius: 5, margin: 5}}>
                    <Text style={{ color: '#fff', lineHeight: 55, textAlign: 'center', color: '#fff' }}>Task History</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Actions.createtask()}style={{ width: '48%', height: 55, borderColor: '#3081ff', borderWidth: 1, textAlign: 'center', borderRadius: 5, margin: 5}}>
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
