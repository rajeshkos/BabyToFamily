import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ToastAndroid,
  Platform,
  AlertIOS,
  AsyncStorage
} from 'react-native';
import { Pages } from 'react-native-pages';
import { Button } from 'react-native-elements';

import IntroScreenOne from 'app/containers/WalkScreen/IntroScreenOne'
import IntroScreenTwo from 'app/containers/WalkScreen/IntroScreenTwo'
import IntroScreenThree from 'app/containers/WalkScreen/IntroScreenThree'
import IntroScreenFour from 'app/containers/WalkScreen/IntroScreenFour'
import IntroScreenFive from 'app/containers/WalkScreen/IntroScreenFive'
import {connect} from 'react-redux'
import { NavigationActions } from 'react-navigation'
const {width,height}=Dimensions.get('window');

var styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    height: null,
  },
  btnStyle: {
    height: 30,
    width: width/1.7,
    backgroundColor: '#ffda44', borderRadius: 5, marginTop: 10,  shadowOpacity: 1.0, shadowOffset:{
    width: 1,
    height: 1,
    },
  },
});
 class IntroPages extends Component {
async componentWillMount(){


  const {navigate}=this.props.navigation;
  const {auth,baby}=this.props;
  const value = await AsyncStorage.getItem('logedonce');
//alert(auth)
  if(auth&&value&&baby){

        navigate('Dashboard')

  }else if(value){
    //navigate('Login')


//alert(value)
    const {dispatch}=this.props;

    this.props.navigation
      .dispatch(NavigationActions.reset(
                 {
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'Auth'})]
                  }));
  }


}
async LoginPress(){

  await AsyncStorage.setItem('logedonce', 'true')
  const {navigate}=this.props.navigation;
  navigate('Login')

}

async SignupPress(){

  await AsyncStorage.setItem('logedonce', 'true')
  const {navigate}=this.props.navigation;
  navigate('Signup')

}
  render() {
      const {navigate}=this.props.navigation;
    return (
      <View style={styles.page}>
      <Pages>
      <View style={styles.page}>
        <IntroScreenOne/>
      </View>
      <View style={styles.page}>
        <IntroScreenTwo/>
      </View>
      <View style={styles.page}>
        <IntroScreenThree/>
      </View>
      <View style={styles.page}>
        <IntroScreenFour/>
      </View>
      <View style={styles.page}>
        <IntroScreenFive/>
      </View>
      </Pages>
      <View style={{flex: 0.4, flexDirection: 'column', backgroundColor: '#b5bbef', alignItems: 'center'}}>
      <Button
        buttonStyle={styles.btnStyle}
        textStyle={{color: 'black', textAlign: 'center', ...Platform.select({
          ios: {
            fontFamily: 'GothamRounded-Bold',
          },
          android: {
            fontFamily: 'gotham_rounded_bold',
          },
        }),
      }}
        title={`Login`}
        onPress={()=>this.LoginPress()}
      />


      <Button
        buttonStyle={[styles.btnStyle,{backgroundColor: 'black'}]}
        textStyle={{color: '#fed943', textAlign: 'center', ...Platform.select({
          ios: {
            fontFamily: 'GothamRounded-Bold',
          },
          android: {
            fontFamily: 'gotham_rounded_bold',
          },
        }),
      }}
        title={`Sign UP`}
        onPress={()=>this.SignupPress()}
      />
      </View>
      </View>
    );
  }
}
const mapStateToProps=({Login})=>{
const {auth,baby}=Login;

return{
  auth,
  baby

  }
}

export default connect(mapStateToProps,null)(IntroPages)
