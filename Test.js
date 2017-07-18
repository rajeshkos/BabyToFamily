import React, { PureComponent } from 'react';
import { View, StyleSheet,ScrollView,Text   } from 'react-native';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';


const Data=['map','video','pol','klio','mam']

export default React.createClass({
  render() {
    return(
      <ScrollableTabView
      style={{marginTop: 20, }}
      renderTabBar={() => <DefaultTabBar />}
    >
      {Data.map((index,key)=>(<Text key={index} tabLabel={index}>{key}</Text>))}
    </ScrollableTabView>
    )


  }
});
