import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView
} from 'react-native';
import HeaderButton from 'app/components/HeaderButton';
const { width }= Dimensions.get('window');
import Tabs from './Tabs'
export default class Modal extends Component {

    state = {
          names: [
             {'name': 'Ben', 'id': 1},
             {'name': 'Susan', 'id': 2},
             {'name': 'Robert', 'id': 3},
             {'name': 'Mary', 'id': 4},
             {'name': 'Daniel', 'id': 5},
             {'name': 'Laura', 'id': 6},
             {'name': 'John', 'id': 7},
             {'name': 'Debra', 'id': 8},
             {'name': 'Aron', 'id': 9},
             {'name': 'Ann', 'id': 10},
             {'name': 'Steve', 'id': 11},
             {'name': 'Olivia', 'id': 12}
          ]
       }

  render() {
    const { goBack,navigate } = this.props.navigation;
    return (
      <Tabs {...this.props}>
      <View style={{height:60,backgroundColor:'yellow',width:width,alignItems:'center',justifyContent:'center'}}>
       <Text style={{fontSize:20,color:'black'}} onPress={()=>navigate('Profile')}> goback</Text>
      </View>
              <View style={{flex:1}}>
                <ScrollView style={{marginTop:5}}>
               {
                  this.state.names.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                        <Text>{item.name}</Text>
                     </View>
                  ))
               }
            </ScrollView>

            </View>
      </Tabs>

    );
  }

}

const styles = StyleSheet.create ({
   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1'
   }
})
