import React,{PropTypes} from 'react';
import {View,TouchableHighlight,TextInput,Text, Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';

const InputWithIcon =(props)=>{
const {onPress,buttonText,editable=true,iconName, placeholder, placeholderTextColor, keyboardType, secureTextEntry,callingCode}=props;
const  underlayColor='black';
const containerStyle=[styles.container];
if(editable===false){
  containerStyle.push(styles.containerDisabled);
}
return(

  <View style={containerStyle}>
    <View style={styles.mainContainer}>
    <View>
      <TouchableHighlight underlayColor={ underlayColor} style={styles.buttonContainer} onPress={onPress}>
       <Image resizeMode="contain" style={styles.image} source={iconName} />
      </TouchableHighlight>
    </View>
    <View>
      {!callingCode?
      <TextInput placeholder={placeholder} secureTextEntry={secureTextEntry} keyboardType={keyboardType} placeholderTextColor={placeholderTextColor} style={styles.input} underlineColorAndroid='transparent' {...props}/>
      :

      <View style={{width:60,height:18,marginLeft:25,flexDirection:'row'}}>
      <Text style={{bottom:4,fontSize:17,color:'#333333'}}>+{callingCode}</Text>
      <TextInput
      placeholder={callingCode?placeholder:''}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      placeholderTextColor={placeholderTextColor}
      style={[styles.input,{paddingLeft:8}]}
      underlineColorAndroid='transparent'

      {...props}/>
      </View>

    }

    </View>
      </View>
  </View>
)
InputWithIcon.propTypes={
  onPress:PropTypes.func,
  buttonText:PropTypes.string,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  placeholderTextColor: PropTypes.string,
  editable:PropTypes.bool
}

};

export default InputWithIcon;
