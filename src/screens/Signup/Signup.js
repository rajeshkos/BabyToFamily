/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {

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
import { Button, SocialIcon } from 'react-native-elements';
import {connect} from 'react-redux';
import InputWithIcon  from '../../components/InputWithIcon'
import ProgressBar from '../../components/ProgressBar'
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
const {width,height}=Dimensions.get('window');
import {Actions } from 'react-native-router-flux';
import {SignupUpdate,SignupChecking} from './SignupActions'
 class SignUp extends Component {
signUp=(props)=>{
//  console.log(name,email,mobile,password,cpassword);
const {name,email,mobile,password,cpassword}=props;
          if (!email) {
              alert('email Required')
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
              alert( 'Invalid email address');
            }else if(!name){
             alert('name Required');
           }else if (!mobile) {
              alert(' Mobile Required')
           }else if(isNaN(Number(mobile))){
             alert('Mobile must be number')
           }else if(!password){
             alert('Password Required')

           }else if(!cpassword){

             alert('Confri password Required')

           }else if(password!==cpassword){
             alert('Password Does not match')
           }else{

            this.props.SignupChecking({name,email,mobile,password});
           }


}
  render() {

    const {email,password,name,mobile,SignupUpdate,SignupChecking,cpassword,data,loading}=this.props;
console.log("data------>",data);
    return (
        <View style={{flex:1, flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
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
            <View style={styles.componentContainer}>
            <KeyboardAvoidingView  behavior="position" style={styles.keyboardStyle}>

          <View style={styles.componentSubContainer}>

            <View style={styles.halfFlex}>
                <InputWithIcon
                  iconName={ require('./Images/Username/user_name.png')}
                  value={name}
                  placeholder="Name"
                  secureTextEntry={false}
                  keyboardType="default"
                  placeholderTextColor="#333333"
                  onChangeText={(text)=>SignupUpdate({prop:'name',value:text})}

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
                    onChangeText={(text)=>SignupUpdate({prop:'email',value:text})}
                  />
              </View>

              <View style={styles.halfFlex}>
                  <InputWithIcon
                    iconName={ require('./Images/mobile/mob.png')}
                    value={mobile}
                    secureTextEntry={false}
                    placeholder="Mobile No."
                    keyboardType="numeric"
                    placeholderTextColor="#333333"
                    onChangeText={(text)=>SignupUpdate({prop:'mobile',value:text})}
                  />
              </View>

              <View style={styles.halfFlex}>
                  <InputWithIcon
                    iconName={ require('./Images/Password/password.png')}
                    value={password}
                    placeholder="Password"
                    secureTextEntry={true}
                    keyboardType="default"
                    placeholderTextColor="#333333"
                   onChangeText={(text)=>SignupUpdate({prop:'password',value:text})}
                  />
              </View>

              <View style={styles.halfFlex}>
                  <InputWithIcon
                    iconName={ require('./Images/Password/password.png')}
                    value={cpassword  }
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    keyboardType="default"
                    placeholderTextColor="#333333"
                    onChangeText={(text)=>SignupUpdate({prop:'cpassword',value:text})}
                  />
              </View>
                 {loading?
              <ProgressBar/>
              :null
                 }
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
                onPress={()=>this.signUp(this.props)}
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
                      <Text style={styles.registeruser} onPress={()=>Actions.Login()}>Login Here</Text>
                      </View>
                    </View>
            </View>
              <View style={{height:100}}/>
            </KeyboardAvoidingView>
            </View>
       </View>



    );
  }
}
const mapStateToProps=({Signup})=>{
const {name,email,password,mobile,cpassword,data,loading}=Signup;
return{
      name,
      email,
      password,
      mobile,
      cpassword,
      data,
      loading


}
}

export default connect(mapStateToProps,{SignupUpdate,SignupChecking}) (SignUp);
