import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Feedback extends Component{
  render(){
      const {navigation}=this.props;
    return(
      <View style={{flex:1}}>
      <View style={{height:40,backgroundColor:'white'}}>
      <View stlye={{flex:1}}>
      <TouchableOpacity style={{width:40,height:40,alignItems:'center',justifyContent:'center'}} onPress={()=>navigation.goBack(null)}>
      <Text style={{color:'red'}}>back</Text>
      </TouchableOpacity>
      </View>
         <View style={{flex:3}}>
         </View>
          <View style={{flex:1}}>
          </View>
      </View>

      </View>
    )
  }
}
