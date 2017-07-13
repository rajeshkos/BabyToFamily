import {SIGNUP_UPDATE,SIGNUP_CHECK,SIGNUP_SUCCESSFULL,SIGNUP_FAIL,EMAIL_ALREDAY,MOBILE_ALREDAY,OTP_SESSION_DESTROY,PASSWORD_DONOTMATCH} from './SignupActions';

const INITIAL_STATE={email:'',password:'',name:'',mobile:'',loading:false,sucecsss:false,cpassword:'',data:{}}
export default (state=INITIAL_STATE,action)=>{
 switch (action.type) {
   case SIGNUP_UPDATE:
        return { ...state, [action.payload.prop]:action.payload.value}
   case SIGNUP_CHECK:
     return {...state,loading:true}
   case SIGNUP_SUCCESSFULL:
    return {...INITIAL_STATE,loading:false,sucecsss:true,data:action.payload,mobile:state.mobile}
    case EMAIL_ALREDAY:
     return { ...state,email:'',password:'',cpassword:'',mobile:''}
    case MOBILE_ALREDAY:
       return { ...state,mobile:'',password:'',cpassword:'',}
    case PASSWORD_DONOTMATCH:
       return {...state,password:'',cpassword:''}
  case SIGNUP_FAIL:
   return INITIAL_STATE;
case OTP_SESSION_DESTROY:
      return INITIAL_STATE;
   default:
       return state;
 }



}
