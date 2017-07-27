import {
  SETTINGUPDATE,
  FINGER_PRINT_ACTIVATE,
  FINGER_PRINT_DEACTIVATE,
  AUTOPLAYACTIVATE,
  AUTOPLAYDEACTIVATE,
  LIKECOMMENTDEACTIVATE,
  LIKECOMMENTACTIVATE,
  NEWUPDATEACTIVE,
  NEWUPDATEDEACTIVE,
  ADDMEMBERDEACTIVATE,
  ADDMEMBERACTIVATE

} from './SettingActions';

const INITIAL_STATE={fingerprint:true,autoplayVideo:false,newUpdate:false,likeComment:false,addMembers:false}
export default (state=INITIAL_STATE,action)=>{
  switch (action.type) {
    case SETTINGUPDATE:
        return { ...state, [action.payload.prop]:action.payload.value}
    case FINGER_PRINT_ACTIVATE:
       return {...state,fingerprint:true}
    case FINGER_PRINT_DEACTIVATE:
       return {...state,fingerprint:false}
    case  AUTOPLAYACTIVATE:
       return {...state,autoplayVideo:true}
    case AUTOPLAYDEACTIVATE:
       return {...state,autoplayVideo:false}
   case LIKECOMMENTACTIVATE:
       return {...state,likeComment:true}
   case  LIKECOMMENTDEACTIVATE:
      return {...state,likeComment:false}
    case   NEWUPDATEACTIVE:
      return {...state,newUpdate:true}
    case   NEWUPDATEDEACTIVE:
      return {...state,newUpdate:false}
    case   ADDMEMBERACTIVATE:
    return {...state,addMembers:true}
   case ADDMEMBERDEACTIVATE:
    return {...state,addMembers:false}
     default:
      return state;
  }



}
