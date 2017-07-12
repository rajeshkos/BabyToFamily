
import React, { Component } from 'react';

import { Actions, Scene, Router, Modal, Reducer } from 'react-native-router-flux';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import AddBaby from './AddBaby';
import OTP from './UserOTP';
import Test from './Test';

export default class Routes extends Component{
  render(){
  return(
    <Router>
      <Scene key="root"  hideNavBar={true}>
        <Scene key="Login" component={Login}  />
        <Scene key="Signup" component={Signup} />
        <Scene key="ForgotPassword" component={ForgotPassword}/>
        <Scene key="AddBaby" component={AddBaby}/>
        <Scene key="OTP" component={OTP}/>
        <Scene key="Test" component={Test}/>

      </Scene>
    </Router>
  )
  }
}
