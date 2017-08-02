import React, { Component } from 'react';
import { Text, View, StyleSheet,BackHandler  } from 'react-native';
import Header from './Header';
import {connect} from 'react-redux';
import Tabs from '../Tabs'
import ActionMenu from 'app/components/ActionMenu'
import Banner from 'app/components/Banner'


 class Dashboard extends Component {

 //  componentDidMount() {
 //      const { state } = this.props.navigation;
 //    BackHandler.addEventListener('hardwareBackPress', function() {
 //        if(state.routeName!=='Dashboard'){
 //        //  BackHandler.exitApp()
 //          //  alert("Dashboard")
 //          return true;
 //        }else{
 //         return false
 //        }
 //    //  BackHandler.exitApp()
 //   })
 //  }
 //  componentWillUnmount() {
 //   BackHandler.removeEventListener('hardwareBackPress');
 // }
  render() {
    //console.log(navigator.getCurrentRoutes().length);
    //alert(this.props.navigation.navigationState);
    const { navigate } = this.props.navigation;
  //  const { state } = this.props.navigation;
  //console.log(state);
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
     <Banner/>
       <Text style={{fontSize:20,color:'red',textAlign:'center'}}>Dashboard</Text>

       <ActionMenu
          PostPressed={()=>alert('Post')}
          VideoPressed={()=>navigate('AudioPlayer')}
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
const mapStateToProps=(state)=>{
  return{
 nav: state.nav

}
}
export default connect(mapStateToProps,null)(Dashboard);
