import {ADDBABY_UPDATE} from './AddBabyActions';
import {ADDBABY_ADDED,ADDBABY_FAILED,ADD_BABY_CHECKING} from './AddBabySaga'
import moment from 'moment'

const INITIAL_STATE={name:'',gender:'boy',name:'',date:moment().format('YYYY-MM-DD'),location:'',relation:'',loading:false,sucecsss:false,image:false,error:''}
export default (state=INITIAL_STATE,action)=>{
 switch (action.type) {
   case ADD_BABY_CHECKING:
     return { ...state,loading:true}
   case ADDBABY_UPDATE:
        return { ...state, [action.payload.prop]:action.payload.value}
  case ADDBABY_ADDED:
        return {...INITIAL_STATE,loading:false,sucecsss:true,image:false}
  case  ADDBABY_FAILED :
      return {INITIAL_STATE,loading:false,sucecsss:false,error:action.payload,image:false}
   default:
       return state;
    }
}
