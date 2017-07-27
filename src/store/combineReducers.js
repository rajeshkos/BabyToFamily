import {combineReducers} from 'redux';
import LoginReducer from 'app/containers/Login/LoginReducer'
import SignupReducer from 'app/containers/Signup/SignupReducer'
import ForgotPassword from 'app/containers/ForgotPassword/ForgotReducer'
import TabReducer from 'app/containers/Tabs/TabReducer'
import OtpReducer from 'app/containers/Signup/OTP/OtpReducer'
import AddBabyReducer from 'app/containers/AddBaby/AddBabyReducer'
import SettingReducer from 'app/containers/Dashboard/Settings/SettingReducer'
const reducers=combineReducers({
Login:LoginReducer,
Signup:SignupReducer,
Forgot:ForgotPassword,
Tab:TabReducer,
Otp:OtpReducer,
Addbaby:AddBabyReducer,
Settings:SettingReducer

})
export default reducers;
