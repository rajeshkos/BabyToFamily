export const SETTINGUPDATE='SETTINGUPDATE'
export const FINGER_PRINT_ACTIVATE='FINGER_PRINT_ACTIVATE';
export const FINGER_PRINT_DEACTIVATE='FINGER_PRINT_DEACTIVATE';
export const AUTOPLAYACTIVATE='AUTOPLAYACTIVATE';
export const AUTOPLAYDEACTIVATE='AUTOPLAYDEACTIVATE';

export const NEWUPDATEACTIVE='NEWUPDATEACTIVE'
export const NEWUPDATEDEACTIVE='NEWUPDATEDEACTIVE'

export const LIKECOMMENTACTIVATE='LIKECOMMENTACTIVATE'
export const LIKECOMMENTDEACTIVATE='LIKECOMMENTDEACTIVATE'

export const ADDMEMBERACTIVATE='ADDMEMBERACTIVATE'
export const ADDMEMBERDEACTIVATE='ADDMEMBERDEACTIVATE'

export const SettingUpdate=({prop,value})=>{
  return {
    type:SETTINGUPDATE,
    payload:{prop,value}
  }
}

export const fingerPrintActivate=()=>({type:FINGER_PRINT_ACTIVATE})
export const fingerPrintDeactivate=()=>({type:FINGER_PRINT_DEACTIVATE})

export const autoplayActivate=()=>({type:AUTOPLAYACTIVATE})
export const autoplayDecActivate=()=>({type:AUTOPLAYDEACTIVATE})

export const newupdateActivate=()=>({type:NEWUPDATEACTIVE})
export const newupdateDeActivate=()=>({type:NEWUPDATEDEACTIVE})


export const likecommentActivate=()=>({type:LIKECOMMENTACTIVATE})
export const likecommentDeactivate=()=>({type:LIKECOMMENTDEACTIVATE})


export const addmemberActivate=()=>({type:ADDMEMBERACTIVATE})
export const addmemberDeactivate=()=>({type:ADDMEMBERDEACTIVATE})
