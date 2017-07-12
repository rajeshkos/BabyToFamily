export const FORGOT_UPDATE='FORGOT_UPDATE';
export const FORGOT_CHECK='FORGOT_CHECK';
export const FORGOT_SUCCESSFULL='FORGOT_SUCCESSFULL';
export const FORGOT_FAIL='FORGOT_FAIL';


export const forgotUpdate=({prop,value})=>{
return {
        type:FORGOT_UPDATE,
        payload:{prop,value}
  }

}

export const forgotPassword=({email})=>(dispatch)=>{


fetch('http://172.24.3.104:3000/forgot',{method:'POST',
   headers: { 'Accept': 'application/json',  'Content-Type': 'application/json',
 },body:JSON.stringify({email:'iamshimil@gmail.com'})})
  .then((response) => response.json())
   .then((responseJson) =>{
      console.log(responseJson,"ggggg");
  })
  .catch((error) => {
      console.log(error);
    });

}
