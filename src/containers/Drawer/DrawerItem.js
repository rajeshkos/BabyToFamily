import React,{Component} from 'react';
import {TouchableHighlight,View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialIcons';

export default class DrawerItem extends Component{
  constructor(props) {
    super(props);
  }
  renderIcon=( ) =>{
    let icon;
    switch (this.props.iconfamily) {
      case 'FontAwesome':
        return <Icon name={this.props.icon} size={17} color="black" />
        break;
    case 'MaterialIcons':
       return <Icons name={this.props.icon} size={17} color="black" />
       break;
      default:
        return null;
    }
  }
  render(){
    const { navigate } = this.props.navigation;
    const {onPress}=this.props;

  return(
   <TouchableHighlight style={{flex:1}} onPress={onPress}>
      <View style={{flex:1,flexDirection:'row'}}>
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          {this.renderIcon()}
      </View>
      <View style={{flex:3,alignItems:'flex-start',justifyContent:'center',paddingLeft:2}}>
        <Text style={{color:'black',fontWeight:'bold'}}>{this.props.label}</Text>
       </View>
      </View>
    </TouchableHighlight>
   )
  }


}
