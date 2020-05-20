import React from 'react';
import { View, Text, StyleSheet, YellowBox } from 'react-native';

import { Router, Scene, Overlay, Modal, Lightbox, Tabs, Actions } from 'react-native-router-flux';
import Helpers from './Helpers';

import Home from './screens/home/Home';
import Details from './screens/home/Details';
import TransConfig from './TransConfig';
import LoginVerify from './screens/home/LoginVerify';
import AccountDetails from './screens/home/AccountDetails';
import ForgotPassword from './screens/home/ForgotPassword'
import ChangePassword from './screens/home/ChangePassword'
import Dashboard from './screens/home/Dashboard';
import AccountsList from './screens/home/AccountsList';
import TaskDetails from './screens/home/TaskDetails';

//task
import Taskhistory from './screens/task/Taskhistory'
import CreateTask from './screens/task/CreateTask'

//tabs
import MyAccount from './screens/bottomtab/MyAccount'
import History from './screens/bottomtab/History'
const reducerCreate = params=> {
  const defaultReducer = Reducer(params);
  return (state, action)=> {
      return defaultReducer(state, action);
  }
};
const getSceneStyle = function (/* NavigationSceneRendererProps */ props, computedProps) {
  const style = {
      flex: 1,
      shadowColor: null,
      shadowOffset: null,
      shadowOpacity: null,
      shadowRadius: null
  };

  if (computedProps.isActive) {
     style.marginTop = computedProps.hideNavBar ? 0 : 64;
  }
  return style;
};


const App = (props) => {

    return (
        <Router  >

            <Scene key="root"  hideNavBar transitionConfig = {TransConfig} >
                <Scene key="home" initial={Helpers.isLoggedIn() ? false : true} hideNavBar={true} component={Home} />
                {/* <Scene key="home" initial={true} hideNavBar={true} component={AccountsList} /> */}
                <Scene key="loginverify" hideNavBar={true} component={LoginVerify} />
                <Scene key="accountdetails" hideNavBar={true} component={AccountDetails} />
                <Scene key="dashboard" initial={Helpers.isLoggedIn() ? true : false} hideNavBar={true} component={Dashboard} />
                <Scene key="accountsList" hideNavBar={true} component={AccountsList} />
                <Scene key="taskdetails" hideNavBar={true} component={TaskDetails} />
                <Scene key="history"  component={Taskhistory} back/>
                <Scene key="createtask"  component={CreateTask}   back/>
                <Scene key="logindetails"  component={Details} />
                <Scene key="forgotpass"  component={ForgotPassword} />
                <Scene key="changepassword" hideNavBar={true} component={ChangePassword}  />

                <Scene key="taskhistory">
                  <Scene key="history"  component={Taskhistory} initial/>
                </Scene>
                <Scene key="tab">
                   <Scene key="myaccount"  component={MyAccount}   back/>
                   <Scene key="createtask"  component={CreateTask}   back/>
                   <Scene key="history"  component={History}   back/>
                </Scene>
            </Scene>

        </Router>
 	);
}

export default App;
