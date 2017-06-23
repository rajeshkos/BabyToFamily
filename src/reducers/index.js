import {combineReducers} from 'redux';
import LoginReducer from '../screens/Login/LoginReducer';
import SignupReducer from '../screens/Signup/SignupReducer';
import ForgotPassword from '../screens/ForgotPassword/ForgotReducer'
const reducers=combineReducers({
Login:LoginReducer,
Signup:SignupReducer,
Forgot:ForgotPassword
})
export default reducers;
