import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Button, Modal, Actions } from 'react-native';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Actions } from 'react-native-router-flux';

import Styles from '../assets/Styles';

class BottomNavi extends Component {
    constructor(props) {
        super(props);
    }

    tabs = [
        {
            key: 'tab',
            icon: 'home',
            label: 'My Account',
        },
        {
            key: 'createtask',
            icon: 'tasks',
            label: 'Create Tasks',
        },
        {
            key: 'history',
            icon: 'history',
            label: 'History',
        },
        
    ]

    state = {
        activeTab: 'tab'
    }

    renderIcon = icon => ({ isActive }) => {

        return (
            <Icon size={24} color="black" name={icon} />
        )
    }

    renderTab = ({ tab, isActive }) => {
        return (
            <FullTab
                barColor="transparent"
                backgroundColor="transparent"
                key={tab.key}
                label={tab.label}
                labelStyle={[{ color: '#555' }, Styles.fontGilroyLight]}
                renderIcon={this.renderIcon(tab.icon)}
            />
        )
    }

    navigate(parameters) {
        let screen = parameters.key;
        Actions[screen]({ type: 'replace' });
    }

    render() {
        return (
            <BottomNavigation
                style={{ paddingVertical: 1 }}
                onTabPress={newTab => this.navigate(newTab)}
                renderTab={this.renderTab}
                tabs={this.tabs}
            />
        )
    }
}

export default BottomNavi;
