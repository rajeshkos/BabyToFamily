import {LOGIN_UPDATE,LOGIN_CHECK,LOGIN_SUCCESSFULL,LOGIN_FAIL,LOG_OUT,NO_BABY,FINGER_PRINT_ACTIVATE} from './LoginAction';
import {REHYDRATE} from 'redux-persist/constants'
const INITIAL_STATE={email:'',password:'',loading:false,auth:false,user:'',baby:true}
export default (state=INITIAL_STATE,action)=>{
 switch (action.type) {
   case REHYDRATE:
     return  state
   case LOGIN_UPDATE:
        return { ...state, [action.payload.prop]:action.payload.value}
   case LOGIN_CHECK:
     return {...state,loading:true}
   case LOGIN_SUCCESSFULL:
//console.log("action.payload",action.payload.email);
    return {...INITIAL_STATE,loading:false,auth:true,user:'',email:action.payload.email}
    case NO_BABY:
//console.log("action.payload",action.payload.email);
     return {...INITIAL_STATE,loading:false,auth:true,baby:false,user:'',email:action.payload.email}
  case FINGER_PRINT_ACTIVATE:
     return {...state,fingerprint:true}
  case LOGIN_FAIL:
    return INITIAL_STATE;
  case LOG_OUT:
    return {...INITIAL_STATE,user:state.user,baby:state.baby};
   default:
       return state;
 }

}
