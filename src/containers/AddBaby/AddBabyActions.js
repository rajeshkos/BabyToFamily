export const ADDBABY_UPDATE='ADDBABY_UPDATE';
import Api from 'app/lib/api'
import URL from 'app/lib/url'
// export const SIGNUP_CHECK=' SIGNUP_CHECK';
// export const SIGNUP_SUCCESSFULL='SIGNUP_SUCCESSFULL';
// export const SIGNUP_FAIL='SIGNUP_FAIL';

export const AddBabyUpdate=({prop,value})=>{
  return {
    type:ADDBABY_UPDATE,
    payload:{prop,value}
  }
}


 export const AddBabyUpload=(formData)=>(dispatch)=>{

   Api.makeImageUpload('POST',URL.ADD_BABY_DETAIL,{},formData)


 }
