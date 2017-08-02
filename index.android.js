/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React,{Component} from 'react';
 import {AppRegistry,View,Text} from 'react-native';

 import App from './src/App'
 import Test from './Test'



 export default class Baby extends Component{

   render(){
     return(
         <View style={{flex:1,backgroundColor:'red'}}>

         </View>
       )
   }
 }
 AppRegistry.registerComponent('Baby2Family', () => App);
