export const OTP_UPDATE='OTP_UPDATE';
export const OTP_CHECK='OTP_CHECK';
export const OTP_SUCCESSFULL='OTP_SUCCESSFULL';
export const OTP_FAIL='OTP_FAIL';
export const OTP_EXPIRE='OTP_EXPIRE';
export const OTP_SESSION_START='OTP_SESSION_START';
import URL from 'app/lib/url'
import Api from 'app/lib/api'


export const session_start=()=>{
  return{
    type:OTP_SESSION_START
  }
}
  export const session_destroy=()=>{
   return{
      type:OTP_EXPIRE
    }
  }

export const OtpUpdate=({prop,value})=>{
  return {
    type:OTP_UPDATE,
    payload:{prop,value}
  }
}

export const OtpChecking=({mobile,otp,navigate})=>(dispatch)=>{

    dispatch({type:OTP_CHECK})
  Api.makeRequest('POST',URL.OTP_CHECKURL,{},{mobile,otp})
    .then((response)=>response.json())
    .then((responseJson) =>{

      if(responseJson.status===200){
      dispatch({type:OTP_SUCCESSFULL})
        alert('OTP Successfull');
        navigate('Login')
      }else{
       alert('OTP Doesnot match');

      }
    })

}

export const OtpResend=({mobile})=>(dispatch)=>{

  Api.makeRequest('POST',URL.OTP_RESEND,{},{mobile})
    .then((response)=>response.json())
    .then((responseJson) =>{

          if(responseJson.status==200){
          dispatch({type:OTP_SESSION_START})
              }else{

           dispatch({type:OTP_EXPIRE})

         }

    })

}
