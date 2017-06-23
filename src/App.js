import React,{Component} from 'react';
import {View} from 'react-native';
import { Actions, Scene, Router, Modal, Reducer } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
//import { Actions, Scene, Router} from 'react-native-router-flux';
//import Login from './screens/Login';
//import Signup from './screens/Signup';
import Routes  from './screens/Routes';

//import ForgotPassword from './screens/ForgotPassword';

export default class App extends Component{
  render(){
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return(
    <Provider store={store}>
      <Routes/>
    </Provider>
  )
  }
}
