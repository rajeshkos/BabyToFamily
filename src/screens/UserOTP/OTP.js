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
  KeyboardAvoidingView,
  Image,
  TouchableHighlight,
  ScrollView,
  Platform,
  InteractionManager,
  NetInfo,
  AsyncStorage,
} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, SocialIcon } from 'react-native-elements';
import {connect} from 'react-redux';
import InputWithIcon  from '../../components/InputWithIcon'
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
import {forgotUpdate,forgotPassword} from './OTPActions'
import styles from './style';

//import Hr from 'react-native-hr'
const {width,height}=Dimensions.get('window');

 class OTP extends Component {

   constructor(props) {
     super(props);
     this.state = {
       otpText: "Enter the 6-digit code sent to you at "
     };

     AsyncStorage.getItem("accessToken").then((value) => {
       if(value) {
             console.log('login info=',value);
                 this.setState({"otpText":"Enter the 4-digit code sent to you at "+value});
        }
          }).done();

   }


   componentDidMount() {
     NetInfo.addEventListener(
       'change',
       this.handleFirstConnectivityChange
     );

  }

   handleFirstConnectivityChange(isConnected) {
    NetInfo.isConnected.removeEventListener(
      'change',
      this.handleFirstConnectivityChange
    );

  }

   setFocus(event, heightUp){
     InteractionManager.runAfterInteractions(() => {
     this.refs.scrollView.scrollTo({y: height-heightUp, animated: true});
   });
   }
handleSend=(email)=>{
        let intRegex = /[0-9 -()+]+$/;
        NetInfo.isConnected.fetch().then(isConnected => {
 if(isConnected) {
        if(intRegex.test(email)) {
           if((email.length < 9) || (!intRegex.test(email)))
        {
             alert('Invalid Mobile Number');
             //return false;
        }
        }
      else
      {
        let eml = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
          if (eml.test(email) == false) {
      alert("Invalid Email ID");
   }
  }


 this.props.forgotPassword({email});
}
else {
  alert('Please check your internet connectivity and try again')
}

});


}
  render() {
const {email,password,loading,forgotUpdate}=this.props;

    return (



        <ScrollView  ref="scrollView" contentContainerStyle={{flex:1,  justifyContent: 'center'}}>

       <View style={styles.container}>
          <Image resizeMode="stretch" style={styles.canvas} source={require('./Images/Logo/logo.png')} />
       </View>
        <View style={styles.icon}>
         <TouchableHighlight style={{flex:1}} onPress={()=>Actions.pop()} underlayColor={'transparent'}>
         <Icon name="md-arrow-round-back" size={30} color="#FFFFFF"   />
         </TouchableHighlight>
         </View>
        <View style={styles.headingMain}>
          <View style={{flex: 1, alignSelf: 'center'}}>
             <View style={styles.subHeadingMain}>
                <View style={{alignSelf:'center', flex: 1,
                    justifyContent: 'center', paddingLeft: 10, paddingRight: 10}}>
                    <Text style={styles.headingText}>{this.state.otpText}</Text>
                </View>

            </View>

          <View style={styles.inputTextMain}>
            <View style={styles.inputTextSub}>
                  <InputWithIcon
                    iconName={ require('./Images/mail/mail.png')}
                    value={email}
                    secureTextEntry={false}
                    placeholder="Confirmation code"
                    maxLength={6}
                    keyboardType="numeric"
                    onFocus={(event) => {
                      this.setFocus(event, (height-110));
                      }}
                      onBlur={(event) => {
                        this.setFocus(event, height);
                        }}
                    keyboardType="default"
                    placeholderTextColor="#333333"
                   onChangeText={(text)=>forgotUpdate({prop:'email',value:text})}
                  />
              </View>
              <View style={styles.btnMain}>
              <Button
                buttonStyle={styles.btnStyle}
                textStyle={styles.btnTextStyle}
                title={`Confirm`}
                onPress={()=>this.handleSend(email)}
              />
              </View>
              </View>
          </View>
            </View>

            </ScrollView>



    );
  }
}
const mapStateToProps=({Forgot,Signup})=>{
  const {email,loading,success}=Forgot;
  const {mobile}=Signup;
return{
    mobile,
    email,
    loading,
    success

}

}

export default connect(mapStateToProps,{forgotUpdate,forgotPassword})(OTP);
