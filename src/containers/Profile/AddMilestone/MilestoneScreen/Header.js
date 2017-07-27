import React,{Component} from 'react';
import {View,TouchableHighlight,Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


const Header=(props)=>{
  const {navigation}=props;
  return(
  <View style={{height:40,backgroundColor:'#939ceb'}}>
  <TouchableHighlight style={{flex:1,width:50,height:50,padding:10}} onPress={()=>navigation.goBack(null)} underlayColor={'transparent'}>
      <Icon  name="ios-arrow-back" size={30} color="#FFFFFF"   />
</TouchableHighlight>
  <View style={{flex:3,alignItems:'center',justifyContent:'center'}}>
      <Text style={{marginBottom:20,fontSize:15,color:'#ffff',fontWeight:'bold'}} >2-3 Months MileStone</Text>
  </View>
  <View style={{flex:1,alignItems:'center'}}>

  </View>
  </View>
)
}
export default Header;
