import React, { Component } from 'react';


import configureStore from './store/configureStore';
import Login from 'app/containers/Login'
import Signup from 'app/containers/Signup'
import ForgotPassword from 'app/containers/ForgotPassword'
import { Provider } from 'react-redux';
//import Test from './Test'
import Tabs from './containers/Tabs'
import Routes from './Routes'

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Routes/>
  </Provider>
);

export default App;
