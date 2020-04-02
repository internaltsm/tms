import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, ImageBackground, TouchableOpacity, Image , StyleSheet , Alert} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Config from '../../config';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
class AccountsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            loader : true,
            accounts : [],
        }
    }
    componentDidMount(){
        this.fetchAccounts();
    }
    fetchAccounts() {
        const url = Config.api_url + 'accounts/getaccounts';
        axios.get(url).then(res => {
            if(res.data.status === 'ok'){
                console.log(res)
                this.setState({accounts : res.data.list , loader : false});
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
                            <TouchableOpacity key={idx} onPress={() => Actions.accountdetails({account_id : val.account_id})} style={{ width: '45%', height: 160, justifyContent: 'center', alignItems: 'center', marginBottom: 30, borderRadius: 8, margin: 7, borderColor: '#3e9dff', borderWidth: 1, shadowColor: '#3e9dff', shadowOffset: { width: 0, height: -100 }, shadowOpacity: 0.1, shadowRadius: 10, elevation: 40, backgroundColor: '#fff' }}>
                              <Image source = {require('../../assets/images/accountsList_icon.png')} style = {{ width: 90, height: 37, resizeMode: 'contain', marginTop: 0}} />
                              <Text style={{ fontSize: 15, color: '#727272', marginTop: 30 }}>{val.account_name}</Text>
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
