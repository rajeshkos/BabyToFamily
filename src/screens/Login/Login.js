/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  Image,
  TouchableHighlight,
  ScrollView,
  ActivityIndicator,
  Modal,
  NetInfo,
  InteractionManager,
  WebView,
  Linking,
  Platform,
} from 'react-native';
import SafariView from 'react-native-safari-view';

import { Actions} from 'react-native-router-flux';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, SocialIcon } from 'react-native-elements';
import {connect} from 'react-redux';
//import ErrorPanel from '../../components/input';
import styles from './style';
import InputWithIcon  from '../../components/InputWithIcon'
import   ProgressBar  from '../../components/ProgressBar'
import Loading from '../../components/ProgressBar';
import Icon from 'react-native-vector-icons/Ionicons';
const {width,height}=Dimensions.get('window');
import {loginUpdate,loginChecking} from './LoginAction';

//import validate from 'validate.js';

//import Hr from 'react-native-hr'



 class Login extends Component {
   constructor(props) {
   super(props);
   }

   state = {
     socialUser: undefined, // user has not logged in yet
   };

   componentDidMount() {
     NetInfo.addEventListener(
       'change',
       this.handleFirstConnectivityChange
     );
     Linking.addEventListener('url', this.handleOpenURL);
     // Launched from an external URL
     Linking.getInitialURL().then((url) => {
       if (url) {
         this.handleOpenURL({ url });
       }
     });
  };

   handleFirstConnectivityChange(isConnected) {
    NetInfo.isConnected.removeEventListener(
      'change',
      this.handleFirstConnectivityChange
    );

  }

  componentWillUnmount() {
    // Remove event listener
    Linking.removeEventListener('url', this.handleOpenURL);


  };

  handleOpenURL = ({ url }) => {
    // Extract stringified user string out of the URL
    const [, user_string] = url.match(/socialUser=([^#]+)/);
    this.setState({
      // Decode the user string and parse it into JSON
      socialUser: JSON.parse(decodeURI(user_string))
    });
    if (Platform.OS === 'ios') {
      SafariView.dismiss();
    }
  };

  openURL = (url) => {
    // Use SafariView on iOS
    NetInfo.isConnected.fetch().then(isConnected => {
      if(isConnected) {
    if (Platform.OS === 'ios') {
      SafariView.isAvailable()
      .then(SafariView.show({
        url: url,
        fromBottom: true,
      }))
      .catch(error => {
        console.log("Not Available");
      });

    }
    // Or Linking.openURL on Android
    else {
      Linking.openURL(url);
    }
}
else {
  alert('Please check your internet connectivity and try again')
}
});

  };


   setFocus(event, heightUp){
     InteractionManager.runAfterInteractions(() => {
     this.refs.scrollView.scrollTo({y: height-heightUp, animated: true});
    });
   }


   Login=(email, password)=>{
     NetInfo.isConnected.fetch().then(isConnected => {
       if(isConnected) {
         if (!email) {
             alert('Please enter your Email ID')
           } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
             alert( 'Invalid Email ID');
           }else if(!password){
            alert('Please enter your Password')
          }else{
            this.props.loginChecking({email,password});
          }
       }
       else {
         alert('Please check your internet connectivity and try again')
       }
    });
  }
  loginWithFacebook = () => this.openURL('http://172.24.3.104:3000/auth/facebook');

  // Handle Login with Google button tap
  loginWithInstagram = () => this.openURL('http://172.24.3.104:3000/auth/instagram');

  render() {
    const { socialUser } = this.state;

    const {loginUpdate,loginChecking,email,password,loading,auth,user}=this.props;
    return (
      <View style={{flex: 1}}>

      <ScrollView  ref="scrollView" contentContainerStyle={{flex:1,  justifyContent: 'center'}}>

      <View style={styles.fullContainer}>

        <View style={styles.mainContainer}>
         <StatusBar hidden={true} />

           <View style={styles.container}>

          <Image resizeMode="stretch" style={styles.canvas} source={require('./Images/Logo/logo.png')} />
         </View>
            <View style={styles.componentContainer}>
          <View style={styles.componentInnerContainer}>

            <View style={styles.smallFlex}>
                <InputWithIcon
                  iconName={ require('./Images/Username/user_name.png')}
                  value={email}
                  placeholder="Email or Mobile No."
                  maxLength={64}
                  secureTextEntry={false}
                  keyboardType="default"
                  onFocus={(event) => {
                    this.setFocus(event, (height-80));
                    }}
                    onBlur={(event) => {
                      this.setFocus(event, height);
                      }}
                  placeholderTextColor="#333333"
                  onChangeText={(text)=>loginUpdate({prop:'email',value:text})}
                />
            </View>

              <View style={styles.spaceTextInput}>
                  <InputWithIcon
                    iconName={ require('./Images/Password/password.png')}
                    value={password}
                    placeholder="Password"
                    secureTextEntry={true}
                    maxLength={10}
                    keyboardType="default"
                    onFocus={(event) => {
                      this.setFocus(event, (height-50));
                      }}
                      onBlur={(event) => {
                        this.setFocus(event, height);
                        }}
                    placeholderTextColor="#333333"
                    onChangeText={(text)=>loginUpdate({prop:'password',value:text})}
                  />
              </View>

              <View style={styles.forgotContainer}>
                <Text style={styles.forgot} onPress={()=>Actions.ForgotPassword()}>Forgot Password?</Text>
              </View>
                      {loading?
                          <ProgressBar/>
                        : null}

            <View style={styles.btnContainer}>
              <Button
                buttonStyle={styles.btnStyle}
                onPress={()=>this.Login(email, password)}
                textStyle={styles.btnTextStyle}
                title={`Login`}
              />
            </View>

            <View style={styles.orContainer}>
              <Text style={styles.or}>or</Text>
            </View>


            <View style={styles.socialContainer}>
                 <View style={styles.facebookContainer}>
                 <TouchableHighlight underlayColor={'transparent'} onPress={this.loginWithFacebook}>
                     <Image
                       source={require('./Images/Facebook/facebook.png')}
                     />
                   </TouchableHighlight>
                   </View>
                   <View style={styles.instaContainer}>
                <TouchableHighlight underlayColor={'transparent'} onPress={this.loginWithInstagram}>
                       <Image
                         source={require('./Images/Instagram/instagram.png')}
                       />
               </TouchableHighlight>
               </View>
                 </View>


                 <View style={styles.newuserContainer}>
                      <View style={{flex: 0.5,}}>
                      <Text style={styles.newuser}>New User? </Text>
                      </View>
                      <View style={{flex: 0.5}}>
                      <Text style={styles.registeruser} onPress={()=>Actions.Signup()}>Register Now</Text>
                      </View>
                    </View>
          </View>
        </View>
      </View>

</View>
</ScrollView>
</View>
    );
  }
}

const mapStateToProps=({Login})=> {
  const {email,password,loading,auth,user}=Login;
  return {
      email,
      password,
      loading,
      auth,
      user
    }
}
export default connect(mapStateToProps,{loginUpdate,loginChecking})(Login)
