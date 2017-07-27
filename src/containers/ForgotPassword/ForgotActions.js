export const FORGOT_UPDATE='FORGOT_UPDATE';
export const FORGOT_CHECK='FORGOT_CHECK';
export const FORGOT_SUCCESSFULL='FORGOT_SUCCESSFULL';
export const FORGOT_FAIL='FORGOT_FAIL';
import Api from 'app/lib/api'
import URL from 'app/lib/url'
import {
Alert
} from 'react-native';
export const forgotUpdate=({prop,value})=>{
//  console.log("loo");
return {
        type:FORGOT_UPDATE,
        payload:{prop,value}
  }

}

const forgotCheck=()=>({type:FORGOT_CHECK});
const forgotSuccessfull=()=>({type:FORGOT_SUCCESSFULL});
export const forgotfail=()=>({type:FORGOT_FAIL});

export const forgotPassword=({email,navigate})=>(dispatch)=>{

 dispatch(forgotCheck());
Api.makeRequest('POST',URL.FORGOT_PASSWORD,{},{email})
 .then((response) => response.json())
 .then((responseJson) =>{

  if(responseJson.status===200){
    dispatch(forgotSuccessfull());
    Alert.alert(
        'Alert',
        'Check your email and reset the password',
        [
          {text: 'OK', onPress: () => navigate('Login')},
        ],
        { cancelable: false }
      )

  }else{
     alert('Email doesnot exist');
    dispatch(forgotfail());
  }
})
.catch((error) => {

    dispatch(forgotfail());
  });


}
