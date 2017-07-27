export const SIGNUP_UPDATE='SIGNUP_UPDATE';
export const SIGNUP_CHECK='SIGNUP_CHECK';
export const SIGNUP_SUCCESSFULL='SIGNUP_SUCCESSFULL';
export const SIGNUP_FAIL='SIGNUP_FAIL';
export const EMAIL_ALREDAY='EMAIL_ALREDAY';
export const MOBILE_ALREDAY='MOBILE_ALREDAY';
export const OTP_SESSION_DESTROY='OTP_SESSION_DESTROY';
export const PASSWORD_DONOTMATCH='PASSWORD_DONOTMATCH';
import Api from 'app/lib/api'
import URL from 'app/lib/url'
import {
Alert
} from 'react-native';
export const SignupUpdate=({prop,value})=>{
  return {
    type:SIGNUP_UPDATE,
    payload:{prop,value}
  }
}
export const Signupfail=()=>({type: OTP_SESSION_DESTROY});


export const passwordDontmatch=()=>({type:PASSWORD_DONOTMATCH});

const signupCheck=()=>({type:SIGNUP_CHECK});

const signupSuccess=data=>({type: SIGNUP_SUCCESSFULL,payload:data});

const emailAlready=()=>({type: EMAIL_ALREDAY});

const mobileAlready=()=>({type: MOBILE_ALREDAY});

const signupFail=()=>({type: SIGNUP_FAIL});

export const SignupChecking=({name,email,mobile,password,navigation})=>(dispatch)=>{
dispatch(signupCheck());
emailID = email.toLowerCase();

Api.makeRequest('POST',URL.USER_REGISTER,{},{name,emailID,mobile,password,role:'user'})
  .then((response)=>response.json())
  .then((responseJson) =>{
      console.log("console",responseJson.status);
          switch(responseJson.status){

     case 200:
                dispatch(signupSuccess(responseJson));
                Alert.alert(
                    'Alert',
                    'Registered Successfully',
                    [
                      {text: 'OK', onPress: () => navigation.navigate('AddBaby')},
                    ],
                    { cancelable: false }
                  )
                break;


      case 403:

               alert('Email Already Exist');
               dispatch(emailAlready());
               break;
      case 400:
                alert('Sign UP xailed');
                dispatch(emailAlready());
                break;


  //default:
      //  break;

          }
   })
 .catch((error) => {
        dispatch(signupFail());
        alert('Sign Up Failed');
   });





}
