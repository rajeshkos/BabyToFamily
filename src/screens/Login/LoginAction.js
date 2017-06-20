
export const LOGIN_UPDATE='LOGIN_UPDATE';
export const LOGIN_CHECK='LOGIN_CHECK';
export const LOGIN_SUCCESSFULL='LOGIN_SUCCESSFULL';
export const LOGIN_FAIL='LOGIN_FAIL';



export const loginUpdate=({prop,value})=>{
return {
        type:LOGIN_UPDATE,
        payload:{prop,value}
  }

}
export const  loginChecking=({email,password})=>(dispatch)=>{
    dispatch({type:LOGIN_CHECK});
    console.log(email,password);
    fetch('http://172.24.5.36:3000/users/login',{method:"POST",body:JSON.stringify({email:email,password:password})})
    .then((response) => response.json())
     .then((responseJson) =>{
        console.log(responseJson);
      dispatch({type: LOGIN_SUCCESSFULL});
      alert('Login Success');
    })
    .catch((error) => {
          dispatch({type: LOGIN_FAIL});
          alert('Login Failed');
      });

}
