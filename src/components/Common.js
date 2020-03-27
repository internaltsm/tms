import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, ActivityIndicator, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Styles from '../assets/Styles'
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
        paddingTop: Platform.OS === 'ios' ? 40 : 15,
        borderBottomWidth: .3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
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
        textTransform: 'uppercase',
        letterSpacing: 1.2
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