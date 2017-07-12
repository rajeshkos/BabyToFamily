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
  Image,
  TouchableHighlight,
  ScrollView,
  Platform,
  NetInfo,
  AsyncStorage,
} from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import {connect} from 'react-redux';
import InputWithIcon  from '../../components/InputWithIcon'
import ProgressBar from '../../components/ProgressBar'
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
const {width,height}=Dimensions.get('window');
import {Actions } from 'react-native-router-flux';
import {SignupUpdate,SignupChecking} from './SignupActions'

 class SignUp extends Component {

  constructor(props) {
  super(props);
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


signUp=(props)=>{
const {name,email,mobile,password,cpassword}=props;
NetInfo.isConnected.fetch().then(isConnected => {
  if(isConnected) {

          if (!email) {
              alert('Please enter your Email ID')
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
              alert( 'Invalid Email ID');
            }else if(!name){
             alert('Please enter your Name');
           }else if (!mobile) {
              alert(' Please enter your Mobile Number')
           }else if(isNaN(Number(mobile))){
             alert('Mobile must be number')
           }else if(!password){
             alert('Please enter your Password')

           }else if(!cpassword){

             alert('Please enter your Confirm Password')

           }else if(password!==cpassword){
             alert('Both Password must be same')
           }else{
             AsyncStorage.setItem("accessToken", mobile);
            this.props.SignupChecking({name,email,mobile,password});
           }
         }
         else {
           alert('Please check your internet connectivity and try again')
         }
         });

}
  render() {

    const {email,password,name,mobile,SignupUpdate,SignupChecking,cpassword,data,loading}=this.props;
    return (
      <ScrollView  ref="scrollView" contentContainerStyle={{flex:1,  justifyContent: 'center'}}>
        <View style={{flex:1, flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
        <StatusBar hidden={true} />
         <View style={styles.container}>
          <Image resizeMode="stretch" style={styles.canvas} source={require('./Images/Logo/logo.png')} >
           <View style={{position:'absolute',top:10,left:2,backgroundColor:'transparent',width:40,height:40,alignItems:'center',justifyContent:'center'}}>
            <TouchableHighlight style={{flex:1}} onPress={()=>Actions.pop()} underlayColor={'transparent'}>
            <Icon name="md-arrow-round-back" size={30} color="#FFFFFF"   />
            </TouchableHighlight>
           </View>
          </Image>
         </View>
            <View style={styles.componentContainer}>

          <View style={styles.componentSubContainer}>

            <View style={styles.halfFlex}>
                <InputWithIcon
                  iconName={ require('./Images/Username/user_name.png')}
                  value={name}
                  placeholder="Name"
                  maxLength={15}
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
                    maxLength={64}
                    keyboardType="default"
                    placeholderTextColor="#333333"
                    onChangeText={(text)=>SignupUpdate({prop:'email',value:text})}
                  />
              </View>

              <View style={styles.halfFlex}>
                  <InputWithIcon
                    iconName={ require('./Images/mobile/mob.png')}
                    value={mobile}
                    maxLength={15}
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
                    maxLength={10}
                    keyboardType="default"
                    placeholderTextColor="#333333"
                   onChangeText={(text)=>SignupUpdate({prop:'password',value:text})}
                  />
              </View>

              <View style={styles.halfFlex}>
                  <InputWithIcon
                    iconName={ require('./Images/Password/password.png')}
                    value={cpassword }
                    placeholder="Confirm Password"
                    maxLength={10}
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
            <View style={{flex:1, alignSelf: 'stretch'}}>
              <Button
                buttonStyle={styles.btnStyle}
                textStyle={{textAlign: 'center', ...Platform.select({
                  ios: {
                    fontFamily: 'GothamRounded-Bold',
                  },
                  android: {
                    fontFamily: 'gotham_rounded_bold',
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
                 <TouchableHighlight underlayColor={'transparent'} onPress={this._onPressButton}>
                     <Image
                       source={require('./Images/Facebook/facebook.png')}
                     />
                   </TouchableHighlight>
                   </View>
                   <View style={styles.instaContainer}>
                <TouchableHighlight underlayColor={'transparent'} onPress={this._onPressButton}>
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
            </View>
       </View>
</ScrollView>


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
