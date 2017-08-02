import React, { Component } from 'react';
import {
    addNavigationHelpers,
    NavigationActions

} from 'react-navigation'
import {
    BackHandler,
    Alert
} from 'react-native'
import { connect } from 'react-redux';
import configureStore from './store/configureStore';
import Login from 'app/containers/Login'
import Signup from 'app/containers/Signup'
import ForgotPassword from 'app/containers/ForgotPassword'
import { Provider } from 'react-redux';
//import Test from './Test'
import Tabs from './containers/Tabs'
import Routes from './Routes'

const store = configureStore();

// const App = () => (
//
// );
class App extends Component{
  constructor(props) {
        super(props);
         this.currentRouteName = 'Home';
    }
    componentDidMount() {
   BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
 }
 componentWillUnmount() {
   BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
 }
 onBackPress = () => {
   const { dispatch, nav } = this.props;
   if (this.currentRouteName==='Home') {
     Alert.alert(
         'Alert',
         'Do You Really Want to Exit?',
         [
            {text: 'Cancel', onPress: () =>{return true}},
           {text: 'OK', onPress: () =>  BackHandler.exitApp()}

         ],
         { cancelable: true }
       )
    }
      return true

 };
  render(){

    return(

      <Provider store={store}>
        <Routes
          onNavigationStateChange={(prevState, currentState, action) => {
           this.currentRouteName = currentState.routes[currentState.index].routeName;
           }}

            />
      </Provider>
    )
  }
}

export default App;
