import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from './Header';

import Tabs from '../Tabs'


export default class Dashboard extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
    <Tabs {...this.props}>
     <Header
     menuPress={() => navigate('DrawerOpen')}
     bellPress={() => console.log('Bell')}
     settingPress={() => console.log('setting')}
     name="Annie Smith"
     />
     <View
      style={styles.container}
     >
       <Text style={{fontSize:20,color:'red'}}>Dashboard</Text>
      </View>
      </Tabs>
    );
  }
}
const styles = StyleSheet.create({
 container: {
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: 'blue',
   flex: 1
 }

})
