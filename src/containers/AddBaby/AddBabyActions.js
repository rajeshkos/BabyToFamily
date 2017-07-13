export const ADDBABY_UPDATE='ADDBABY_UPDATE';
// export const SIGNUP_CHECK=' SIGNUP_CHECK';
// export const SIGNUP_SUCCESSFULL='SIGNUP_SUCCESSFULL';
// export const SIGNUP_FAIL='SIGNUP_FAIL';

export const AddBabyUpdate=({prop,value})=>{
  return {
    type:ADDBABY_UPDATE,
    payload:{prop,value}
  }
}

//
// export const SignupChecking=({name,email,mobile,password})=>(dispatch)=>{
//   console.log(name,email,mobile,password);
//    dispatch({type: SIGNUP_CHECK})
//   fetch('http://172.24.3.104:3000/register',{method:'POST',
//        headers: { 'Accept': 'application/json',  'Content-Type': 'application/json',
//      },body:JSON.stringify({name:name,email:email,password:password,mobile:mobile})})
//      .then((response) => response.json())
//       .then((responseJson) =>{
//        dispatch({type: SIGNUP_SUCCESSFULL,payload:responseJson});
//          alert('Sign up Success')
//         console.log("Manik",responseJson.message);
//        })
//      .catch((error) => {
//            dispatch({type: SIGNUP_FAIL});
//            alert('Login Failed'+error);
//        });
//
//
//
// }
