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
Api.makeRequest('POST',URL.USER_REGISTER,{},{name,email,mobile,password,role:'user'})
  .then((response)=>response.json())
  .then((responseJson) =>{

          switch(responseJson.status){
     case 200:
                dispatch(signupSuccess(responseJson));
                alert('Success! OTP send you mobile number');
                navigation.navigate('OtpScreen');
                break;

      case 403:

               alert('Email Already Exist');
               dispatch(emailAlready());
               break;
      case 400:
                alert('Invalid Mobile Number');
                dispatch(mobileAlready());
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
