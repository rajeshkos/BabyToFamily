import React,{Component} from 'react';
import {
  DrawerNavigator,
   StackNavigator,
   TabNavigator,
   TabBarBottom,
   addNavigationHelpers,
} from 'react-navigation';

import {
    BackHandler,
    Alert
} from 'react-native'
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

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
import FamilyMember from 'app/containers/Drawer/DrawerPages/FamilyMember'
import Feedback from 'app/containers/Drawer/DrawerPages/Feedback'
import FoodMusic from 'app/containers/Drawer/DrawerPages/FoodMusic'
import InviteEarn from 'app/containers/Drawer/DrawerPages/InviteEarn'
import MomentsPrint from 'app/containers/Drawer/DrawerPages/MomentsPrint'
import Terms from 'app/containers/Drawer/DrawerPages/Terms'
import Settings from 'app/containers/Dashboard/Settings'
import AddMilestone from 'app/containers/Profile/AddMilestone'
import MilestoneScreen from 'app/containers/Profile/AddMilestone/MilestoneScreen'
import ChangePassword from 'app/containers/Dashboard/Settings/ChangePassword'
//import IntroScreenOne from 'app/containers/WalkScreen/IntroScreenOne'
//import BottomScreen from 'app/containers/WalkScreen/BottomScreen'
import WalkScreen from 'app/containers/WalkScreen/WalkScreen'
import AudioPlayer from 'app/containers/Dashboard/AudioPlayer'

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
  // Dashboard:{screen:Dashboard},
  Dashboard:{screen:Dashboard},
   Community:{screen:Community},
   Gallery:{screen:Gallery},
   Nesting:{screen:Nesting},
   Profile:{screen:Profile},
   AddMilestone:{screen:AddMilestone},
  MilestoneScreen:{screen:MilestoneScreen},
  AudioPlayer:{screen:AudioPlayer}

},{
    headerMode: 'none',

})

  // const DrawerItems=StackNavigator({
  //       AddBaby:{screen:AddBaby},
  //       FamilyMember:{screen:FamilyMember},
  //       FoodMusic:{screen:FoodMusic},
  //       Feedback:{screen:Feedback},
  //       InviteEarn:{screen:InviteEarn},
  //       MomentsPrint:{screen:MomentsPrint},
  //       Terms:{screen:Terms}
  //
  //     },{
  //         headerMode: 'none',
  // })


const SettingStack=StackNavigator({
  Settings:{screen:Settings},
  ChangePassword:{screen:ChangePassword}
},{
    headerMode: 'none',
}
)


const DrawerPage = DrawerNavigator({
  Tabs: {
    screen: TabScreen,
  },
     AddBaby:{screen:AddBaby},
     FamilyMember:{screen:FamilyMember},
     FoodMusic:{screen:FoodMusic},
     Feedback:{screen:Feedback},
     InviteEarn:{screen:InviteEarn},
     MomentsPrint:{screen:MomentsPrint},
     Terms:{screen:Terms},
     Settings:{screen:SettingStack}
  }, {
    // Register custom drawer component
    contentComponent: props => <Drawer {...props} />
});

const Routes = StackNavigator({
  WalkScreen:{screen:WalkScreen,
    navigationOptions: {
      header: null,
    }
  },
  Auth: {
    screen:Auth,
    navigationOptions: {
      header: null,
      headerBackTitle: 'Back',
    },
  },

  Home:{
    screen:DrawerPage,
    navigationOptions: {
      header: null,
    },
  },

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
//  class  RotesWithState extends Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//           //  const { dispatch, nav } = this.props;
//     return (
//       <Routes
//     />
//     )
//   }
// }
// function mapStateToProps(state) {
//   console.log(state);
//   return {
//   //  nav: state.nav,
//   };
// }

export default Routes;
