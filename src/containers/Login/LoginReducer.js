import {LOGIN_UPDATE,LOGIN_CHECK,LOGIN_SUCCESSFULL,LOGIN_FAIL,LOG_OUT,NO_BABY,FINGER_PRINT_ACTIVATE} from './LoginAction';
import {REHYDRATE} from 'redux-persist/constants'
const INITIAL_STATE={email:'',password:'',loading:false,auth:false,user:{},baby:true,fingerprint:false}
export default (state=INITIAL_STATE,action)=>{
 switch (action.type) {
   case REHYDRATE:
     return  state
   case LOGIN_UPDATE:
        return { ...state, [action.payload.prop]:action.payload.value}
   case LOGIN_CHECK:
     return {...state,loading:true}
   case LOGIN_SUCCESSFULL:
  // console.log(action.payload,"action.payload");
    return {...INITIAL_STATE,loading:false,auth:true}
    case NO_BABY:
     return {...INITIAL_STATE,loading:false,auth:true,baby:false}
  case FINGER_PRINT_ACTIVATE:
     return {...state,fingerprint:true}
  case LOGIN_FAIL:
  case LOG_OUT:
    return INITIAL_STATE;
   default:
       return state;
 }



}
