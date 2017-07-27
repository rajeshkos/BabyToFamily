import React,{Component} from 'react';
import {View} from 'react-native'

export const CardItem=(props)=>{
      const {children}=props;
  return(
  <View style={[{flexDirection:'row',padding:5,borderBottomWidth:0.1,borderColor:'red'},props.style]}>
     {children}
  </View>
)

}
