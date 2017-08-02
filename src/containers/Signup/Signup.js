

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
  AsyncStorage,
  NetInfo

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
import { NetworkInfo } from 'react-native-network-info';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {SignupUpdate,SignupChecking,Signupfail,passwordDontmatch} from './SignupActions'
 class Signup extends Component {

   constructor(props){
     super(props);
   this.state = {
     user: undefined,
     cca2:'',
     callingCode:1,
     Mobilenumber:'',
     connectionInfo: null,
     ip:null


   };
}
   static navigationOptions= {
           header: null
       }
componentWillMount(){
  this.setState({cca2:'US'});

//   NetworkInfo.getIPAddress(ip => {
//   fetch('https://ipinfo.io/',method:'POST',{})
// });
    //fetch('https://geoip.maxmind.com/geoip/v2.1/country/',{},{'192'})

    //const infoUrl = 'http://ipinfo.io/192.64.0.138';
    //console.log(this.state.ip);
    /*
    fetch('https://ipinfo.io', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
          })
    .then((response)=>response.json())
    .then((responseJson) =>console.log(responseJson.country))
*/

    NetInfo.addEventListener(
         'change',
         this._handleConnectionInfoChange
     );
     NetInfo.fetch().done(
         (connectionInfo) => { this.setState({connectionInfo}) }
     );


  //console.log(DeviceInfo.getDeviceCountry(),"hh");
}
   componentDidMount() {

         Linking.addEventListener('url', this.handleOpenURL);
         Linking.getInitialURL().then((url) => {
           if (url) {
             this.handleOpenURL({ url });
           }
         });

         //this.setState({
          //   pickerData: this.refs.phone.getPickerData()

         //})




       }

 _handleConnectionInfoChange=(connectionInfo)=>{
          this.setState({
            connectionInfo
          });
        }


  componentWillUnmount() {
         // Remove event listener
         Linking.removeEventListener('url', this.handleOpenURL);
         NetInfo.removeEventListener(
             'change',
             this._handleConnectionInfoChange
         );

       }


      // onPressFlag=()=>{
        //   this.refs.countryPicker.openModal()
       //}

      /* selectCountry=(country)=>{
           this.refs.phone.selectCountry(country.cca2.toLowerCase())
           this.setState({cca2: country.cca2})
           this.setState({callingCode:country.callingCode})

       }
*/

 handleOpenURL = ({ url }) => {
      const {navigate}=this.props.navigation;
      //   console.log(url,"url");
         // Extract stringified user string out of the URL
         const [, user_string] = url.match(/user=([^#]+)/);
         this.setState({
           // Decode the user string and parse it into JSON
           user: JSON.parse(decodeURI(user_string))
         });
        // console.log("yul",this.state.user);
         if (Platform.OS === 'ios') {
           SafariView.dismiss();
           if(this.state.user){
             navigate('Login')
           }
         }
       }


loginWithFacebook = () => this.openURL('http://52.39.212.226:4089/auth/facebook');

loginWithInstagram = () => this.openURL('http://52.39.212.226:4089/auth/instagram');


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
setPhoneNumber=(text)=>{

     //this.setState({Mobilenumber:text});

}
setFocus(event, heightUp){
  //this.refs.scrollView.scrollTo({y: height-heightUp, animated: true});
}


getCountry=()=>{
if(Platform.OS==='ios'){
  return(
          <View style={styles.containerPhone }>
          <View style={styles.flagContainer}>
          <View style={{padding: 15}}></View>
              <PhoneInput
                  ref='phone'
                  onPressFlag={this.onPressFlag}
                  onChangePhoneNumber={(value)=> this.setState({callingCode:value})}
              />
              <CountryPicker
                  ref='countryPicker'
                  onChange={(value)=> this.selectCountry(value)}
                  translation='eng'
                  cca2={this.state.cca2}
                  styles={{backgroundColor:'transparent'}}
              >
                <View ></View>
              </CountryPicker>
          </View>
          </View>)
}else{
return(
          <View style={{alignSelf:'center',justifyContent:'center', width:180}}>
               <PhoneInput
                   ref='phone'
                   onPressFlag={this.onPressFlag}
                   style={{position:'absolute',top:10,left:75}}
                   textStyle={{color: 'black'}}
                   onChangePhoneNumber={(value)=> {this.setState({callingCode:value})}}
               />

               <CountryPicker
                   ref='countryPicker'
                   onChange={(value)=> this.selectCountry(value)}
                   translation='eng'
                   cca2={this.state.cca2}
                   styles={{backgroundColor:'transparent'}}
               >
               </CountryPicker>

               </View>
           )
}

 }

onFocus=(event)=>{
  const {callingCode,Mobilenumber}=this.state;
  const {SignupUpdate}=this.props;
     SignupUpdate({prop:'mobile',value:callingCode+Mobilenumber})
      // this.setFocus(event, (height-50));
}
signUp=(props)=>{
    const {callingCode,Mobilenumber,connectionInfo}=this.state;
//this.props.
//  console.log(name,email,mobile,password,cpassword);
const {name,email,mobile,password,cpassword,navigation,loading}=props;
let role='user';
  // console.log("mobile",this.state.callingCode+this.state.Mobilenumber);
  if(connectionInfo!=='NONE'&&connectionInfo!=='none'){
        if(!name){
         alert('Please enter your Name');}
          else if (!email) {
              alert('Please enter your Email ID')
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
              alert( 'Invalid Email ID');
           } else if(!password){
             alert('Please enter your Password')

           }else{
//console.log(name,email,mobile,password,role);
            this.props.SignupChecking({name,email,mobile:'',password,role,navigation});
           }
}else{
  alert("Please Check your Network")
}

}
  render() {
    //console.log(DeviceInfo);
  const {callingCode,Mobilenumber}=this.state;
    const {email,password,name,mobile,SignupUpdate,SignupChecking,cpassword,data,loading,navigation}=this.props;
// console.log(loading,'loading');

    return (
        <KeyboardAwareScrollView style={{flex:1, backgroundColor:'#fff'}}  enableOnAndroid={true}>
        <Image  style={{width:width,height:height, }} resizeMode="cover" source={require('./Images/Logo/header.png')}>
  <View style={{paddingTop:height/2-50, flex:1}}>


        <StatusBar hidden={true} />


        {/*
  <View style={{position:'absolute',top:10,left:10,backgroundColor:'transparent',width:40,height:40,alignItems:'center',justifyContent:'center'}}>
        <TouchableHighlight style={{flex:1}} onPress={()=>navigation.goBack(null)} underlayColor={'transparent'}>
        <Icon name="md-arrow-round-back" size={30} color="#FFFFFF"   />
        </TouchableHighlight>

       </View>
*/}


          {/*this.getCountry()*/}


            <View style={styles.componentContainer}>


          <View style={styles.componentSubContainer}>

            <View style={styles.halfFlex}>
                <InputWithIcon
                  iconName={ require('./Images/Username/user_name.png')}
                  value={name}
                  placeholder="Name"
                  maxLength={20}
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
                    maxLength={64}
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="default"
                    placeholderTextColor="#333333"
                    onChangeText={(text)=>SignupUpdate({prop:'email',value:text})}
                  />
              </View>

            {/*  <View style={[styles.halfFlex,{flexDirection:'row',marginHorizontal:15}]}>

                  <InputWithIcon
                    iconName={require('./Images/mobile/mob.png')}
                    value={this.state.Mobilenumber}
                    secureTextEntry={false}
                    placeholder="Mobile No."
                    maxLength={12}
                    keyboardType="numeric"
                    placeholderTextColor="#333333"
                    callingCode={this.state.callingCode}
                    onChangeText={(text)=>this.setPhoneNumber(text)}
                    onBlur={()=>this.onFocus()}
                  />
              </View>
*/}
              <View style={styles.halfFlex}>
                  <InputWithIcon
                    iconName={ require('./Images/Password/password.png')}
                    value={password}
                    placeholder="Choose Password"
                     secureTextEntry
                    keyboardType="default"
                    placeholderTextColor="#333333"
                    onFocus={(event)=>this.onFocus(event)}
                   onChangeText={(text)=>SignupUpdate({prop:'password',value:text})}
                  />
              </View>
              {loading?
                        <View style={{position:'absolute',top:100}}>
                            <Loading/>
                          </View>
                              :
                                null
                          }

            { /* <View style={styles.halfFlex}>
                  <InputWithIcon
                    iconName={ require('./Images/Password/password.png')}
                    value={ cpassword }
                    placeholder="Confirm Password"
                    secureTextEntry
                     keyboardType="default"
                    placeholderTextColor="#333333"
                    onChangeText={(text)=>SignupUpdate({prop:'cpassword',value:text})}
                    onBlur={(event) => {
                      this.setFocus(event, height);
                      }}
                      onFocus={(event) => {
                        this.setFocus(event, (height-50));
                        }}
                  />
              </View>

*/}
            <View style={{flex:1, alignSelf: 'stretch',marginTop:10}}>
              <Button
              disabled={loading}
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
</Image>
</KeyboardAwareScrollView>
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
