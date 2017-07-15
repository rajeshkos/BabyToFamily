
export const LOGIN_UPDATE='LOGIN_UPDATE';
export const LOGIN_CHECK='LOGIN_CHECK';
export const LOGIN_SUCCESSFULL='LOGIN_SUCCESSFULL';
export const LOGIN_FAIL='LOGIN_FAIL';
export const LOG_OUT='LOG_OUT';
import Api from 'app/lib/api'
import URL from 'app/lib/url'


export const loginUpdate=({prop,value})=>{
return {
        type:LOGIN_UPDATE,
        payload:{prop,value}
  }

}
export const logout=()=>{
  return{
    type:LOG_OUT
  }
}


export const socialLoginSuccess=()=>{
  return{
    type:LOGIN_SUCCESSFULL
  }
}

export const socialLoginFail=()=>({type:LOGIN_FAIL});

const loginCheck=()=>({type:LOGIN_CHECK});

const loginSuccess=()=>({type: LOGIN_SUCCESSFULL});

export  const loginChecking=({email,password,navigate})=>(dispatch)=>{

dispatch(loginCheck());

Api.makeRequest('POST',URL.LOGIN_URL,{},{email:'testdemo@demo.com',password:'testdemo'})
   .then((response) => response.json())
   .then((responseJson) =>{

    dispatch(loginSuccess());
     navigate('Home');
  })
  .catch((error) => {
        dispatch(socialLoginFail());
        alert('Login Failed');
    });



}
