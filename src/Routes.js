import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './screens/home/Home';
import Details from './screens/home/Details';
import ForgotPassword from './screens/home/ForgotPassword'
import ChangePassword from './screens/home/ChangePassword'

//task
import Taskhistory from './screens/task/Taskhistory'

class Routes extends Component {
  render() {
    return (
        <Router>
            <Scene key="root">
                <Scene key="home" initial={true} hideNavBar={true} component={Home} />
                
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
            </Scene>
        </Router>
    );
  }
}

export default Routes;  