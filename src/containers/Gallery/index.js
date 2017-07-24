import React,{Component} from 'react'
import {Text,View} from 'react-native'
import Tabs from '../Tabs';
import Header from './Header';
export default class Gallery extends Component{
 render(){
   return(
       <Tabs {...this.props}>
       <Header name="Gallery"/>
     <View style={{alignItems:'center',justifyContent:'center'}}>
     <Text>Gallery</Text>
     </View>
     </Tabs>
   )
 }

}
