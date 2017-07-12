export const SIGNUP_UPDATE='SIGNUP_UPDATE';
export const SIGNUP_CHECK=' SIGNUP_CHECK';
export const SIGNUP_SUCCESSFULL='SIGNUP_SUCCESSFULL';
export const SIGNUP_FAIL='SIGNUP_FAIL';
import { Actions} from 'react-native-router-flux';

export const SignupUpdate=({prop,value})=>{
  return {
    type:SIGNUP_UPDATE,
    payload:{prop,value}
  }
}


export const SignupChecking=({name,email,mobile,password})=>(dispatch)=>{
   dispatch({type: SIGNUP_CHECK})
  fetch('http://172.24.3.104:3000/register',{method:'POST',
       headers: { 'Accept': 'application/json',  'Content-Type': 'application/json',
     },body:JSON.stringify({name:name,email:email,password:password,mobile:mobile,role:'user'})})
     .then((response) => response.json())
      .then((responseJson) =>{
       dispatch({type: SIGNUP_SUCCESSFULL,payload:responseJson});
         Actions.OTP();
        console.log("log",responseJson.message);
       })
     .catch((error) => {
           dispatch({type: SIGNUP_FAIL});
           alert('Login Failed'+error);
       });



}
