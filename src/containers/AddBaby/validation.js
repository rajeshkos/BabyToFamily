export const validation=(Addbaby)=>{
  console.log(Addbaby,"affff");
  let err;
const {name,gender,date,location,relation,image}=Addbaby;
if(!name){
  err="Please Add your Baby name"
}else if(!location){
  err="Please Enter Location"
}else if(!relation){
    err="Please Add a relation"

}else if(!image){
   err="Please Select Profile Picture"
}else{
  err="Successfully Registerd"

}
 return err;

}
