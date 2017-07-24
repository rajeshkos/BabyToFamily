export const ADDBABY_UPDATE='ADDBABY_UPDATE';
export const  UPLOADBUTTON_CLICKED='UPLOADBUTTON_CLICKED';
import {ADDBABY_ADDED} from './AddBabySaga'



export const AddBabyUpdate=({prop,value})=>{
  return {
    type:ADDBABY_UPDATE,
    payload:{prop,value}
  }
}
export const AddBabyAdded=()=>({type:ADDBABY_ADDED})
export const AddBabyUpload=(formData)=>({type:UPLOADBUTTON_CLICKED,payload:formData})
