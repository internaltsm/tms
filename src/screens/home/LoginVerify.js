import React, { Component, useState } from 'react';
import { Dimensions, ScrollView, View, Text, ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell, } from 'react-native-confirmation-code-field';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFiledRoot: { marginTop: 20 },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
});

const CELL_COUNT = 6;
// const App = () => {
//     const [value, setValue] = useState('');
//     const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
//     const [props, getCellOnLayoutHandler] = useClearByFocusCell({
//         value,
//         setValue,
//     });
// };

class LoginVerify extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: useState(''),
    //         setValue: useState(''),
    //         ref: useBlurOnFulfill({ value, cellCount: CELL_COUNT }),
    //         props: useClearByFocusCell({value, setValue}),
    //         getCellOnLayoutHandler: useClearByFocusCell({value, setValue})
    //     };
    //   }


    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, height: deviceHeight }}>
                    <ImageBackground source={require('../../assets/images/login_bg.png')} style={{ width: '100%', height: '50%', alignSelf: 'stretch', flex: 1 }} resizeMode={'cover'} >
                        <View style={{ paddingLeft: '5%', paddingRight: '5%', justifyContent: 'center', flex: 1 }}>
                            <View style={{ backgroundColor: '#fff', height: '95%', borderRadius: 10, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 25, color: '#579fff', textAlign: 'center' }}>Enter Verification Code</Text>
                            </View>
                            <View>
                                {/* <SafeAreaView style={styles.root}>
                                    <Text style={styles.title}>Verification</Text>
                                    <CodeField
                                        ref={ref}
                                        {...props}
                                        value={value}
                                        onChangeText={setValue}
                                        cellCount={CELL_COUNT}
                                        rootStyle={styles.codeFiledRoot}
                                        keyboardType="number-pad"
                                        renderCell={({ index, symbol, isFocused }) => (
                                            <Text
                                                key={index}
                                                style={[styles.cell, isFocused && styles.focusCell]}
                                                onLayout={getCellOnLayoutHandler(index)}>
                                                {symbol || (isFocused ? <Cursor /> : null)}
                                            </Text>
                                        )}
                                    />
                                </SafeAreaView> */}
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        );
    }
}

export default LoginVerify;