import React , {Component}from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, ActivityIndicator, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Styles from '../../../assets/Styles'
import { Actions } from 'react-native-router-flux';
import {
    Content,
    Text,
    List,
    ListItem,
    Icon,
    Container,
    Left,
    Right,
    Badge
  } from "native-base";
  const datas = [
    {
      name: "My Account",
      route: "myaccount",
      icon: "person",
      bg: "#C5F442"
    }
   
  ];
class SideNavigation extends Component{
  constructor(props){
      super();
    
  }


  render(){
 
        let name;
        if (this.props.RiderReducer.loggedinData.userid !== null) {
          name = this.props.RiderReducer.loggedinData.name;
        }
        return (
          <Container>
           
              <List
                style={{backgroundColor:'#fff'}}
                dataArray={datas}
                renderRow={data =>
                  <ListItem
                    button
                    noBorder
                    onPress={() => Actions[data.route].call({route:data.route})}
                  >
                    <Left>
                      <Icon
                        active
                        name={data.icon}
                        style={{fontSize: 20, width: 30 }}
                      />
                      <Text style={styles.text}>
                        {data.name}
                      </Text>
                    </Left>
                    {data.types &&
                      <Right style={{ flex: 1 }}>
                        <Badge
                          style={{
                            borderRadius: 3,
                            height: 20,
                            width: 50,
                            backgroundColor: data.bg
                          }}
                        >
                          <Text
                            style={styles.badgeText}
                          >{`${data.types}`}</Text>
                        </Badge>
                      </Right>}
                  </ListItem>}
                  keyExtractor= {(item,index)=> index.toString()}
              />
             
          </Container>
        );
      }
    }
    
export default SideNavigation;