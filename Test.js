
import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import {View} from 'react-native';
export default class Example extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }

  render(){
    return (
     <View style={{flex:1,backgroundColor:'red'}}/>
    )
  }
}
