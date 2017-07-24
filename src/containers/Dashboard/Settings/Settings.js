import React,{Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements'

export default class Settings extends Component{
  constructor(props){
    super(props);
    this.state={
      fingerPrint:false
    }
  }

  render(){
    const {navigation}=this.props;
        return(
          <View style={{flex:1,backgroundColor:'white'}}>
          <View style={{backgroundColor:'red',height:50,justifyContent:'center'}}>
            <TouchableHighlight style={{width:50,height:50,padding:10}} onPress={()=>navigation.goBack(null)} underlayColor={'transparent'}>
                <Icon name="md-arrow-round-back" size={30} color="#FFFFFF"   />
          </TouchableHighlight>
          <View style={{flex:3,alignItems:'center',justifyContent:'center'}}>
              <Text >Add Baby</Text>
          </View>
          <View style={{flex:1,alignItems:'center'}}>
          <TouchableHighlight onPress={()=>this.setState({fingerPrint:!this.state.fingerPrint})}>
              <Text>FingerPrint Activate {this.state.fingerPrint}</Text>
              </TouchableHighlight>
          </View>
    </View>
          </View>
        )
  }
}
