import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './screens/home/Home';
import Details from './screens/home/Details';
import LoginVerify from './screens/home/LoginVerify';
import AccountDetails from './screens/home/AccountDetails';

class Routes extends Component {
  render() {
    return (
        <Router>
            <Scene key="root">
                <Scene key="home" initial={true} hideNavBar={true} component={Home} />
                <Scene key="loginverify" hideNavBar={true} component={LoginVerify} />
                <Scene key="accountdetails" hideNavBar={true} component={AccountDetails} />
                
                <Scene key="details">
                  <Scene key="logindetails" initia component={Details} />
                </Scene>
            </Scene>
        </Router>
    );
  }
}

export default Routes;