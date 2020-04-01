import React from 'react';
import { View, Text, StyleSheet, YellowBox } from 'react-native';

import { Router, Scene, Overlay, Modal, Lightbox, Tabs, Actions } from 'react-native-router-flux';


import Home from './screens/home/Home';
import Details from './screens/home/Details';
<<<<<<< HEAD
=======

>>>>>>> f5fa5eb39b920f513f6298f293a75dc29f19d3c8
import LoginVerify from './screens/home/LoginVerify';
import AccountDetails from './screens/home/AccountDetails';
import ForgotPassword from './screens/home/ForgotPassword'
import ChangePassword from './screens/home/ChangePassword'
import Dashboard from './screens/home/Dashboard';
import AccountsList from './screens/home/AccountsList';
<<<<<<< HEAD
class Routes extends Component {
  render() {
=======

//task
import Taskhistory from './screens/task/Taskhistory'
import CreateTask from './screens/task/CreateTask'


//tabs
import MyAccount from './screens/bottomtab/MyAccount'
import History from './screens/bottomtab/History'

const App = (props) => {

>>>>>>> f5fa5eb39b920f513f6298f293a75dc29f19d3c8
    return (
        <Router >
          <Modal key="modal" hideNavBar  >
            <Scene key="root"  hideNavBar>
                <Scene key="home" initial={true} hideNavBar={true} component={Home} />
<<<<<<< HEAD
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
                </Scene>
                <Scene key="tab">
                   <Scene key="myaccount" initia component={MyAccount}  initial back/>
                   <Scene key="createtask" initia component={CreateTask}   back/>
                   <Scene key="history" initia component={History}   back/>
                </Scene>
=======

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

>>>>>>> f5fa5eb39b920f513f6298f293a75dc29f19d3c8
            </Scene>
            </Modal>
        </Router>
 	);
}

<<<<<<< HEAD
export default Routes;
=======
export default App;
>>>>>>> f5fa5eb39b920f513f6298f293a75dc29f19d3c8
