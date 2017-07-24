import {ADDBABY_UPDATE} from './AddBabyActions';
import {ADDBABY_ADDED} from './AddBabySaga'
import moment from 'moment'

const INITIAL_STATE={name:'',gender:'boy',name:'',date:moment().format('YYYY-MM-DD'),location:'',relation:'',loading:false,sucecsss:false,image:false}
export default (state=INITIAL_STATE,action)=>{
 switch (action.type) {
   case ADDBABY_UPDATE:
        return { ...state, [action.payload.prop]:action.payload.value}
  case ADDBABY_ADDED:
      return INITIAL_STATE
   default:
       return state;
    }
}
