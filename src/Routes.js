import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './screens/home/Home';
import Details from './screens/home/Details';
class Routes extends Component {
  render() {
    return (
        <Router>
            <Scene key="root">
                <Scene key="home" initial={true} hideNavBar={true} component={Home} />
                
                <Scene key="details">
                  <Scene key="logindetails" initia component={Details} />
                </Scene>
            </Scene>
        </Router>
    );
  }
}

export default Routes;  