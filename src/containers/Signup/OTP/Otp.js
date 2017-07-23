
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
import styles from './style'
import { Button, SocialIcon } from 'react-native-elements';
import {connect} from 'react-redux';
import InputWithIcon  from 'app/components/InputWithIcon'
import Icon from 'react-native-vector-icons/Ionicons';
import {Signupfail} from '../SignupActions'
import Loading from 'app/components/Loading';
import {OtpUpdate,OtpChecking,OtpResend,session_start,session_destroy} from './OtpActions';

//import styles from './style';


const {width,height}=Dimensions.get('window');

 class Otp extends Component {


  static navigationOptions= {
                 header: null
             }

   constructor(props){
     super(props);
     this.state={
        connectionInfo: null,
     }
   }


   setFocus(event, heightUp){
     InteractionManager.runAfterInteractions(() => {
     this.refs.scrollView.scrollTo({y: height-heightUp, animated: true});
   });
   }

componentWillMount(){
  this.props.session_start();
}
componentDidMount(){

  NetInfo.addEventListener(
          'change',
          this._handleConnectionInfoChange
      );
      NetInfo.fetch().done(
          (connectionInfo) => { this.setState({connectionInfo}); }
      );
}


_handleConnectionInfoChange=(connectionInfo)=>{
   this.setState({
     connectionInfo,
   });
 }

 componentWillUnmount() {
     NetInfo.isConnected.removeEventListener(
         'change',
         this._handleConnectivityChange
     );
   }

handleSend=(otp)=>{
   const {mobile} = this.props;
  const {navigate}=this.props.navigation;
  const {connectionInfo}=this.state;
if(connectionInfo!=='none'){
                if(!otp){
                    alert('Please enter OTP');
                  }else if(isNaN(Number(otp))){
                    alert('OTP should be a number');
                  }else if(otp.length!=6){
                    alert('OTP sould be six digit');
                  }else{
                  this.props.session_destroy();
                  this.props.OtpChecking({mobile,otp,navigate})
                  this.props.Signupfail();

                  }
                }else{
                  alert('Please Check Your Network')
                }
         }
  render() {
    const {navigation,otp,loading,sucecsss,OtpUpdate,mobile,OtpResend,session,timeout}=this.props;


    return (



        <ScrollView  ref="scrollView" contentContainerStyle={{flex:1,  justifyContent: 'center'}}>

       <View style={styles.container}>
                 <Image resizeMode="stretch" style={styles.canvas} source={require('./Images/Logo/logo.png')} />
       </View>
        <View style={styles.icon}>
      { /*  <TouchableHighlight style={{flex:1}}  underlayColor={'transparent'} onPress={()=>{navigation.goBack(null)}}>
         <Icon name="md-arrow-round-back" size={30} color="#FFFFFF"   />
         </TouchableHighlight>
         */
       }
         </View>
        <View style={styles.headingMain}>
          <View style={{flex: 1, alignSelf: 'center'}}>
             <View style={styles.subHeadingMain}>
             {loading?
               <View style={{ position:'absolute',top:50 }}>
               <Loading />
              </View>
              :null
             }
                <View style={{alignSelf:'center', flex: 1,
                    justifyContent: 'center', paddingLeft: 10, paddingRight: 10}}>
                    <Text style={styles.headingText}>Enter the 6-digit code sent to you at</Text>
                      <Text style={[styles.headingText,{alignSelf:'center'}]}>{mobile}</Text>
                       <Text style={[styles.suheadingText,{alignSelf:'center'}]}>You OTP Will Expire in 5 Minitues</Text>

                </View>

            </View>

          <View style={styles.inputTextMain}>

            <View style={styles.inputTextSub}>
                  <InputWithIcon
                    iconName={ require('./Images/mail/mail.png')}
                    value={otp}
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
                   onChangeText={(text)=>OtpUpdate({prop:'otp',value:text})}
                  />
              </View>
              <View style={styles.btnMain}>
              <Button
                buttonStyle={styles.btnStyle}
                textStyle={styles.btnTextStyle}
                title={`Confirm`}
                onPress={()=>this.handleSend(otp)}
              />
              <Button
                buttonStyle={styles.btnStyle}
                textStyle={styles.btnTextStyle}
                title={`Resend`}
                onPress={()=>OtpResend({mobile})}
              />
              </View>

              </View>
          </View>
            </View>

            </ScrollView>



    );
  }
}
const mapStateToProps=({Otp,Signup})=>{
const {otp,loading,sucecsss,session,timeout}=Otp;
const {mobile}=Signup;
return{
      otp,
      loading,
      sucecsss,
      mobile,
      session,
      timeout

  }
}



export default connect(mapStateToProps,{Signupfail,OtpUpdate,OtpChecking,OtpResend,session_start,session_destroy})(Otp)
