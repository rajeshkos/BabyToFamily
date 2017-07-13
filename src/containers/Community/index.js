import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Tabs from '../Tabs';
import Header from './Header';

export default class Community extends Component {
  render() {
  return (
      <Tabs {...this.props}>
      <Header
      name="Community"
      />
       <View style={{ alignItems: 'center', justifyContent: 'center' }}>
     <Text>Community</Text>
     </View>
     </Tabs>
  );
 }


}
