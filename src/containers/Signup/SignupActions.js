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
export const Signupfail=()=>{
  return{
    type: OTP_SESSION_DESTROY
  }
}
export const passwordDontmatch=()=>{
  return{
    type:PASSWORD_DONOTMATCH
  }
}

export const SignupChecking=({name,email,mobile,password,navigation})=>(dispatch)=>{

Api.makeRequest('POST',URL.USER_REGISTER,{},{name,email,mobile,password})
  .then((response)=>response.json())
  .then((responseJson) =>{
     console.log(responseJson,"signup");
/*
       if(responseJson.status===200){

         dispatch({type: SIGNUP_SUCCESSFULL,payload:responseJson});
         alert('Success! OTP send you mobile number');
         navigation.navigate('OtpScreen');

              // if(responseJson.status==='Mobile number already exists'){
              //   alert('Mobile Number Already Exist');
              //    dispatch({type: MOBILE_ALREDAY});
              // }else{
              //     alert('Email Already Exist');
              //     dispatch({type: EMAIL_ALREDAY});
              // }

          }else{
             console.log(responseJson.status);
             if(responseJson.status===403){
             alert(responseJson.msg);
              dispatch({type: MOBILE_ALREDAY});
           }

          }
          */
          dispatch({type:SIGNUP_CHECK});
          switch(responseJson.status){
       //case 200:
        case 200:
                dispatch({type: SIGNUP_SUCCESSFULL,payload:responseJson});
                alert('Success! OTP send you mobile number');
                navigation.navigate('OtpScreen');
             break;

    case 403:
             alert('Email Already Exist');
              dispatch({type: EMAIL_ALREDAY});
            break;
   case 400:
            alert('Invalid Mobile Number');
            dispatch({type: MOBILE_ALREDAY});
          break;
  //default:
      //  break;

          }
   })
 .catch((error) => {
        dispatch({type: SIGNUP_FAIL});
        alert('Sign Up Failed');
   });





}
