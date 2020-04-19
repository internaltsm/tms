import React, { Component } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView, View, Text, StyleSheet, Dimensions, TouchableOpacity , TextInput , Alert , ToastAndroid } from 'react-native';
import {Avatar , Divider , ButtonGroup , Button } from 'react-native-elements'
import { LinearButton,BackgroundStyleTop } from '../../components/Common';
import LinearGradient from 'react-native-linear-gradient'
import Styles from '../../assets/Styles'
import  FontAwesome  from 'react-native-vector-icons/FontAwesome'
import Spinner from 'react-native-loading-spinner-overlay';
import DocumentPicker from 'react-native-document-picker';

import Config from '../../config';
import qs from 'qs';
import axios from 'axios';
import Helpers from '../../Helpers';

import Loader from '../../components/Loader';
const devHeight = Dimensions.get('window').height;
const height = devHeight/2;
const init = {
        txtContent :'Loading...',
        selectedIndex : 0,
        loader : false,
        date : new Date(),
        titleText : '',
        instruction : '',
        fileInfo : [],
        filename : 'Attachment'
    }
class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = init;
    }

    reset() {
        this.setState(init);
    }
    updateIndex = (selectedIndex) => {
        this.setState({selectedIndex});
        switch (selectedIndex){
            case 1 :
                this.setState({titleText : 'Upload Audio Files'});
                break;
            case 2 :
                this.setState({titleText : 'Upload Video Files'});
                break;
        }
    }

    attachedFileTo_txt_instrx = async() => {
        const file = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
        });

        this.setState({
            fileInfo : file,
            filename : file.name
        });
    }

    createtxt = () => {
        this.setState({
            txtContent : 'Creating task...',
            loader : true
        });
        const {instruction , fileInfo} = this.state;
        const url = Config.api_url + 'tasks/create_task';
        const formdata = new FormData();
        formdata.append('instruction' , instruction);
        axios.post(url ,formdata).then(res => {
            const {data} = res;
            if(data.status === 'done'){
                if(fileInfo.size){
                    this.createtask_attach(res.data.task_id);
                }else{
                    this.reset();
                    ToastAndroid.show("Task created.", ToastAndroid.SHORT);
                }
            }
        })
    }

    createtask_attach = (task_id) => {
        const { fileInfo , type } = this.state;
        const data = new FormData();
        data.append('task_id' ,task_id );
        data.append('attachement' , {
            uri: fileInfo.uri,
            type: fileInfo.type,
            name : fileInfo.name
        });
        axios({
            method : 'POST',
            url : Config.api_url + 'tasks/uploadtxt_attach',
            data : data,
            responseType : 'json',
            onUploadProgress : (progs) => {
                var percentCompleted = Math.round((progs.loaded * 100) / progs.total)
                this.setState({
                    txtContent : percentCompleted+'% of '+ Helpers.convertBytes(progs.total)
                });
            }
        }).then( res => {
            const {data} = res;
            this.reset();
            ToastAndroid.show("Completed.", ToastAndroid.SHORT);
        })
    }

    attachmentOnly = async() => {
        const {selectedIndex} = this.state;
        const file = await DocumentPicker.pick({
            type: [selectedIndex == 1 ? DocumentPicker.types.audio : DocumentPicker.types.video]
        });
        this.setState({
            fileInfo : file,
            titleText : file.name
        });
    }

    submitAttachmentOnly = () => {
        this.setState({
            loader : true,
            txtContent : 'Loading...'
        });
        const {fileInfo , selectedIndex} = this.state;
        const data = new FormData();
        data.append('instrux' , {
            uri : fileInfo.uri,
            type: fileInfo.type,
            name: fileInfo.name
        });
        data.append('type' , selectedIndex === 1 ? 'audio' : 'video');
        axios({
            method : 'POST',
            url : Config.api_url + 'tasks/attachmentOnly',
            data : data,
            responseType : 'json',
            onUploadProgress : (progs) => {
                var percentCompleted = Math.round((progs.loaded * 100) / progs.total)
                this.setState({
                    txtContent : percentCompleted+'% of '+ Helpers.convertBytes(progs.total)
                });
            }
        }).then( res => {
            const { data } = res;
            if(data.status === 'done'){
                ToastAndroid.show("Completed.", ToastAndroid.SHORT);
            }else if(data.status === 'failed') {
                ToastAndroid.show(data.msg, ToastAndroid.SHORT);
            }else if(data.status === 'upload_error'){
                ToastAndroid.show('Error uploading file.', ToastAndroid.LONG);
            }
            this.reset();
        })
    }

    render() {
    const txt_attach = () => <Text >Text</Text>
    const voice = () => <Text >Voice</Text>
    const video = () => <Text >Video</Text>
    const buttons = [{ element: txt_attach }, { element: voice }, { element: video }]
        return (
            <View style={{flex:1}}>
                <Loader
                    visible={this.state.loader}
                    txtContent={this.state.txtContent}
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
                                                onChangeText = {(instruction) => this.setState({instruction})}
                                                value = {this.state.instruction}
                                                />
                                        </View>

                                        <View style = {styles.conts}>
                                            <TouchableOpacity onPress = {() => this.attachedFileTo_txt_instrx()} style= {styles.attachment}>
                                                <Text style= {styles.fadeColor}>{this.state.filename}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style = {styles.conts}>
                                            {/*
                                                <Button title="Additional Instruction"
                                                    type="outline"
                                                    buttonStyle = {styles.btn}
                                                    titleStyle={{ color: '#c7b1b1' , fontSize : 12}}
                                                    onPress = {() => alert('Additional Instrx')}
                                                    />
                                            */}
                                        </View>
                                    </View>
                                    :

                                    <View style = {styles.conts}>
                                        <TouchableOpacity onPress = {() => this.attachmentOnly()}  style= {styles.attachment}>
                                            <Text style= {styles.fadeColor}>{this.state.titleText}</Text>
                                        </TouchableOpacity>
                                    </View>
                                }
                                <View style = {styles.conts}>
                                    <Button
                                        title="Submit"
                                        type="solid"
                                        buttonStyle = {styles.btnSubmit}
                                        titleStyle={{ color: '#ffffff' , fontSize : 12}}
                                        onPress = {this.state.selectedIndex !==0 ? () => this.submitAttachmentOnly() : () => this.createtxt()}
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
