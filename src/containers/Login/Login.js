
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
  Platform,
  NetInfo,
   Keyboard
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SafariView from 'react-native-safari-view';
import { NavigationActions } from 'react-navigation'

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

import {session_destroy} from 'app/containers/Signup/OTP/OtpActions'





 class Login extends Component {
   constructor(props) {
     super(props);
     this.state = {
       errorMessage: undefined,
       popupShowed: false,
       connectionInfo: null,
       sensor:true
     };
   }

   state = {
     user: undefined,
   };
   static navigationOptions= {
           header: null
       }




_handleConnectionInfoChange=(connectionInfo)=>{
    this.setState({
      connectionInfo
    });
  }

componentWillMount(){
     this.props.logout()
//  console.log(this.props.session,"session");
  const {navigate}=this.props.navigation;
  //alert(this.props.auth)
  if(this.props.auth&&this.props.baby){
     navigate('Dashboard')
  }
  NetInfo.addEventListener(
       'change',
       this._handleConnectionInfoChange
   );

   NetInfo.fetch().done(
       (connectionInfo) => { this.setState({connectionInfo}); }
   );
}


handleFingerprintShowed = () => {
  this.setState({ popupShowed: true });
};

handleFingerprintDismissed = () => {
  this.setState({ popupShowed: false });
};

       componentDidMount() {
       const {fingerprint,auth}=this.props;
             Linking.addEventListener('url', this.handleOpenURL);
             Linking.getInitialURL().then((url) => {
               if (url) {
                 this.handleOpenURL({ url });
               }
             });

       if(fingerprint&!auth){
                 FingerprintScanner
                   .isSensorAvailable()
                   .then(()=>this.setState({ sensor:true }))

                   .catch(error => this.setState({sensor:false }));

                  }


           }

      componentWillUnmount() {
             // Remove event listener
             Linking.removeEventListener('url', this.handleOpenURL);
             FingerprintScanner.release();
             NetInfo.removeEventListener(
                 'change',
                 this._handleConnectionInfoChange
             );
           }


     handleOpenURL = ({ url }) => {
          const {navigate}=this.props.navigation;
             console.log(url);
             // Extract stringified user string out of the URL
             const [, user_string] = url.match(/user=([^#]+)/);
             this.setState({
               // Decode the user string and parse it into JSON
               user: JSON.parse(decodeURI(user_string))
             });

             //console.log("yul",this.state.user.facebook);
             if (Platform.OS === 'ios') {
               SafariView.dismiss();
               if(this.state.user){
                 this.props.socialLoginSuccess(this.state.user.facebook);
                 navigate('Dashboard');
               }
             }else{
               if(this.state.user){
                 this.props.socialLoginSuccess(this.state.user.facebook);
                 navigate('Dashboard');
               }
             }
           }


    loginWithFacebook = () =>this.openURL('http://52.39.212.226:4089/auth/facebook');





    loginWithInstagram = () =>this.openURL('http://52.39.212.226:4089/auth/instagram');



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
    const {connectionInfo}=this.state;
  //  console.log(connectionInfo);

if(connectionInfo!=='NONE'&&connectionInfo!=='none'){

     if (!email) {
         alert('Please enter your Email ID')
       } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
         alert( 'Invalid Email ID');
       }else if(!password){
        alert('Please enter your Password')
      }else{
      //  console.log(email,password,"else");
         this.props.session_destroy();
        this.props.loginChecking({email,password,navigate});
      }
    }else{
      alert('Please Check your Network')
    }
  }

  render() {
const { errorMessage, popupShowed } = this.state;
    const {loginUpdate,loginChecking,email,password,loading,auth,user,navigation,logout,session,fingerprint}=this.props;
  //  console.log("session",session);
    //  console.log(this.state.connectionInfo)

    return (

      <KeyboardAwareScrollView style={{flex:1, backgroundColor:'#fff'}} enableOnAndroid={true}>
         <StatusBar hidden={true} />
          <Image  style={{width:width,height:height, }} resizeMode="cover" source={require('./Images/Logo/header.png')}>
            <View style={{paddingTop:height/2-50, flex:1}}>
            <View style={styles.componentContainer}>
          <View style={styles.componentInnerContainer}>

            <View style={styles.smallFlex}>
                <InputWithIcon
                  iconName={ require('./Images/Username/user_name.png')}
                  value={email}
                  autoCapitalize="none"
                  maxLength={64}
                  placeholder="Email "
                  secureTextEntry={false}
                  keyboardType="default"
                  onFocus={(event) => {
                  //  this.setFocus(event, (height-50));
                    }}
                    onBlur={(event) => {
                    //  this.setFocus(event, height);
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
                    keyboardType="default"
                    sensor={this.state.sensor}
                    fingerPrintPress={()=>alert("Please Authenticate With Finger Print")}
                    onFocus={(event) => {
                    //  this.setFocus(event, (height-50));
                      }}
                      onBlur={(event) => {
                    //   this.setFocus(event, height);
                        }}
                    placeholderTextColor="#333333"
                    onChangeText={(text)=>loginUpdate({prop:'password',value:text})}
                    onSubmitEditing={Keyboard.dismiss}
                  />
              </View>

              <View style={styles.forgotContainer}>
                <Text style={styles.forgot} onPress={()=>{navigation.navigate('ForgotPassword');logout()}}>Forgot Password?</Text>
              </View>
              {loading?
                <View style={{ position:'absolute',top:50 }}>
                <Loading />
               </View>
               :null
              }

            <View style={styles.btnContainer}>
              <Button
                buttonStyle={styles.btnStyle}
                disabled={loading}
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
</Image>


{popupShowed && (
  <FingerprintPopup
    style={styles.popup}
    handlePopupDismissed={this.handleFingerprintDismissed}
  />
)}
  </KeyboardAwareScrollView>

    );
  }
}

const mapStateToProps=({Login,Otp,Settings})=> {
  const {email,password,loading,auth,user,baby}=Login;
  const {session}=Otp;
  const {fingerprint}=Settings;
  return {
      email,
      password,
      loading,
      auth,
      user,
      session,
      baby,
      fingerprint
    }
}
export default connect(mapStateToProps,{loginUpdate,loginChecking,socialLoginFail,socialLoginSuccess,logout,session_destroy})(Login)
