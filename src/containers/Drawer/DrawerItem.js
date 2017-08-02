import React,{Component} from 'react';
import {TouchableHighlight,View,Text} from 'react-native';
import FIcon from 'react-native-vector-icons/FontAwesome';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class DrawerItem extends Component{
  constructor(props) {
    super(props);
  }
  renderIcon=( ) =>{
    const {iconColor}=this.props;
    let icon;
    switch (this.props.iconfamily) {
      case 'FontAwesome':
        return <FIcon name={this.props.icon} size={24} color={iconColor} />
        break;
      case 'MaterialIcons':
        return <MIcons name={this.props.icon} size={24} color={iconColor} />
        break;
      case 'Ionicons':
        return <Icons name={this.props.icon} size={24} color={iconColor}/>
      case 'MaterialCommunityIcons':
        return <MCIcons name={this.props.icon} size={24} color={iconColor} />
      default:
        return null;
    }
  }
  render(){
    const { navigate } = this.props.navigation;
    const {onPress,labelStyle}=this.props;

  return(
   <TouchableHighlight style={{flex:1}} onPress={onPress} underlayColor='transparent'>
      <View style={{flex:1,flexDirection:'row'}}>
      <View style={{flex:0.1,alignItems:'flex-start',justifyContent:'center', paddingLeft: 18}}>
          {this.renderIcon()}
      </View>
      <View style={{flex:0.5,alignItems:'flex-start',justifyContent:'center',paddingLeft:2}}>
        <Text style={[{fontWeight:'bold'},labelStyle]}>{this.props.label}</Text>
       </View>
      </View>
    </TouchableHighlight>
   )
  }


}
