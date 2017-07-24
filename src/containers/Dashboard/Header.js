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
    const { menuPress, bellPress, settingPress, name } = this.props;
    return (

      <View
      style={styles.container}
      >
      <Icon
         name="md-menu"
         size={26}
         color="black"
         style={styles.iconStyle}
         onPress={menuPress}
      />
      <View style={styles.centerContainer}>
        <Text style={styles.fontStyle}>{name}</Text>
      </View>
      <FontIcon
         name="bell"
         size={22}
         color="black"
         style={styles.iconStyle}
         onPress={bellPress}
      />

      <Icon
         name="md-settings"
         size={26}
         color="black"
         style={styles.iconStyle}
         onPress={settingPress}
      />

      </View>
    )
  }

}
const styles= StyleSheet.create({
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
