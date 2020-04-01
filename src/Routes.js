import React from 'react';
import { View, Text, StyleSheet, YellowBox } from 'react-native';

import { Router, Scene, Overlay, Modal, Lightbox, Tabs, Actions } from 'react-native-router-flux';


import Home from './screens/home/Home';
import Details from './screens/home/Details';

import LoginVerify from './screens/home/LoginVerify';
import AccountDetails from './screens/home/AccountDetails';
import ForgotPassword from './screens/home/ForgotPassword'
import ChangePassword from './screens/home/ChangePassword'
import Dashboard from './screens/home/Dashboard';
import AccountsList from './screens/home/AccountsList';

//task
import Taskhistory from './screens/task/Taskhistory'


//tabs
import MyAccount from './screens/bottomtab/MyAccount'
import History from './screens/bottomtab/History'
import CreateTask from './screens/bottomtab/CreateTask'

const App = (props) => {

    return (
        <Router >
          <Modal key="modal" hideNavBar  >
            <Scene key="root"  hideNavBar>
                <Scene key="home" initial={true} hideNavBar={true} component={Home} />
               
                  <Scene key="loginverify" hideNavBar={true} component={LoginVerify} />
                  <Scene key="accountdetails" hideNavBar={true} component={AccountDetails} />
                  <Scene key="dashboard" hideNavBar={true} component={Dashboard} />
                  <Scene key="accountsList" hideNavBar={true} component={AccountsList} />
           
                  <Scene key="logindetails"  component={Details} />
                  <Scene key="forgot"    component={ForgotPassword} />
                
                  <Scene key="change"  component={ChangePassword} />
              
                  <Scene key="taskhistory"  component={Taskhistory} />
                
                   <Scene key="myaccount"  component={MyAccount}   back/>
                   <Scene key="createtask"  component={CreateTask}   back/>
                   <Scene key="history"  component={History}   back/>
                
            </Scene>
            </Modal>
        </Router>
 	);
}

export default App;
