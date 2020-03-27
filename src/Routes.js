import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './screens/home/Home';
import Details from './screens/home/Details';
<<<<<<< HEAD
import LoginVerify from './screens/home/LoginVerify';
import AccountDetails from './screens/home/AccountDetails';

=======
import ForgotPassword from './screens/home/ForgotPassword'
import ChangePassword from './screens/home/ChangePassword'
>>>>>>> c542ce0dc6af9d25a0249a59c3e8ac6947b17a93
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
                <Scene key="forgotpass">
                  <Scene key="forgot" initia component={ForgotPassword} />
                </Scene>
                <Scene key="changepass">
                  <Scene key="change" initia component={ChangePassword} />
                </Scene>
            </Scene>
        </Router>
    );
  }
}

export default Routes;