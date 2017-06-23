export const FORGOT_UPDATE='FORGOT_UPDATE';
export const FORGOT_CHECK='FORGOT_CHECK';
export const FORGOT_SUCCESSFULL='FORGOT_SUCCESSFULL';
export const FORGOT_FAIL='FORGOT_FAIL';


export const forgotUpdate=({prop,value})=>{
  console.log("loo");
return {
        type:FORGOT_UPDATE,
        payload:{prop,value}
  }

}

export const forgotPassword=({email})=>(dispatch)=>{
  console.log("email",email);
 dispatch({type:FORGOT_CHECK});


}
