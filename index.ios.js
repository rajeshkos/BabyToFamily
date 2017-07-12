import React,{Component} from 'react';
import {AppRegistry,View,Text} from 'react-native';
import AddBaby from './src/containers/AddBaby'
import App from './src/App'
import Example from './Test'
import PlaceAutoComplete from 'app/components/PlaceAutoComplete'
export default class Baby extends Component{

  render(){
    return(
        <View style={{flex:1}}>
           <PlaceAutoComplete/>
        </View>
      )
  }
}
AppRegistry.registerComponent('Baby', () => App);
