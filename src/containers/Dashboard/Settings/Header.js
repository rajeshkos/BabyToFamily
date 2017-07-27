import React,{Component} from 'react';
import {View,TouchableHighlight,Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style'
const Header=(props)=>{
const {navigation,title}=props;
return(
  <View style={style.HeaderContent}>
    <TouchableHighlight style={style.HeaderIcon} onPress={()=>navigation.goBack(null)} underlayColor={'transparent'}>
        <Icon  name="ios-arrow-back" size={30} color="#FFFFFF"   />
  </TouchableHighlight>
    <View style={style.HeaderTitleContainer}>
        <Text style={style.HeaderTitle} >{title}</Text>
    </View>
    <View style={{flex:1,alignItems:'center'}}>

    </View>
</View>
)

}

export default Header;
