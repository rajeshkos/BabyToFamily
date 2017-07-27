import {OTP_UPDATE,OTP_CHECK,OTP_SUCCESSFULL,OTP_FAIL,OTP_EXPIRE,OTP_SESSION_START,OTP_DOESNOT_MATCH} from './OtpActions';
import {REHYDRATE} from 'redux-persist/constants'
const INITIAL_STATE={otp:'',loading:false,sucecsss:false,session:false,timeout:false}
export default (state=INITIAL_STATE,action)=>{
 switch (action.type) {
  case REHYDRATE:
      return state
    case OTP_SESSION_START:
       return {...INITIAL_STATE,session:true,loading:false}
   case OTP_UPDATE:
        return { ...state, [action.payload.prop]:action.payload.value}
   case OTP_CHECK:
     return {...state,loading:true}
   case OTP_SUCCESSFULL:
    return {...INITIAL_STATE,loading:false,sucecsss:true,session:false}
    case OTP_EXPIRE:
         return INITIAL_STATE
    case OTP_DOESNOT_MATCH:
         return INITIAL_STATE

   default:
       return state;
     }



}
