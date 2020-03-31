import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Styles from '../assets/Styles'
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
export const LinearButton = (props) => {
    let colors = ['#46AFFF', '#378EFF', '#2466FF'];

    if (props.disabled) {
        colors = ['#46AFFF', '#378EFF', '#2466FF']
    }

    return (

     
            <LinearGradient
                style={[Styles.linearGradient, { width:'50%',height: 47, alignItems: 'center',alignSelf:'center' }]}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={colors}
            >
                <Text style={props.style} >
                      {props.title}
                </Text>
             
            </LinearGradient>
       
    );
}
export const BackgroundStyle =  (props) =>{
   let height  = props.height / 2;
   let colors = ['#46AFFF', '#378EFF', '#2466FF'];

   if(height){
    return (
        <View>
             <SafeAreaView style={{ flex: 0.5}} >
             <LinearGradient
               
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={colors}
                height={height}
            >
            </LinearGradient>
             </SafeAreaView>
             <SafeAreaView style={{ flex: 0.5, backgroundColor: "white" }} />
        </View>
        
    )
   }
   
    
}
export const BackgroundStyleTop =  (props) =>{
    let height  = 200;
    let colors = ['#46AFFF', '#378EFF', '#2466FF'];
    console.log(height);
    
    if(height){
     return (
         <View>
              <SafeAreaView style={{ flex: 0.5}} >
              <LinearGradient
                
                 start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                 colors={colors}
                 height={height}
             >
             </LinearGradient>
              </SafeAreaView>
              <SafeAreaView style={{ flex: 0.5, backgroundColor: "white" }} />
         </View>
         
     )
    }
    
     
 }
 export const TransparentHeader = (props) => {
    let colors = ['#46AFFF', '#378EFF', '#2466FF'];
    
    
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            colors={colors}  >
                <View style={[commonStyle.transparentHeader, { borderColor: props.borderColor }, props.style]}>
                    <View style={commonStyle.navColumn}>
                        <TouchableOpacity onPress={Actions.pop} style={{ marginLeft: 15 }}>
                            <Icon name="angle-left" color={props.contentColor} size={25} ></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={commonStyle.navColumn}>
                        <Text style={[Styles.fontGilroyBold, commonStyle.transparentHeaderTitle, { color: props.contentColor }]}>{props.title}</Text>
                    </View>
                    <View style={commonStyle.navColumn} >
                        {props.right}
                    </View>
            </View>
        </LinearGradient>
    );
}
const commonStyle = StyleSheet.create({
    collapsibleHeader: {
        paddingTop: Platform.OS === 'ios' ? 40 : 0,
        height: Platform.OS === 'ios' ? 90 : 55,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        backgroundColor: 'white',
        borderBottomWidth: .2,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    transparentHeader: {
        paddingTop: Platform.OS === 'ios' ? 40 : 40,
        // borderBottomWidth: .3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        
      
          
    },
    navColumn: {
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1,

    },
    transparentHeaderTitle: {
        margin: 10,
        fontSize: 15,
        alignSelf: 'center',
        // textTransform: 'uppercase',
        letterSpacing: 1.2,
      
    },
    overlayHeader: {
        position: 'absolute',
        top: -45,
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    readMoreText: {
        color: '#000',
        marginTop: 5,
        textDecorationLine: 'underline'
    },
    rowHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 20,
        paddingVertical: 25
    }
})