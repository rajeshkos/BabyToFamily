import React,{Component} from 'react'
import {Text,View} from 'react-native'
import Tabs from '../Tabs'

export default class Nesting extends Component{
 render(){
   return(
      <Tabs {...this.props}>
     <View style={{alignItems:'center',justifyContent:'center'}}>
     <Text style={{fontSize:20,color:'red'}}>Nesting</Text>
     </View>
     </Tabs>
   )
 }

}
