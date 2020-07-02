import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, ImageBackground, TouchableOpacity , StyleSheet } from 'react-native';
import Helpers from '../../Helpers'
import axios from 'axios';
import Loader from '../../components/Loader';
class TaskDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            loader : true,
            task : [],
        }
    }
    componentDidMount(){
        this.fetchTask();
    }
    fetchTask = () => {
        const {task_id} = this.props;
        const url = Helpers.api_url + 'tasks/get_task_info/'+task_id;
        axios.get(url).then( res => {
            this.setState({loader : false , task : res});
        });
    }
  render() {
    const {data} = this.state.task;
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Loader visible = {this.state.loader} />
            <View style={{ height: '100%' }}>
                <View style={{ height: 240, alignItems: 'center' }}>
                    <ImageBackground source={require('../../assets/images/login_bg.png')} style={{ width: null, height: null, alignSelf: 'stretch', flex: 1 }} resizeMode={'cover'} >
                        <View style={{alignItems: 'center', flex: 1 }}>
                        <Text style={{ fontSize: 23, color: '#fff', marginTop: 60 }}>-------</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -80 }}>
                    <View style={{ width: '90%', borderTopLeftRadius: 25, borderTopRightRadius: 25, backgroundColor: '#fff', padding: '8%' }}>
                        <View style={{ paddingTop: 25, marginBottom: 35 }}>
                            <Text style={{ color: '#9d9d9d', fontSize: 16 }}>Date ----</Text>
                        </View>
                        <View style={{ borderBottomColor: '#efefef', borderBottomWidth: 1, paddingBottom: 45, marginBottom: 45 }}>
                            <Text style={{ color: '#9d9d9d', fontSize: 15, marginBottom: 5 }}>Account Name:</Text>
                            <Text style={{ color: '#373737', fontSize: 18 }}>Sample Account Name</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#9d9d9d', fontSize: 18, marginBottom: 25 }}>Instructions:</Text>
                            <View style={{ flexDirection:'row', marginBottom: 17, marginTop: 17 }}>
                                <Text style={{ color: '#606060', fontSize: 17 }}>1: </Text>
                                <Text style={{ color: '#606060', fontSize: 17 }}>{'-------'}</Text>
                            </View>
                        </View>

                    </View>

                </View>
            </View>
        </ScrollView>
    );
  }
}
export default TaskDetails;
