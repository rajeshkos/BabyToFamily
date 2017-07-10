import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
const { width } = Dimensions.get('window');
export default class Header extends Component {
  render() {

    return (

      <View
      style={styles.container}
      >

      <View style={styles.centerContainer}>
        <Text style={styles.fontStyle}>{this.props.name}</Text>
      </View>

      </View>
    )
  }

}
const styles = StyleSheet.create({
iconStyle: {
  padding: 15
},
centerContainer: {
  flex: 1,
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center'
},
container: {
  width,
  height: 50,
  backgroundColor: 'white',
  marginBottom: 2,
  flexDirection: 'row',
  justifyContent: 'center'
},
fontStyle: {
  fontSize: 18,
  fontWeight: 'bold'
}

})
