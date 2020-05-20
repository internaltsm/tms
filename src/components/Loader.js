/*
    Title : Loader.js
    Author : 817
    Date : April 19, 2020 -> COVID-19
    Version : 1.0
    Description: Loading Indicator

    Instrx : install first react-native-indicators or just use react-native ActivityIndicator

    import {BallIndicator,
        BarIndicator,
        DotIndicator,
        MaterialIndicator,
        PacmanIndicator,
        PulseIndicator,
        SkypeIndicator,
        UIActivityIndicator,
        WaveIndicator,
    } from 'react-native-indicators';

*/



import React from 'react';
import { StyleSheet, View, Modal , Text } from 'react-native';
import { SkypeIndicator } from 'react-native-indicators';


const Loader = props => {
    return (
        <Modal transparent={true} animationType={'fade'} visible={props.visible}>
            <View style={styles.container}>
                <View style={styles.spinnerContainer}>
                    <SkypeIndicator  color="blue" />
                    <View style={styles.txtContainer}>
                        <Text style={styles.txt}>{props.txtContent}</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

Loader.defaultProps = {
    visible : false,
    txtContent : 'Loading...'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000040'
      },
      spinnerContainer: {
        backgroundColor: '#FFFFFF',
        height: 120,
        width: 150,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtContainer : {
        position : 'absolute',
        top : 87
    },
    txt : {
        fontSize : 12
    }
})
export default Loader;
