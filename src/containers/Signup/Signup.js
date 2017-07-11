/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  Image,
  TouchableHighlight,
  ScrollView,
  Platform,
  AsyncStorage
} from 'react-native';
import SafariView from 'react-native-safari-view';
import { Button, SocialIcon } from 'react-native-elements';
import {connect} from 'react-redux';
import InputWithIcon  from 'app/components/InputWithIcon';
import Loading from 'app/components/Loading';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
const {width,height}=Dimensions.get('window');
//import {Actions } from 'react-native-router-flux';
import CountryPicker, {getAllCountries} from 'react-native-country-picker-modal';
import PhoneInput from 'react-native-phone-input'
import DeviceInfo from 'react-native-device-info';

import {SignupUpdate,SignupChecking,Signupfail,passwordDontmatch} from './SignupActions'
 class Signup extends Component {

   constructor(props){
     super(props);
   this.state = {
     user: undefined,
     cca2:'',
     callingCode:'',
     Mobilenumber:''


   };
}
   static navigationOptions= {
           header: null
       }
componentWillMount(){
  this.setState({cca2: DeviceInfo.getDeviceCountry()});
  //console.log(DeviceInfo.getDeviceCountry(),"hh");
}
   componentDidMount() {

         Linking.addEventListener('url', this.handleOpenURL);
         Linking.getInitialURL().then((url) => {
           if (url) {
             this.handleOpenURL({ url });
           }
         });

         this.setState({
             pickerData: this.refs.phone.getPickerData()

         })


       }

  componentWillUnmount() {
         // Remove event listener
         Linking.removeEventListener('url', this.handleOpenURL);

       }


       onPressFlag=()=>{
           this.refs.countryPicker.openModal()
       }

       selectCountry=(country)=>{
           this.refs.phone.selectCountry(country.cca2.toLowerCase())
           this.setState({cca2: country.cca2})
           this.setState({callingCode:country.callingCode})

       }


 handleOpenURL = ({ url }) => {
      const {navigate}=this.props.navigation;
         console.log(url,"url");
         // Extract stringified user string out of the URL
         const [, user_string] = url.match(/user=([^#]+)/);
         this.setState({
           // Decode the user string and parse it into JSON
           user: JSON.parse(decodeURI(user_string))
         });
         console.log("yul",this.state.user);
         if (Platform.OS === 'ios') {
           SafariView.dismiss();
           if(this.state.user){
             navigate('Login')
           }
         }
       }


loginWithFacebook = () => this.openURL('http://172.24.3.104:3000/auth/facebook');

loginWithInstagram = () => this.openURL('http://172.24.3.104:3000/auth/instagram');


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

signUp=(props)=>{

//  console.log(name,email,mobile,password,cpassword);
const {name,email,mobile,password,cpassword,navigation}=props;
   this.props.SignupUpdate({prop:'mobile',value:this.state.Mobilenumber})
         if(!name){
         alert('Please enter your Name');}
          else if (!email) {
              alert('Please enter your Email ID')
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
              alert( 'Invalid Email ID');
           }else if(!this.state.callingCode){
              alert('Select Country Code')

           } else if (!mobile) {
              alert(' Please enter your Mobile Number')
           }else if(isNaN(Number(mobile))){
             alert('Mobile must be number')
           }else if(!password){
             alert('Please enter your Password')

           }else if(!cpassword){

             alert('Please enter your Confirm Password')

           }else if(password!==cpassword){
             alert('Both Password must be same');
             this.props.passwordDontmatch();
           }else{

            this.props.SignupChecking({name,email,mobile,password,navigation});
           }


}
  render() {
    //console.log(DeviceInfo);

    const {email,password,name,mobile,SignupUpdate,SignupChecking,cpassword,data,loading,navigation}=this.props;
 console.log(this.state.callingCode);
    return (
      <ScrollView  ref="scrollView" contentContainerStyle={{flex:1,  justifyContent: 'center'}}>
        <View style={{flex:1, flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
        <StatusBar hidden={true} />
         <View style={styles.container}>
          <Image resizeMode="stretch" style={styles.canvas} source={require('./Images/Logo/logo.png')} >
           <View style={{position:'absolute',top:10,left:10,backgroundColor:'transparent',width:50,height:50,alignItems:'center',justifyContent:'center'}}>
            <TouchableHighlight style={{flex:1}} onPress={()=>navigation.goBack(null)} underlayColor={'transparent'}>
            <Icon name="md-arrow-round-back" size={30} color="#FFFFFF"   />
            </TouchableHighlight>
           </View>
          </Image>
         </View>


                  <View style={styles.containerPhone }>
                    <View style={styles.flagContainer}>
                        <PhoneInput
                            ref='phone'
                            onPressFlag={this.onPressFlag}
                        />
                        <CountryPicker
                            ref='countryPicker'
                            onChange={(value)=> this.selectCountry(value)}
                            translation='eng'
                            cca2={this.state.cca2}
                        >
                          <View ></View>
                        </CountryPicker>
                    </View>
                    </View>






            <View style={styles.componentContainer}>

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
              {loading?
             <Loading/>
             :null
              }
              <View style={styles.halfFlex}>

                  <InputWithIcon
                    iconName={require('./Images/mobile/mob.png')}
                    value={this.state.Mobilenumber}
                    secureTextEntry={false}
                    placeholder="Mobile No."
                    keyboardType="numeric"
                    placeholderTextColor="#333333"
                    callingCode={this.state.callingCode}
                    onChangeText={(text)=>this.setState({Mobilenumber:text})}
                    onSubmitEditing={(event) =>console.log(event,"jiii") }
                  />
              </View>

              <View style={styles.halfFlex}>
                  <InputWithIcon
                    iconName={ require('./Images/Password/password.png')}
                    value={password}
                    placeholder="Password"
                    secureTextEntry
                    keyboardType="default"
                    placeholderTextColor="#333333"
                   onChangeText={(text)=>SignupUpdate({prop:'password',value:text})}
                  />
              </View>

              <View style={styles.halfFlex}>
                  <InputWithIcon
                    iconName={ require('./Images/Password/password.png')}
                    value={ cpassword }
                    placeholder="Confirm Password"
                    secureTextEntry
                    keyboardType="default"
                    placeholderTextColor="#333333"
                    onChangeText={(text)=>SignupUpdate({prop:'cpassword',value:text})}
                  />
              </View>

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


                 <View style={styles.bottomUserContainer}>
                      <View style={styles.userSubContainer}>
                      <Text style={styles.newuser}>Current User?</Text>
                      </View>
                      <View style={styles.registerSubContainer}>
                      <Text style={styles.registeruser} onPress={()=>navigation.goBack(null)}>Login Here</Text>
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
      loading,

  }
}

export default connect(mapStateToProps,{SignupUpdate,SignupChecking,Signupfail,passwordDontmatch})(Signup)
