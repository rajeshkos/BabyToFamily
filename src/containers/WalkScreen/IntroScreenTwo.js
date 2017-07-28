import React, { Component } from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  Image,
  TouchableHighlight,
  ScrollView,
  Platform,
  AsyncStorage,
  NetInfo,
  style

} from 'react-native';
import { Button } from 'react-native-elements';
const {width,height}=Dimensions.get('window');
var styles = StyleSheet.create({
backgroundImage: {
  flex: 1,
  alignSelf: 'stretch',
  width: null,
  height: null,
},
btnStyle: {
  height: 30,
  width: width/1.7,
  backgroundColor: '#ffda44', borderRadius: 5, marginTop: 10,  shadowOpacity: 1.0, shadowOffset:{
  width: 1,
  height: 1,
  },
},
});
export default class IntroScreenTwo extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <View style={{flex: 1,flexDirection: 'column'}}>
        <View style={{flex: 1}}>
          <Image style={styles.backgroundImage} source={require('./Images/IntroTwo/introtwo.png')}  />
        </View>
      </View>
    )
  }

}
