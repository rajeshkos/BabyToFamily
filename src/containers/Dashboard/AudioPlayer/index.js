import React,{Component} from 'react';
import {View,TouchableHighlight} from 'react-native'
import { Player } from 'react-native-audio-streaming';
import Icon from 'react-native-vector-icons/Ionicons';
export default class AudioPlayer extends Component{
  render(){
    const {navigation}=this.props
    return(
          <View style={{flex:1}}>
          <View style={  {justifyContent: 'flex-start',backgroundColor: '#939ceb', height: 50,flexDirection:'row',padding:10}}>
            <TouchableHighlight style={{width:50,height:50}} onPress={()=>navigation.goBack(null)} underlayColor={'transparent'}>
                <Icon name="md-arrow-round-back" size={30} color="#FFFFFF"   />
          </TouchableHighlight>
          </View>
       <Player url={"http://web.ist.utl.pt/antonio.afonso/www.aadsm.net/libraries/id3/music/02_Viandanze.m4a"} />
       </View>
    )
  }
}
