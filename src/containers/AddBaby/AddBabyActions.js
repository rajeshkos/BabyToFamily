export const ADDBABY_UPDATE='ADDBABY_UPDATE';
export const  UPLOADBUTTON_CLICKED='UPLOADBUTTON_CLICKED';




export const AddBabyUpdate=({prop,value})=>{
  return {
    type:ADDBABY_UPDATE,
    payload:{prop,value}
  }
}
export const AddBabyUpload=(formData)=>({type:UPLOADBUTTON_CLICKED,payload:formData})
