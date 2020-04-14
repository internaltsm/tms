import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, ImageBackground, TouchableOpacity, Image , StyleSheet , Alert} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Config from '../../config';
import Helpers from '../../Helpers';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
class AccountsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            loader : false,
            accounts : [],
        }
    }
    componentDidMount(){
        this.fetchAccounts();
    }
    fetchAccounts() {
        const url = Helpers.orc_api + 'acc_id_company';
        axios.get(url).then(res => {

            if(res.data){
                this.setState({accounts : res.data , loader : false});
            }
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
                <Text style={{ fontSize: 23, color: '#fff', marginTop: 60 }}>Accounts</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -80 }}>
            <View style={{ width: '90%', justifyContent: 'center', flex: 1, alignItems: 'center', borderTopLeftRadius: 25, borderTopRightRadius: 25, backgroundColor: '#fff', paddingLeft: '5%', paddingRight: '5%', paddingTop: 50, paddingBottom: 50, flexDirection:'row', flexWrap: 'wrap', alignContent: 'stretch' }}>
                {
                    this.state.accounts.map( (val , idx) => {
                        return(
                            <TouchableOpacity key={idx} onPress={() => Actions.accountdetails({account_id : val.acc_id})} style={{ width: '45%', height: 160, justifyContent: 'center', alignItems: 'center', marginBottom: 30, padding: 10, borderRadius: 8, margin: 7, borderColor: '#a4cdf7', borderWidth: 1, shadowColor: '#3e9dff', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.01, shadowRadius: 10, elevation: 5, backgroundColor: '#f3ffff' }}>
                              <Text style={{ fontSize: 15, color: '#044282', textAlign: 'center' }}>{val.company}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
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
export default AccountsList;
