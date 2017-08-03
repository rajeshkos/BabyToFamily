export const validation=(Addbaby,connectionInfo,picked)=>{
  //alert(connectionInfo);
  let err;
let {name,gender,date,location,relation,image}=Addbaby;
relation=picked;
if(connectionInfo==='NONE'&&connectionInfo==='none'){
err="Please Check your Network"

}else if(!name){
  err="Please Add your Baby name"
}else if(!location){
  err="Please Enter Location"
}else if(!date){
    err="Please Enter Date of Birth"
}else if(!relation){
    err="Please Add a relation"

}else if(!image){
   err="Please Select Profile Picture"
}else{
  err="Successfully Registerd"

}
 return err;

}
