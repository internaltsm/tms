import React, { Component, useState } from 'react';
import { Dimensions, ScrollView, View, Text, ImageBackground } from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;


class LoginVerify extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, height: deviceHeight }}>
                    <ImageBackground source={require('../../assets/images/login_bg.png')} style={{ width: '100%', height: '50%', alignSelf: 'stretch', flex: 1 }} resizeMode={'cover'} >
                        <View style={{ paddingLeft: '5%', paddingRight: '5%', justifyContent: 'center', flex: 1 }}>
                            <View style={{ backgroundColor: '#fff', height: '95%', borderRadius: 10, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 25, color: '#579fff', textAlign: 'center' }}>Enter Verification Code</Text>
                                <View>
                                    <CodeInput
                                        ref="codeInputRef2"
                                        secureTextEntry
                                        compareWithCode='AsDW2'
                                        activeColor='rgba(00, 00, 00, 00)'
                                        inactiveColor='rgba(00, 00, 00, 00)'
                                        autoFocus={false}
                                        ignoreCase={true}
                                        codeLength={5}
                                        inputPosition='center'
                                        keyboardType="numeric"
                                        size={55}
                                        onFulfill={(isValid) => this._onFinishCheckingCode1(isValid)}
                                        containerStyle={{ marginTop: 20 }}
                                        codeInputStyle={{ borderColor: 'transparent', borderBottomColor: '#ccc', borderBottomWidth: 1.5, fontSize: 20, color: '#000' }}
                                    />
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        );
    }
}

export default LoginVerify;