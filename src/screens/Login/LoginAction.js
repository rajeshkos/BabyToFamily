
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


export  const loginChecking=({email,password})=>(dispatch)=>{

    console.log(email,password,"foro");
    dispatch({type:LOGIN_CHECK});
fetch('http://172.24.3.104:3000/login',{method:"POST",
     headers: { 'Accept': 'application/json',  'Content-Type': 'application/json',
   },body:JSON.stringify({email:email,password:password})})
    .then((response) => response.json())
     .then((responseJson) =>{


      dispatch({type: LOGIN_SUCCESSFULL,payload:responseJson});
      if(responseJson.message){
        alert(responseJson.message)
      }else{
        alert('Login Success')
      }


    })
    .catch((error) => {
          dispatch({type: LOGIN_FAIL});
          alert('Login Failed'+error);
      });

}
