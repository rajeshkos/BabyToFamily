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
import {loginUpdate,loginChecking} from './LoginAction';
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

 class Login extends Component {

  render() {
    console.log("hello",this.props.loading,this.props.auth);
    const {loginUpdate,loginChecking,email,password,loading,auth}=this.props;

    return (
        <View style={{flex:1, flexDirection: 'column'}}>
        <StatusBar hidden={true} />

         <View style={styles.container}>
          <Image resizeMode="stretch" style={styles.canvas} source={require('./Images/Logo/logo.png')} />
         </View>
            <View style={{flex:0.6,width:width/1.55, alignSelf:'center'}}>

            <KeyboardAvoidingView  behavior="padding" style={{flex:1,backgroundColor:'#FFFFFF',alignItems:'center',justifyContent:'center'}}>


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
                    onChangeText={(text)=>loginUpdate({prop:'email',value:text})}
                  />
              </View>


            <View style={{flex:0.1, alignSelf: 'stretch'}}>
              <Button
                buttonStyle={{height: 30, backgroundColor: '#FF57A5', borderRadius: 5, marginTop: 10,  shadowOpacity: 1.0, shadowOffset:{
                    width: 1,
                    height: 1,
                },}}
                textStyle={{textAlign: 'center', fontFamily: 'GothamRounded-Book'}}
                title={`Send`}
              />
            </View>
            </KeyboardAvoidingView>

            </View>
       </View>



    );
  }
}
const mapStateToProps=({Login})=>{
  const {email,password,loading,auth}=Login;
  return{
      email,
      password,
      loading,
      auth

}
}
export default connect(mapStateToProps,{loginUpdate,loginChecking})(Login)
