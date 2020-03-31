import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './screens/home/Home';
import Details from './screens/home/Details';



import Dashboard from './screens/home/Dashboard';
import AccountsList from './screens/home/AccountsList';


import LoginVerify from './screens/home/LoginVerify';
import AccountDetails from './screens/home/AccountDetails';


import ForgotPassword from './screens/home/ForgotPassword'
import ChangePassword from './screens/home/ChangePassword'


//task
import Taskhistory from './screens/task/Taskhistory'
import CreateTask from './screens/task/CreateTask'


//tabs
import MyAccount from './screens/bottomtab/MyAccount'
import History from './screens/bottomtab/History'






class Routes extends Component {
  render() {
    return (
        <Router>
            <Scene key="root">
                <Scene key="home" initial={true} hideNavBar={true} component={Home} />
                <Scene key="loginverify" hideNavBar={true} component={LoginVerify} />
                <Scene key="accountdetails" hideNavBar={true} component={AccountDetails} />
                <Scene key="dashboard" hideNavBar={true} component={Dashboard} />
                <Scene key="accountsList" hideNavBar={true} component={AccountsList} />

                <Scene key="details">
                  <Scene key="logindetails" initia component={Details} />
                </Scene>
                <Scene key="forgotpass">
                  <Scene key="forgot" initia component={ForgotPassword} />
                </Scene>
                <Scene key="changepass">
                  <Scene key="change" initia component={ChangePassword} />
                </Scene>
                <Scene key="taskhistory">
                  <Scene key="history" initia component={Taskhistory} />
                  <Scene key="createtask" initia component={CreateTask} />
                </Scene>
                <Scene key="tab">
                   <Scene key="myaccount" initia component={MyAccount}  initial back/>
                   <Scene key="createtask" initia component={CreateTask}   back/>
                   <Scene key="history" initia component={History}   back/>
                </Scene>
                <Scene key="tab">
                   <Scene key="myaccount" initia component={MyAccount}  initial back/>
                   <Scene key="createtask" initia component={CreateTask}   back/>
                   <Scene key="history" initia component={History}   back/>
                </Scene>
            </Scene>
        </Router>
    );
  }
}

export default Routes;
