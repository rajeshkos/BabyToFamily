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
} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, SocialIcon } from 'react-native-elements';
import {connect} from 'react-redux';
import InputWithIcon  from '../../components/InputWithIcon'
import Icon from 'react-native-vector-icons/Ionicons';
const {width,height}=Dimensions.get('window');
import {Actions} from 'react-native-router-flux';
import {forgotUpdate,forgotPassword} from './ForgotActions'
//import Hr from 'react-native-hr'

var styles = StyleSheet.create({
  container: {
    flex: 0.4,
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: width.width,
  },
  forgot: {
    alignSelf: "flex-end",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    color: '#B5BBEF',
    opacity: 1,
    fontFamily: 'GothamRounded-Book',
  },
  or: {
    padding: 15,
    backgroundColor: "transparent",
    alignSelf: "center",
    color: '#8F8F8F',
    opacity: 1,
    fontFamily: 'GothamRounded-Book',
  },
  newuser: {
    backgroundColor: "transparent",
    alignSelf: "flex-end",
    color: '#969696',
    opacity: 1,
    fontFamily: 'GothamRounded-Book',
  },
  registeruser: {
    backgroundColor: "transparent",
    alignSelf: "flex-start",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    color: '#B5BBEF',
    opacity: 1,
    fontFamily: 'GothamRounded-Book',
  },
  forgotContainer: {
    marginRight:20,
  }
});

 class ForgotPassword extends Component {
handleSend=(email)=>{


        // if (!email) {
        //     alert('Email Required')
        //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        //     alert( 'Invalid email address');
        //   }else if(isNaN(Number(email))){
        //   alert('Mobile should be a nuber')
        // }else{
        //    this.props.forgotPassword(email);
        // }

        let intRegex = /[0-9 -()+]+$/;

  if(intRegex.test(email)) {
     console.log("is phone");
           if((email.length < 9) || (!intRegex.test(email)))
        {
             alert('Please enter a valid phone number.');
             //return false;
        }

        }
      else
      {
   let eml = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
          console.log("is email");
          if (eml.test(email) == false) {
      alert("Please enter valid email address.");
     // $("#<%=txtEmail.ClientID %>").focus();
      //return false;
   }
      }







}
  render() {
const {email,password,loading,forgotUpdate}=this.props;

    return (
        <View style={{flex:1, flexDirection: 'column'}}>
        <StatusBar hidden={true} />

         <View style={styles.container}>
          <Image resizeMode="stretch" style={styles.canvas} source={require('./Images/Logo/logo.png')} >
          <View style={{position:'absolute',top:10,left:10,backgroundColor:'transparent',width:50,height:50,alignItems:'center',justifyContent:'center'}}>
           <TouchableHighlight style={{flex:1}} onPress={()=>Actions.pop()} underlayColor={'transparent'}>
           <Icon name="md-arrow-round-back" size={30} color="#FFFFFF"   />
           </TouchableHighlight>
           </View>
          </Image>
         </View>
            <View style={{flex:0.6,width:width/1.55, alignSelf:'center'}}>

            <KeyboardAvoidingView  behavior="padding" style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>


            <View>
                <Text style={{ fontFamily: 'GothamRounded-Bold', fontSize:16 }}>Forgot Password? </Text>
            </View>

              <View style={{flexDirection: 'row',paddingTop: 15}}>
                  <Text style={{ fontFamily: 'GothamRounded-Book'}}>We just need your registered </Text>
                  <Text style={{ fontFamily: 'GothamRounded-Book', fontWeight: 'bold'}}>Mobile No. </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                  <Text style={{ fontFamily: 'GothamRounded-Book'}}>or </Text>
                  <Text style={{ fontFamily: 'GothamRounded-Book', fontWeight: 'bold'}}>Email Id </Text>
                  <Text style={{ fontFamily: 'GothamRounded-Book'}}>to send your password </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                  <Text style={{ fontFamily: 'GothamRounded-Book'}}>reset instruction. </Text>
              </View>

              <View>
                  <InputWithIcon
                    iconName={ require('./Images/mail/mail.png')}
                    value={email}
                    secureTextEntry={false}
                    placeholder="Email or Mobile No."
                    keyboardType="default"
                    placeholderTextColor="#333333"
                   onChangeText={(text)=>forgotUpdate({prop:'email',value:text})}
                  />
              </View>



              <View style={{height:50}}/>
            </KeyboardAvoidingView>
            <View style={{flex:2, alignSelf: 'stretch'}}>
              <Button
                buttonStyle={{height: 30, backgroundColor: '#FF57A5', borderRadius: 5, marginTop: 10,  shadowOpacity: 1.0, shadowOffset:{
                    width: 1,
                    height: 1,
                },}}
                textStyle={{textAlign: 'center', fontFamily: 'GothamRounded-Book'}}
                title={`Send`}
                onPress={()=>this.handleSend(email)}
              />
            </View>
            </View>
       </View>



    );
  }
}
const mapStateToProps=({Forgot})=>{
  const {email,loading,success}=Forgot;
return{
    email,
    loading,
    success

}

}

export default connect(mapStateToProps,{forgotUpdate,forgotPassword})(ForgotPassword);
