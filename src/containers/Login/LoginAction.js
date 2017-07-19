
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

Api.makeRequest('POST',URL.LOGIN_URL,{},{email:email,password:password})
   .then((response) => response.json())
   .then((responseJson) =>{

 switch (responseJson.status) {
   case 200:
           dispatch(loginSuccess());
           navigate('Home');
      break;
  case 400:
         alert('Doesnot have A baby')
         break;
  case 401:
        dispatch(socialLoginFail());
        alert('User not Autherized')
        break;
  case 404 :
         dispatch(socialLoginFail());
         alert('Invalid User')

 }

  })
  .catch((error) => {
        dispatch(socialLoginFail());
        alert('Login Failed');
    });



}
