import {combineReducers} from 'redux';
import LoginReducer from '../screens/Login/LoginReducer';
const reducers=combineReducers({
 Login:LoginReducer
})
export default reducers;
