import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Tabs from '../Tabs';
import Header from './Header';
import ActionMenu from 'app/components/ActionMenu'
export default class Community extends Component {
  render() {
  return (
      <Tabs {...this.props}>
      <Header
      name="Community"
      />
       <View style={{flex:1 }}>
     <Text style={{textAlign:'center'}}>Community</Text>

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
