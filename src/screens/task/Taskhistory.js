import React, { Component } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import {Avatar } from 'react-native-elements'
import { LinearButton,BackgroundStyleTop } from '../../components/Common';
import Styles from '../../assets/Styles'
const devHeight = Dimensions.get('window').height;
const height = devHeight/2;
class Details extends Component { 
    ss = () => {
        console.log('pressed');
        
    }
  render() {
    return (
      <View style={{flex:1}}>
        <BackgroundStyleTop   height={devHeight} />
         <View style={{flex:1,borderWidth:1,margin:50,borderRadius:25,backgroundColor:'#F4F6F9',borderColor:'white'}}>
            <ScrollView>
            <TouchableOpacity >
                    <View style={{ flex: 1,margin:10, borderRadius: 20,backgroundColor:'red', borderWidth: 1,
                                    borderColor: '#F4F6F9', shadowColor: 'black', flexDirection:'column',}}>
                        
                        {/* <View style={[styles.container, { paddingLeft: 20,backgroundColor:'red',flexDirection:'column' }]}> */}
                            <View>
                                
                            <Avatar
                                 rounded 
                                 size="large"
                                 source={{
                                    uri:
                                      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                  }}   
                            /> 

                            </View> 
                            <View>
                                <Text style={[Styles.fontGilroyBold, { marginBottom: 3, fontSize: 16, textAlign: 'left' }]}>jhkhjk</Text>
                                <Text style={[Styles.fontGilroyLight, { marginBottom: 3, fontSize: 12, textAlign: 'left' }]}>hjgfhj</Text>
                            </View>

                            <View>
                                <Text style={[Styles.fontGilroyBold, { marginBottom: 3, color: '#00ddc3', textTransform: 'uppercase', 
                                    fontSize: 16, textAlign: 'right' }]}>wishlisted</Text>
                                <Text style={[{ marginBottom: 3, color: '#444', fontSize: 15 }, Styles.fontGilroyLight]}> $ </Text>

                            </View>
                        </View>

                        
                    {/* </View> */}
                </TouchableOpacity>
            
          </ScrollView>
          </View>
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: Platform.OS == 'ios' ? 25 : 15,
        paddingTop: 15
    },
    details: {

    }
})
export default Details;