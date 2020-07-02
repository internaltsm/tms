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
import axios from "axios";
import qs from 'qs';
import Helpers from '../../Helpers'
import Config from '../../config'
import Loader from '../../components/Loader';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
class Taskhistory extends Component {
    constructor(props){
        super(props);
        this.state= {
            tasks:[],
            loader  : false
        }
    }
    componentDidMount = () =>{
        this.getTaskList();
    }
    getTaskList = () => {
        const {acc_id} = this.props;
        this.setState({loader : true});
        axios.get(Helpers.orc_api('Task/history/'+acc_id)).then(response=>{
            this.setState({tasks:response.data , loader : false});
        })
    }

    displayList = () => {
        const tasks = this.state.tasks;
        const regex = ' /(<([^>]+)>)/ig';
        if (tasks) {
            return tasks.map((task,index)=>{
               return (
                <TouchableOpacity key={index} onPress={() => Actions.taskdetails({task_id : task.task_id})}>
                <View style={{ flex: 1,margin:10, borderRadius: 15,backgroundColor:'white', borderWidth: 1,
                                borderColor: '#F4F6F9', shadowColor: 'black',flexDirection: 'row' }}>
                    <View style={{padding:10 }}>
                        <Avatar
                             rounded
                             size="large"
                             source={{
                                uri:
                                  '',
                              }}
                        />

                    </View>
                    <View style={[styles.container, { flex:1,paddingLeft: 5, paddingRight: 5,}]}>
                        <View>
                            <Text style={[Styles.fontGilroyBold, { marginBottom: 3, fontSize: 16, textAlign: 'left' }]}>{'Web2'}</Text>
                            <Text style={[Styles.fontGilroyLight, { marginBottom: 3, fontSize: 12, textAlign: 'left' }]}>{task.date_added}</Text>
                            <Text style={[Styles.fontGilroyLight, { marginBottom: 3,textTransform: 'uppercase', fontSize: 12, textAlign: 'left' }]}>{task.instructions.replace(/(<([^>]+)>)/ig , '').substring(0, 24) + "..."}</Text>
                        </View>

                        <View >
                            <Text style={[Styles.fontGilroyBold, { marginBottom: 9,paddingRight:5, color: '#3182FF',
                                fontSize: 16, textAlign: 'right',flex:1 }]}><FontAwesome name="star" size={30} /></Text>
                        </View>
                    </View>


                </View>
            </TouchableOpacity>
               )

            })
        }else{
            <View><Text>No Task History</Text></View>
        }


    }
  render() {
        return (
            <View style={{flex:1}}>
                <Loader visible= {this.state.loader} />
                <TransparentHeader title="Task History"  />
                <BackgroundStyleTop   height={devHeight} />
                <View style={{flex:1,borderWidth:1,margin:30,borderRadius:25,backgroundColor:'#F4F6F9',borderColor:'white'}}>
                <ScrollView>
                    {this.displayList()}
                </ScrollView>
                </View>
                <BottomNavi />
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
