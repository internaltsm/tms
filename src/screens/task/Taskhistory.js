import React, { Component } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import {Avatar } from 'react-native-elements'
import { LinearButton,BackgroundStyleTop,TransparentHeader } from '../../components/Common';
import Styles from '../../assets/Styles'
import  FontAwesome  from 'react-native-vector-icons/FontAwesome'
const devHeight = Dimensions.get('window').height;
const height = devHeight/2;
import BottomNavi from '../../components/BottomNavi'

import Icon from 'react-native-vector-icons/FontAwesome';
class Taskhistory extends Component { 
    
  render() {
    return (
      <View style={{flex:1}}>
          <TransparentHeader title="Task History"  />
        <BackgroundStyleTop   height={devHeight} />
         <View style={{flex:1,borderWidth:1,margin:30,borderRadius:25,backgroundColor:'#F4F6F9',borderColor:'white'}}>
            <ScrollView>
            <TouchableOpacity >
                    <View style={{ flex: 1,margin:10, borderRadius: 15,backgroundColor:'white', borderWidth: 1,
                                    borderColor: '#F4F6F9', shadowColor: 'black',flexDirection: 'row' }}>
                        <View style={{padding:10 }}>
                            <Avatar
                                 rounded 
                                 size="large"
                                 source={{
                                    uri:
                                      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                  }}   
                            />
                                
                        </View>
                        <View style={[styles.container, { flex:1,paddingLeft: 5, paddingRight: 5,}]}>
                            <View>
                                <Text style={[Styles.fontGilroyBold, { marginBottom: 3, fontSize: 16, textAlign: 'left' }]}>Dummy Account</Text>
                                <Text style={[Styles.fontGilroyLight, { marginBottom: 3, fontSize: 12, textAlign: 'left' }]}>March 01,2020</Text>
                                <Text style={[Styles.fontGilroyLight, { marginBottom: 3, fontSize: 12, textAlign: 'left' }]}>Content are for display purpose only</Text>
                            </View>

                            <View >
                                <Text style={[Styles.fontGilroyBold, { marginBottom: 9,paddingRight:5, color: '#3182FF', 
                                    fontSize: 16, textAlign: 'right',flex:1 }]}><FontAwesome name="star" size={30} /></Text>
                            </View>
                        </View>

                        
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={{ flex: 1,margin:10, borderRadius: 15,backgroundColor:'white', borderWidth: 1,
                                    borderColor: '#F4F6F9', shadowColor: 'black',flexDirection: 'row' }}>
                        <View style={{padding:10 }}>
                            <Avatar
                                 rounded 
                                 size="large"
                                 source={{
                                    uri:
                                      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                  }}   
                            />
                                
                        </View>
                        <View style={[styles.container, { flex:1,paddingLeft: 5, paddingRight: 5,}]}>
                            <View>
                                <Text style={[Styles.fontGilroyBold, { marginBottom: 3, fontSize: 16, textAlign: 'left' }]}>Dummy Account</Text>
                                <Text style={[Styles.fontGilroyLight, { marginBottom: 3, fontSize: 12, textAlign: 'left' }]}>March 01,2020</Text>
                                <Text style={[Styles.fontGilroyLight, { marginBottom: 3, fontSize: 12, textAlign: 'left' }]}>Content are for display purpose only</Text>
                            </View>

                            <View >
                                <Text style={[Styles.fontGilroyBold, { marginBottom: 9,paddingRight:5, color: '#3182FF', 
                                    fontSize: 16, textAlign: 'right',flex:1 }]}><FontAwesome name="star" size={30} /></Text>
                            </View>
                        </View>

                        
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={{ flex: 1,margin:10, borderRadius: 15,backgroundColor:'white', borderWidth: 1,
                                    borderColor: '#F4F6F9', shadowColor: 'black',flexDirection: 'row' }}>
                        <View style={{padding:10 }}>
                            <Avatar
                                 rounded 
                                 size="large"
                                 source={{
                                    uri:
                                      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                  }}   
                            />
                                
                        </View>
                        <View style={[styles.container, { flex:1,paddingLeft: 5, paddingRight: 5,}]}>
                            <View>
                                <Text style={[Styles.fontGilroyBold, { marginBottom: 3, fontSize: 16, textAlign: 'left' }]}>Dummy Account</Text>
                                <Text style={[Styles.fontGilroyLight, { marginBottom: 3, fontSize: 12, textAlign: 'left' }]}>March 01,2020</Text>
                                <Text style={[Styles.fontGilroyLight, { marginBottom: 3, fontSize: 12, textAlign: 'left' }]}>Content are for display purpose only</Text>
                            </View>

                            <View >
                                <Text style={[Styles.fontGilroyBold, { marginBottom: 9,paddingRight:5, color: '#3182FF', 
                                    fontSize: 16, textAlign: 'right',flex:1 }]}><FontAwesome name="star" size={30} /></Text>
                            </View>
                        </View>

                        
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={{ flex: 1,margin:10, borderRadius: 15,backgroundColor:'white', borderWidth: 1,
                                    borderColor: '#F4F6F9', shadowColor: 'black',flexDirection: 'row' }}>
                        <View style={{padding:10 }}>
                            <Avatar
                                 rounded 
                                 size="large"
                                 source={{
                                    uri:
                                      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                  }}   
                            />
                                
                        </View>
                        <View style={[styles.container, { flex:1,paddingLeft: 5, paddingRight: 5,}]}>
                            <View>
                                <Text style={[Styles.fontGilroyBold, { marginBottom: 3, fontSize: 16, textAlign: 'left' }]}>Dummy Account</Text>
                                <Text style={[Styles.fontGilroyLight, { marginBottom: 3, fontSize: 12, textAlign: 'left' }]}>March 01,2020</Text>
                                <Text style={[Styles.fontGilroyLight, { marginBottom: 3, fontSize: 12, textAlign: 'left' }]}>Content are for display purpose only</Text>
                            </View>

                            <View >
                                <Text style={[Styles.fontGilroyBold, { marginBottom: 9,paddingRight:5, color: '#3182FF', 
                                    fontSize: 16, textAlign: 'right',flex:1 }]}><FontAwesome name="star" size={30} /></Text>
                            </View>
                        </View>

                        
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={{ flex: 1,margin:10, borderRadius: 15,backgroundColor:'white', borderWidth: 1,
                                    borderColor: '#F4F6F9', shadowColor: 'black',flexDirection: 'row' }}>
                        <View style={{padding:10 }}>
                            <Avatar
                                 rounded 
                                 size="large"
                                 source={{
                                    uri:
                                      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                  }}   
                            />
                                
                        </View>
                        <View style={[styles.container, { flex:1,paddingLeft: 5, paddingRight: 5,}]}>
                            <View>
                                <Text style={[Styles.fontGilroyBold, { marginBottom: 3, fontSize: 16, textAlign: 'left' }]}>Dummy Account</Text>
                                <Text style={[Styles.fontGilroyLight, { marginBottom: 3, fontSize: 12, textAlign: 'left' }]}>March 01,2020</Text>
                                <Text style={[Styles.fontGilroyLight, { marginBottom: 3, fontSize: 12, textAlign: 'left' }]}>Content are for display purpose only</Text>
                            </View>

                            <View >
                                <Text style={[Styles.fontGilroyBold, { marginBottom: 9,paddingRight:5, color: '#3182FF', 
                                    fontSize: 16, textAlign: 'right',flex:1 }]}><FontAwesome name="star" size={30} /></Text>
                            </View>
                        </View>

                        
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={{ flex: 1,margin:10, borderRadius: 15,backgroundColor:'white', borderWidth: 1,
                                    borderColor: '#F4F6F9', shadowColor: 'black',flexDirection: 'row' }}>
                        <View style={{padding:10 }}>
                            <Avatar
                                 rounded 
                                 size="large"
                                 source={{
                                    uri:
                                      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                  }}   
                            />
                                
                        </View>
                        <View style={[styles.container, { flex:1,paddingLeft: 5, paddingRight: 5,}]}>
                            <View>
                                <Text style={[Styles.fontGilroyBold, { marginBottom: 3, fontSize: 16, textAlign: 'left' }]}>Dummy Account</Text>
                                <Text style={[Styles.fontGilroyLight, { marginBottom: 3, fontSize: 12, textAlign: 'left' }]}>March 01,2020</Text>
                                <Text style={[Styles.fontGilroyLight, { marginBottom: 3, fontSize: 12, textAlign: 'left' }]}>Content are for display purpose only</Text>
                            </View>

                            <View >
                                <Text style={[Styles.fontGilroyBold, { marginBottom: 9,paddingRight:5, color: '#3182FF', 
                                    fontSize: 16, textAlign: 'right',flex:1 }]}><FontAwesome name="star" size={30} /></Text>
                            </View>
                        </View>

                        
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={{ flex: 1,margin:10, borderRadius: 15,backgroundColor:'white', borderWidth: 1,
                                    borderColor: '#F4F6F9', shadowColor: 'black',flexDirection: 'row' }}>
                        <View style={{padding:10 }}>
                            <Avatar
                                 rounded 
                                 size="large"
                                 source={{
                                    uri:
                                      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                  }}   
                            />
                                
                        </View>
                        <View style={[styles.container, { flex:1,paddingLeft: 5, paddingRight: 5,}]}>
                            <View>
                                <Text style={[Styles.fontGilroyBold, { marginBottom: 3, fontSize: 16, textAlign: 'left' }]}>Dummy Account</Text>
                                <Text style={[Styles.fontGilroyLight, { marginBottom: 3, fontSize: 12, textAlign: 'left' }]}>March 01,2020</Text>
                                <Text style={[Styles.fontGilroyLight, { marginBottom: 3, fontSize: 12, textAlign: 'left' }]}>Content are for display purpose only</Text>
                            </View>

                            <View >
                                <Text style={[Styles.fontGilroyBold, { marginBottom: 9,paddingRight:5, color: '#3182FF', 
                                    fontSize: 16, textAlign: 'right',flex:1 }]}><FontAwesome name="star" size={30} /></Text>
                            </View>
                        </View>

                        
                    </View>
                </TouchableOpacity>                
          </ScrollView>
          <BottomNavi />

          </View>

      </View>
    
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingBottom: Platform.OS == 'ios' ? 25 : 15,
        paddingTop: 15
    },
    details: {

    }
})
export default Taskhistory;