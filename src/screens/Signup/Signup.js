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
} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, SocialIcon } from 'react-native-elements';
import {connect} from 'react-redux';
import InputWithIcon  from '../../components/InputWithIcon'
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
const {width,height}=Dimensions.get('window');
import {loginUpdate,loginChecking} from './LoginAction';
//import Hr from 'react-native-hr'

 class Login extends Component {

  render() {
    console.log("hello",this.props.loading,this.props.auth);
    const {loginUpdate,loginChecking,email,password,loading,auth}=this.props;

    return (
        <View style={{flex:1, flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
        <StatusBar hidden={true} />
         <View style={styles.container}>
          <Image resizeMode="stretch" style={styles.canvas} source={require('./Images/Logo/logo.png')} />
         </View>
            <View style={styles.componentContainer}>
            <KeyboardAvoidingView  behavior="padding" style={styles.keyboardStyle}>

          <View style={styles.componentSubContainer}>

            <View style={styles.halfFlex}>
                <InputWithIcon
                  iconName={ require('./Images/Username/user_name.png')}
                  value={email}
                  placeholder="Name"
                  secureTextEntry={false}
                  keyboardType="default"
                  placeholderTextColor="#333333"
                  onChangeText={(text)=>loginUpdate({prop:'email',value:text})}
                />
            </View>

              <View style={styles.halfFlex}>
                  <InputWithIcon
                    iconName={ require('./Images/mail/mail.png')}
                    value={email}
                    secureTextEntry={false}
                    placeholder="Email"
                    keyboardType="default"
                    placeholderTextColor="#333333"
                    onChangeText={(text)=>loginUpdate({prop:'email',value:text})}
                  />
              </View>

              <View style={styles.halfFlex}>
                  <InputWithIcon
                    iconName={ require('./Images/mobile/mob.png')}
                    value={email}
                    secureTextEntry={false}
                    placeholder="Mobile No."
                    keyboardType="numeric"
                    placeholderTextColor="#333333"
                    onChangeText={(text)=>loginUpdate({prop:'email',value:text})}
                  />
              </View>

              <View style={styles.halfFlex}>
                  <InputWithIcon
                    iconName={ require('./Images/Password/password.png')}
                    value={email}
                    placeholder="Password"
                    secureTextEntry={true}
                    keyboardType="default"
                    placeholderTextColor="#333333"
                    onChangeText={(text)=>loginUpdate({prop:'email',value:text})}
                  />
              </View>

              <View style={styles.halfFlex}>
                  <InputWithIcon
                    iconName={ require('./Images/Password/password.png')}
                    value={email}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    keyboardType="default"
                    placeholderTextColor="#333333"
                    onChangeText={(text)=>loginUpdate({prop:'email',value:text})}
                  />
              </View>

            <View style={{ flex:0.3, alignSelf: 'stretch'}}>
              <Button
                buttonStyle={styles.btnStyle}
                textStyle={{textAlign: 'center', ...Platform.select({
                  ios: {
                    fontFamily: 'GothamRounded-Book',
                  },
                  android: {
                    fontFamily: 'gotham_rounded_book',
                  },
                }),
              }}
                title={`Sign Up`}
              />
            </View>

            <View style={styles.orText}>
              <Text style={styles.or}>or</Text>
            </View>


            <View style={styles.socialMediaContainer}>
                 <View style={styles.fbContainer}>
                 <TouchableHighlight onPress={this._onPressButton}>
                     <Image
                       source={require('./Images/Facebook/facebook.png')}
                     />
                   </TouchableHighlight>
                   </View>
                   <View style={styles.instaContainer}>
                <TouchableHighlight onPress={this._onPressButton}>
                       <Image
                         source={require('./Images/Instagram/instagram.png')}
                       />
               </TouchableHighlight>
               </View>
                 </View>


                 <View style={styles.bottomUserContainer}>
                      <View style={styles.userSubContainer}>
                      <Text style={styles.newuser}>Current User?</Text>
                      </View>
                      <View style={styles.registerSubContainer}>
                      <Text style={styles.registeruser}>Login Here</Text>
                      </View>
                    </View>
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
