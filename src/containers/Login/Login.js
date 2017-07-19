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
  Linking,
  Platform
} from 'react-native';
import SafariView from 'react-native-safari-view';


import { Button, SocialIcon } from 'react-native-elements';
import {connect} from 'react-redux';

import styles from './style';
import InputWithIcon  from 'app/components/InputWithIcon'
import FingerprintScanner from 'react-native-fingerprint-scanner';

import FingerprintPopup from './FingerprintPopup';

import Loading from 'app/components/Loading';
import Icon from 'react-native-vector-icons/Ionicons';
const {width,height}=Dimensions.get('window');
import {loginUpdate,loginChecking,socialLoginSuccess,socialLoginFail,logout} from './LoginAction';






 class Login extends Component {
   constructor(props) {
     super(props);
     this.state = {
       errorMessage: undefined,
       popupShowed: false,
     };
   }

   state = {
     user: undefined,
   };
   static navigationOptions= {
           header: null
       }

componentWillMount(){
//  console.log(this.props.session,"session");
  const {navigate}=this.props.navigation;
  if(this.props.session===true){
    alert('Otp')
    navigate('OtpScreen')
  }



}

handleFingerprintShowed = () => {
  this.setState({ popupShowed: true });
};

handleFingerprintDismissed = () => {
  this.setState({ popupShowed: false });
};

       componentDidMount() {

             Linking.addEventListener('url', this.handleOpenURL);
             Linking.getInitialURL().then((url) => {
               if (url) {
                 this.handleOpenURL({ url });
               }
             });
             FingerprintScanner
               .isSensorAvailable()
               .then(()=>this.setState({ popupShowed: true }))
               .catch(error => alert(error.message));
           }

      componentWillUnmount() {
             // Remove event listener
             Linking.removeEventListener('url', this.handleOpenURL);
             FingerprintScanner.release();
           }



      componentWillReceiveProps(nextProps){
            const {navigate}=this.props.navigation;
           if(nextProps.auth){
              navigate('Home');
           }

      }

     handleOpenURL = ({ url }) => {
          const {navigate}=this.props.navigation;

             // Extract stringified user string out of the URL
             const [, user_string] = url.match(/user=([^#]+)/);
             this.setState({
               // Decode the user string and parse it into JSON
               user: JSON.parse(decodeURI(user_string))
             });
             if(this.state.user){
               this.props.socialLoginSuccess();
               navigate('Home');
             }
             console.log("yul",this.state.user);
             if (Platform.OS === 'ios') {
               SafariView.dismiss();
               if(this.state.user){
                 this.props.socialLoginSuccess();
                 navigate('Home');
               }
             }
           }


    loginWithFacebook = () =>this.openURL('http://172.24.3.104:3000/auth/facebook');





    loginWithInstagram = () =>this.openURL('http://172.24.3.104:3000/auth/instagram');



    openURL = (url) => {

      if (Platform.OS === 'ios') {
        SafariView.show({
          url: url,
          fromBottom: true,
        });
      }

      else {
        Linking.openURL(url);
      }
    }
   setFocus(event, heightUp){
     this.refs.scrollView.scrollTo({y: height-heightUp, animated: true});
   }

   Login=(email, password)=>{
    const {navigate}=this.props.navigation;
     if (!email) {
         alert('Please enter your Email ID')
       } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
         alert( 'Invalid Email ID');
       }else if(!password){
        alert('Please enter your Password')
      }else{
        console.log(email,password,"else");
        this.props.loginChecking({email,password,navigate});
      }
  }

  render() {
const { errorMessage, popupShowed } = this.state;
    const {loginUpdate,loginChecking,email,password,loading,auth,user,navigation,logout,session}=this.props;
  //  console.log("session",session);

    return (

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
                  maxLength={64}
                  placeholder="Email or Mobile No."
                  secureTextEntry={false}
                  keyboardType="default"
                  onFocus={(event) => {
                    this.setFocus(event, (height-50));
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
                    maxLength={6}
                    secureTextEntry={true}
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
                <Text style={styles.forgot} onPress={()=>{navigation.navigate('ForgotPassword');logout()}}>Forgot Password?</Text>
              </View>

{loading?
 <Loading/>
 :null
}
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
                 <TouchableHighlight onPress={this.loginWithFacebook} underlayColor="transparent">
                     <Image
                       source={require('./Images/Facebook/facebook.png')}
                     />
                   </TouchableHighlight>
                   </View>
                   <View style={styles.instaContainer}>
                <TouchableHighlight onPress={this.loginWithInstagram} underlayColor="transparent">
                       <Image
                         source={require('./Images/Instagram/instagram.png')}
                       />
               </TouchableHighlight>
               </View>
                 </View>


                 <View style={styles.newuserContainer}>
                      <View style={{flex: 1, justifyContent: 'flex-end'}}>
                      <Text style={styles.newuser}>New User?</Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'flex-start', marginLeft: 5}}>
                      <Text style={styles.registeruser} onPress={()=>{navigation.navigate('Signup');logout()}}>Register Now</Text>
                      </View>
                 </View>
          </View>
        </View>
      </View>

</View>
 {/*{errorMessage && (
   <Text style={styles.errorMessage}>
     {errorMessage}
   </Text>
 )}*/}


{popupShowed && (
  <FingerprintPopup
    style={styles.popup}
    handlePopupDismissed={this.handleFingerprintDismissed}
  />
)}
</ScrollView>

    );
  }
}

const mapStateToProps=({Login,Otp})=> {
  const {email,password,loading,auth,user}=Login;
  const {session}=Otp;
  return {
      email,
      password,
      loading,
      auth,
      user,
      session
    }
}
export default connect(mapStateToProps,{loginUpdate,loginChecking,socialLoginFail,socialLoginSuccess,logout})(Login)
