
export const LOGIN_UPDATE='LOGIN_UPDATE';
export const LOGIN_CHECK='LOGIN_CHECK';
export const LOGIN_SUCCESSFULL='LOGIN_SUCCESSFULL';
export const LOGIN_FAIL='LOGIN_FAIL';
export const LOG_OUT='LOG_OUT';
export const NO_BABY='NO_BABY';
export const FINGER_PRINT_ACTIVATE='FINGER_PRINT_ACTIVATE';

import Api from 'app/lib/api'
import URL from 'app/lib/url'
import {
Alert,
AsyncStorage
} from 'react-native';

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

export const fingerPrintActivate=()=>({type:FINGER_PRINT_ACTIVATE})

const noBaby=({responseJson})=>({type:NO_BABY,payload:responseJson})

export const socialLoginSuccess=(responseJson)=>{
  return{
    type:LOGIN_SUCCESSFULL,
    payload:responseJson
  }
}


export const socialLoginFail=()=>({type:LOGIN_FAIL});

const loginCheck=()=>({type:LOGIN_CHECK});

const loginSuccess=({responseJson})=>({type: LOGIN_SUCCESSFULL,payload:responseJson});


export  const  loginChecking=({email,password,navigate})=>(dispatch)=>{

dispatch(loginCheck());

   Api.makeRequest('POST',URL.LOGIN_URL,{},{email:email.toLowerCase(),password:password})
   .then((response) => response.json())
   .then((responseJson) =>{
    //   console.log("responseJson",responseJson);
         switch (responseJson.status) {
           case 200:
                   dispatch(loginSuccess({responseJson}));
                   Alert.alert(
                       'Alert',
                       'Login Successfully',
                       [
                         {text: 'OK', onPress: () => navigate('Dashboard')},
                       ],
                       { cancelable: false }
                     )


              break;
          case 400:

                  dispatch(noBaby({responseJson}))
                  Alert.alert(
                      'Alert',
                      'Doesnot have A baby',
                      [
                        {text: 'OK', onPress: () => navigate('AddBaby')},
                      ],
                      { cancelable: false }
                    )
                  //  await AsyncStorage.setItem('logonce', true)
                  //  dispatch(logonce())
                    //dispatch(loginSuccess())
                 break;
          case 401:
                dispatch(socialLoginFail());
                alert('User not Autherized')
                break;
          case 404 :
                 dispatch(socialLoginFail());
                 alert('Invalid User')
                  break;
          case 502:
                dispatch(socialLoginFail());
                alert('Wrong Credentials');
                break;
         }

          })
  .catch((error) => {
        dispatch(socialLoginFail());
        alert('Check you Internet Connection');
    });



}
