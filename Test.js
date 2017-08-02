import React,{Component} from 'react';
import {View} from 'react-native'
import { Player } from 'react-native-audio-streaming';
export default class Test extends Component{
  render(){
    return(
      <View style={{backgroundColor:'red',flex:1}}>
       <Player url={"http://web.ist.utl.pt/antonio.afonso/www.aadsm.net/libraries/id3/music/02_Viandanze.m4a"} />
       </View>
    )
  }
}
