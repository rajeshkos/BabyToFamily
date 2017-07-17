import React,{Component} from 'react';
import {
  DrawerNavigator,
  StackNavigator,
  TabNavigator,
   TabBarBottom
} from 'react-navigation';

import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
/*
import Home from 'app/containers/tabs/Home';
import Settings from 'app/containers/tabs/Settings';
*/
//import Modal from 'app/containers/Modal';


import Tabs from 'app/containers/Tabs'
import Drawer from 'app/containers/Drawer';
import Signup from 'app/containers/Signup';
import Login  from 'app/containers/Login';
import Community from 'app/containers/Community';
import Gallery from 'app/containers/Gallery';
import Dashboard from 'app/containers/Dashboard';
import Nesting from 'app/containers/Nesting';
import Profile from 'app/containers/Profile';
import AddBaby from 'app/containers/AddBaby'
import ForgotPassword from 'app/containers/ForgotPassword'
import Otp from 'app/containers/Signup/OTP'


// Stack navigation for Settings and Profile screens

const Auth=StackNavigator({
      Login:{
         screen:Login
      },
      Signup:{
        screen:Signup
      },
      ForgotPassword:{
        screen:ForgotPassword
      },
      OtpScreen:{
          screen:Otp
      }

},{
  headerMode: 'screen',
})
const TabScreen=StackNavigator({
   Dashboard:{screen:Dashboard},
   Community:{screen:Community},
   Gallery:{screen:Gallery},
   Nesting:{screen:Nesting},
   Profile:{screen:Profile},

},{
    headerMode: 'none',

})

const DrawerItems=StackNavigator({
      AddBaby:{screen:AddBaby},

    },{
        headerMode: 'none',
})





const DrawerPage = DrawerNavigator({
    Tabs: {
      screen: TabScreen,
    },
    DrawerItems:{screen:DrawerItems}
  }, {
    // Register custom drawer component
    contentComponent: props => <Drawer {...props} />
});

const Routes = StackNavigator({
  Auth: {
    screen: Auth,
    navigationOptions: {
      header: null,
      headerBackTitle: 'Back',
    },
  },
  Home:{
    screen:DrawerPage ,
    navigationOptions: {
      header: null,

    },
  }


},
{
  headerMode: 'screen',
});

// Tab navigation for Home and Settings screens
/*
const TabNavigation = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => <Icon
        name={focused ? 'ios-home' : 'ios-home-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    },
  },
  Settings: {
    screen: SettingsTab,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor, focused }) =>
       <Icon
        name={focused ? 'ios-settings' : 'ios-settings-outline'}
        size={26}
        style={{ color: tintColor }}
      />

    },
  },
},{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
  tabBarComponent: TabBarBottom,
  tabBarOptions: {
    showIcon: true,
    activeBackgroundColor: 'rgba(54, 164, 35, 0.95)',
    activeTintColor: 'white',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'rgba(255,255,255,0.8)',
    },
  }
}


);
*/

// Wrap tab navigation into drawer navigation


// And lastly stack together drawer with tabs and modal navigation
// because we want to be able to call Modal screen from any other screen
/*
const  Routes=StackNavigator({
  TabsWithDrawer: {
    screen: TabsWithDrawerNavigation,
  },
  Modal: {
    screen: Modal4
  },
}, {
  // In modal mode screen slides up from the bottom
  mode: 'modal',
  // No headers for modals. Otherwise we'd have two headers on the screen, one for stack, one for modal.
  headerMode: 'none',
});
*/

export default Routes;
