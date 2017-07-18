import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import Tabs from '../Tabs';
import Header from './Header';
import ActionMenu from 'app/components/ActionMenu'
import ScrollTabBar from 'app/components/ScrollTabBar';
const data=['tab1','tab2','tab3','tab5','tab6','tab7','tab8']
export default class Community extends Component {
  renderTabs=()=>{
    return(
    data.map((key,index)=>(

           <View title={key} style={{flex:1,backgroundColor:'green'}} key={index}>
              <Text style={styles.header}>
                {key}
              </Text>
              <ActionMenu
                 PostPressed={()=>alert('Post')}
                 VideoPressed={()=>alert('Video')}
                 ImagePressed={()=>alert('Me')}
              />
            </View>


    ))
  )
  }
  render() {
  return (
      <Tabs {...this.props}>
      <Header
      name="Community"
      />

       <View style={{flex:1}}>

       <ScrollTabBar tabstyle={{backgroundColor:'#939ceb'}}>
         {this.renderTabs()}

        </ScrollTabBar>
      </View>


     </Tabs>
  );
 }


}
const styles = StyleSheet.create({
  // App container
  container: {
    flex: 1,                            // Take up all screen
    backgroundColor:'#939ceb'     // Background color
  },
  // Tab content container
  content: {
    flex: 1,                            // Take up all available space
    justifyContent: 'center',           // Center vertically
    alignItems: 'center',               // Center horizontally
    backgroundColor: '#C2185B',         // Darker background for content area
  },
  // Content header
  header: {
    margin: 10,                         // Add margin
    color: '#FFFFFF',                   // White color
    fontFamily: 'Avenir',               // Change font family
    fontSize: 26,                       // Bigger font size
  },
  // Content text
  text: {
    marginHorizontal: 20,               // Add horizontal margin
    color: 'rgba(255, 255, 255, 0.75)', // Semi-transparent text
    textAlign: 'center',                // Center
    fontFamily: 'Avenir',
    fontSize: 18,
  },
});
