import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from './Header';

import Tabs from '../Tabs'
import ActionMenu from 'app/components/ActionMenu'


export default class Dashboard extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
    <Tabs {...this.props}>
     <Header
     menuPress={() => navigate('DrawerOpen')}
     bellPress={() => console.log('Bell')}
     settingPress={() => navigate('Settings')}
     name="Annie Smith"
     />
     <View
      style={styles.container}
     >
       <Text style={{fontSize:20,color:'red',textAlign:'center'}}>Dashboard</Text>

       <ActionMenu
          PostPressed={()=>alert('Post')}
          VideoPressed={()=>alert('Video')}
          ImagePressed={()=>alert('Me')}
       />

      </View>
      </Tabs>
    );
  }
}
const styles = StyleSheet.create({
 container: {
   backgroundColor: '#ffff',
   flex: 1
 }

})
