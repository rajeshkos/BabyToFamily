import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Dimensions,Image
} from 'react-native';
import {connect} from 'react-redux';
const { width }= Dimensions.get('window');
import Tabs from './Tabs'
 class Profile extends Component {

  static navigationOptions = {
    // Customize header background color to make it look cleaner
    headerStyle: {
      backgroundColor: '#FFF',
    },
  };

  render() {
    // Pull navigate out of this.props.navigation
    // and params out of this.props.navigation.state
    const { navigate } = this.props.navigation;
    return (

       <Tabs {...this.props} >
       <View style={{height:60,backgroundColor:'yellow',width:width,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:20,color:'black'}} onPress={()=>navigate('Profile')}> goback</Text>
       </View>
       <View style={styles.container}>
        <Text style={styles.header}>
          This is s profile
        </Text>
        <Button
          onPress={() => navigate('Modal')}
          title="Open Modal"
        />
        </View>
   </Tabs>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    marginVertical: 20,
  },
});
const mapStateToProps=({Login})=> {
  const {email,password,loading,auth,user}=Login;
  return {
      email,
      password,
      loading,
      auth,
      user
    }
}
export default connect(mapStateToProps,null)(Profile);
