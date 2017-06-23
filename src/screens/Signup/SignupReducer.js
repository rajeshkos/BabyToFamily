import {SIGNUP_UPDATE,SIGNUP_CHECK,SIGNUP_SUCCESSFULL,SIGNUP_FAIL} from './SignupActions';

const INITIAL_STATE={email:'',password:'',name:'',mobile:'',loading:false,sucecsss:false,cpassword:'',data:{}}
export default (state=INITIAL_STATE,action)=>{
 switch (action.type) {
   case SIGNUP_UPDATE:
        return { ...state, [action.payload.prop]:action.payload.value}
   case SIGNUP_CHECK:
     return {...state,loading:true}
   case SIGNUP_SUCCESSFULL:
    return {...INITIAL_STATE,loading:false,sucecsss:true,data:action.payload}
  case SIGNUP_FAIL:
   return INITIAL_STATE;
   default:
       return state;
 }



}
