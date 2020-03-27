import React , {Component}from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import {Icons} from 'react-native-vector-icons/FontAwesome'

class Screen extends Component{
  
  render(){
   
      return(
   
       <View style={styles.container}> 
           <SafeAreaView style={{flex:1}}>
               <TouchableOpacity style={{alignItems:'flex-end',margin:16}} onPress={this.props.navigation.openDrawer}>
                    <Icons name="bars" size={24} color='#161924' />
               </TouchableOpacity>
               <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                  <Text styles={styles.text}>{this.props.name} Screen</Text>
               </View>
           </SafeAreaView>
       </View>
         
      )
  }
}
export default Screen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
     
    },
    text: {
      color:'#161924',
      fontSize:20,
      fontWeight:'500'
    }
  })