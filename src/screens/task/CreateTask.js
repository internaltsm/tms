import React, { Component } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView, View, Text, StyleSheet, Dimensions, TouchableOpacity , TextInput } from 'react-native';
import {Avatar , Divider , ButtonGroup , Button } from 'react-native-elements'
import { LinearButton,BackgroundStyleTop } from '../../components/Common';
import LinearGradient from 'react-native-linear-gradient'
import Styles from '../../assets/Styles'
import  FontAwesome  from 'react-native-vector-icons/FontAwesome'
import Spinner from 'react-native-loading-spinner-overlay';
import DocumentPicker from 'react-native-document-picker';
import RNFS  from 'react-native-fs';
const devHeight = Dimensions.get('window').height;
const height = devHeight/2;
class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex : 0,
            loader : false,
            date : new Date(),
            titleText : ''
        }
    }
    updateIndex = (selectedIndex) => {

        this.setState({selectedIndex});
        switch (selectedIndex){
            case 1 :
                this.setState({titleText : 'Audio Files'});
                break;
            case 2 :
                this.setState({titleText : 'Video Files'});
                break;
        }
    }
    attachedFile = () => {
            
            const res =  DocumentPicker.pick({type: [DocumentPicker.types.images]});
           
            console.log(res);
          
                            
        
  
    }
    render() {
        const component1 = () => <Text >Text</Text>
        const component2 = () => <Text >Voice</Text>
        const component3 = () => <Text >Video</Text>
        const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
        return (
            <View style={{flex:1}}>
                <Spinner
                    visible={this.state.loader}
                    textStyle={styles.spinnerTextStyle}
                    animation = 'slide'
                    cancelable = {false}
                    textContent = "Loading..."
                    size = 'large'
                    textStyle = {{color : '#F4F6F9' , fontSize: 14}}
                    />
                <BackgroundStyleTop   height={devHeight} />
                <View style={{flex:1,borderWidth:1,margin:30,borderRadius:25,backgroundColor:'#F4F6F9',borderColor:'white' , padding : 5}}>
                    <ScrollView>
                        <View style={styles.details}>
                            <Text style={[Styles.fontGilroyLight , {color : '#c7b1b1' }]}>{this.state.date.toLocaleDateString()}</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={[Styles.fontGilroyLight , {color : '#c7b1b1' }]}>Account Name: </Text>
                            <Text style={[{fontSize: 25, color:'#000000'}]}>Sample Company Name </Text>
                        </View>

                        <Divider style={{backgroundColor : '#c7b1b1' , margin : 20}}/>

                        <View style={styles.details}>
                            <Text style={[Styles.fontGilroyLight , {color : '#c7b1b1' }]}>Create Instructions: </Text>
                            <View style={{marginTop : 15 , borderRadius : 4 ,borderWidth : 1 , padding : 10 , borderColor : '#c7b1b1' }}>
                                <View>
                                    <ButtonGroup
                                          selectedIndex={this.state.selectedIndex}
                                          buttons={buttons}
                                          containerStyle={styles.btnGroup}
                                          innerBorderStyle={{width: 0, color: 'white'}}
                                          textStyle={{fontSize: 18, fontWeight: '600', color: 'red'}}
                                          onPress={(selectedIndex) => this.updateIndex(selectedIndex) }
                                        />
                                </View>
                                {
                                    this.state.selectedIndex === 0 ?

                                    <View>
                                        <View style = {styles.conts}>
                                            <TextInput
                                                multiline={true}
                                                numberOfLines={4}
                                                placeholder = 'Enter Instruction here'
                                                />
                                        </View>
                                        <View style = {styles.conts}>
                                            <TouchableOpacity onPress = {() => this.attachedFile()} style= {styles.attachment}>
                                                <Text style= {styles.fadeColor}>Attachments</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style = {styles.conts}>
                                            <Button title="Additional Instruction"
                                                type="outline"
                                                buttonStyle = {styles.btn}
                                                titleStyle={{ color: '#c7b1b1' , fontSize : 12}}
                                                onPress = {() => alert('Additional Instrx')}
                                                />
                                        </View>
                                    </View>
                                    :

                                    <View style = {styles.conts}>
                                        <TouchableOpacity onPress = {() => this.attachedFile()}  style= {styles.attachment}>
                                            <Text style= {styles.fadeColor}>Upload {this.state.titleText}</Text>
                                        </TouchableOpacity>
                                    </View>
                                }
                                <View style = {styles.conts}>
                                    <Button
                                        title="Submit"
                                        type="solid"
                                        buttonStyle = {styles.btnSubmit}
                                        titleStyle={{ color: '#ffffff' , fontSize : 12}}
                                        onPress = {() => alert('Submit')}
                                        />
                                </View>
                            </View>

                        </View>
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
        justifyContent:'space-between',
        paddingBottom: Platform.OS == 'ios' ? 25 : 15,
        paddingTop: 15
    },
    details: {
        marginTop : 30,
        marginRight: 30 ,
        marginBottom : 0,
        marginLeft : 30
    },
    spinnerTextStyle: {
        color: '#FFF',
        fontSize: 12,
    },
    attachment : {
        height : 90 ,
        borderWidth : 1 ,
        borderRadius :3 ,
        borderStyle: 'dashed',
        borderColor : '#c7b1b1',
        justifyContent : 'center',
        alignItems : 'center'
    },
    fadeColor : {
        color : '#c7b1b1'
    },
    btn : {
        borderWidth : 1 ,
        borderColor : '#c7b1b1',
    },
    btnSubmit : {
        width : 130
    },
    btnGroup : {
        height: 50,
        borderWidth: 0,
        borderColor: 'lightgray',
        borderRadius: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        marginRight: 0,
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 0
    },
    conts : {
        paddingTop : 10,
        paddingBottom : 10,
        paddingLeft : 0,
    }
})
export default CreateTask;
