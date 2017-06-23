import {LOGIN_UPDATE,LOGIN_CHECK,LOGIN_SUCCESSFULL,LOGIN_FAIL} from './LoginAction';

const INITIAL_STATE={email:'',password:'',loading:false,auth:false,user:{}}
export default (state=INITIAL_STATE,action)=>{
 switch (action.type) {
   case LOGIN_UPDATE:
        return { ...state, [action.payload.prop]:action.payload.value}
   case LOGIN_CHECK:
     return {...state,loading:true}
   case LOGIN_SUCCESSFULL:
    return {...INITIAL_STATE,loading:false,auth:true,user:action.payload}
  case LOGIN_FAIL:
   return INITIAL_STATE;
   default:
       return state;
 }



}
