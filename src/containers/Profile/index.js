import React,{Component} from 'react'
import {Text,View} from 'react-native'
import Tabs from '../Tabs'
export default class Profile extends Component{
 render(){
   return(
        <Tabs {...this.props}>
        <View style={{height:50,width:null,backgroundColor:'red'}}/>
     <View style={{alignItems:'center',justifyContent:'center'}}>
     <Text style={{color:'red'}}>Profile</Text>
     </View>
     </Tabs>
   )
 }

}
