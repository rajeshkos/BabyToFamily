export const FORGOT_UPDATE='FORGOT_UPDATE';
export const FORGOT_CHECK='FORGOT_CHECK';
export const FORGOT_SUCCESSFULL='FORGOT_SUCCESSFULL';
export const FORGOT_FAIL='FORGOT_FAIL';
import Api from 'app/lib/api'
import URL from 'app/lib/url'

export const forgotUpdate=({prop,value})=>{
//  console.log("loo");
return {
        type:FORGOT_UPDATE,
        payload:{prop,value}
  }

}

export const forgotPassword=({email})=>(dispatch)=>{

 dispatch({type:FORGOT_CHECK});
Api.makeRequest('POST',URL.FORGOT_PASSWORD,{},{email})
 .then((response) => response.json())
 .then((responseJson) =>{

  if(responseJson.status===200){
    dispatch({type:FORGOT_SUCCESSFULL});
    alert('Check your email and reset the password')
  }else{
     alert('Email doesnot exist');
    dispatch({type:FORGOT_FAIL});
  }
})
.catch((error) => {

    dispatch({type:FORGOT_FAIL});
  });


}
