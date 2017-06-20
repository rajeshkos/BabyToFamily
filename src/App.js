import React,{Component} from 'react';
import {View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Login from './screens/Login';
import Signup from './screens/Signup';
import ForgotPassword from './screens/ForgotPassword';

export default class App extends Component{
  render(){
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  console.log(store.getState());
  return(
    <Provider store={store}>
      <Login />
    </Provider>
  )
  }
}
