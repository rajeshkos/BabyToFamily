/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  Image,
  TouchableHighlight,
  ScrollView,
  ActivityIndicator,
  Modal,
  Linking,
  Platform,
  NetInfo,
  Keyboard,
  KeyboardAvoidingView,
  AsyncStorage
} from 'react-native';
import SafariView from 'react-native-safari-view';
import { NavigationActions } from 'react-navigation'

import { Button, SocialIcon } from 'react-native-elements';
import {connect} from 'react-redux';
import AppIntro from 'react-native-app-intro';
import styles from './style';
//import InputWithIcon  from 'app/components/InputWithIcon'
//import Loading from 'app/components/Loading';
import Icon from 'react-native-vector-icons/Ionicons';
const {width,height}=Dimensions.get('window');
//import {session_destroy} from 'app/containers/Signup/OTP/OtpActions'

class WalkScreen extends Component {
   constructor(props) {
     super(props);
     this.state = {
       errorMessage: undefined,
       popupShowed: false,
       connectionInfo: null,
       scrollEnabled:false

     };
   }
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
    //const { errorMessage, popupShowed ,scrollEnabled} = this.state;
    //const {loginUpdate,loginChecking,email,password,loading,auth,user,navigation,logout,session}=this.props;
    //  console.log("session",session);
    //console.log(this.state.connectionInfo)
    return (

      <View style={{flex:1,}}>
        <Image resizeMode="cover" style={styles.canvas} source={require('./Images/bg.png')}>
          <View style={styles.slideWrap}>
            <AppIntro
              showSkipButton={false}
              showDoneButton= {false}
            >
              <View style={styles.slide}>
                <View style={styles.ImageWraper}>
                  <View level={2} style={styles.cloudWrap}><Image style={styles.cloud} source={require('./Images/cloud.png')}/></View>
                  <View level={5} style={styles.elmentsWrap}>
                    <Image level={8} style={styles.bottle} source={require('./Images/intro1/bottle.png')}/>

                    <Image level={8} style={styles.duck} source={require('./Images/intro1/duck.png')}/>
                    <Image level={8} style={styles.toys} source={require('./Images/intro1/toys.png')}/>
                  </View>
                </View>
                <View level={5} style={styles.content}>
                    <Text style={styles.title}>Story!</Text>
                    <Text style={styles.description}>The whole baby story start here</Text>
                </View>
              </View>
              <View style={styles.slide}>
              <View style={styles.ImageWraper}>
                <View level={2} style={styles.cloudWrap}><Image style={styles.cloud} source={require('./Images/cloud.png')}/></View>
                <View level={10} style={styles.elmentsWrap}>
                  <Image level={15} style={styles.heart} source={require('./Images/intro2/heart.png')}/>
                  <Image level={15} style={styles.tag} source={require('./Images/intro2/baby_story.png')}/>

                  <Image level={20} style={styles.twitter} source={require('./Images/intro2/twiter.png')}/>
                  <Image level={25} style={styles.facebook} source={require('./Images/intro2/fb.png')}/>
                  <Image level={30} style={styles.specs} source={require('./Images/intro2/specs.png')}/>
                  <Image level={35} style={styles.video} source={require('./Images/intro2/camera.png')}/>
                  <Image level={40} style={styles.star} source={require('./Images/intro2/star.png')}/>
                </View>
              </View>
                <View level={10} style={styles.content}>
                    <Text style={styles.title}>Social!</Text>
                    <Text style={styles.description}>Keep best baby moments, capture Add Milestone, get Printed Albums</Text>
                </View>
              </View>
              <View style={styles.slide}>
              <View style={styles.ImageWraper}>
                <View level={2} style={styles.cloudWrap}><Image style={styles.cloud} source={require('./Images/cloud.png')}/></View>
                <View level={15} style={styles.elmentsWrap}>
                  <Image level={15} style={styles.cGrand} source={require('./Images/intro3/chat_grapnd.png')}/>
                  <Image level={15} style={styles.tag2} source={require('./Images/intro2/baby_family.png')}/>
                  <Image level={20} style={styles.grandParents} source={require('./Images/intro3/grandpa.png')}/>
                  <Image level={25} style={styles.chatBaby} source={require('./Images/intro3/chat.png')}/>
                  <Image level={30} style={styles.cBaby} source={require('./Images/intro3/chat_baby.png')}/>
                  <Image level={25} style={styles.Baby} source={require('./Images/intro3/baby.png')}/>
                  <Image level={35} style={styles.cParent} source={require('./Images/intro3/chat_parrent.png')}/>
                  <Image level={40} style={styles.parents} source={require('./Images/intro3/parent.png')}/>
                </View>
              </View>
                <View level={15} style={styles.content}>
                    <Text style={styles.title}>Family!</Text>
                    <Text style={styles.description}>Share best moments in Commiunity and share with Family</Text>
                </View>
              </View>
              <View style={styles.slide}>
                <View style={styles.ImageWraper}>
                  <View level={2} style={styles.cloudWrap}><Image style={styles.cloud} source={require('./Images/cloud.png')}/></View>
                  <View level={20} style={styles.elmentsWrap}>
                    <Image level={15} style={styles.mom} source={require('./Images/intro4/mom.png')}/>
                    <Image level={15} style={styles.tag3} source={require('./Images/intro2/baby_fun.png')}/>
                    <Image level={20} style={styles.bottlePar} source={require('./Images/intro4/bottle.png')}/>
                    <Image level={25} style={styles.book} source={require('./Images/intro4/book.png')}/>
                    <Image level={30} style={styles.hey} source={require('./Images/intro4/hey.png')}/>
                    <Image level={35} style={styles.parentBaby} source={require('./Images/intro4/parent_baby.png')}/>
                  </View>
                </View>
                <View level={20} style={styles.content}>
                    <Text style={styles.title}>Parenting!</Text>
                    <Text style={styles.description}>Parents gets updated about babys health, social news, food.</Text>
                </View>
              </View>
              <View style={styles.slide}>
                <View style={styles.ImageWraper}>
                  <View level={2} style={styles.cloudWrap}><Image style={styles.cloud} source={require('./Images/cloud.png')}/></View>
                  <View level={25} style={styles.elmentsWrap}>
                    <Image level={15} style={styles.momShopping} source={require('./Images/intro5/mom_shoping.png')}/>
                    <Image level={15} style={styles.tag} source={require('./Images/intro2/baby_shop.png')}/>
                    <Image level={20} style={styles.shop} source={require('./Images/intro5/shop.png')}/>
                  </View>
                </View>
                <View level={25} style={styles.content}>
                    <Text style={styles.title}>Shopping!</Text>
                    <Text style={styles.description}>Buy the best curated products we prepared for your baby</Text>
                </View>
              </View>
            </AppIntro>
          </View>
     <View style={styles.fixedBox}>
          <Button
            buttonStyle={styles.blackbtn}
            textStyle={{textAlign: 'center', color: '#343434', fontSize: 15, fontWeight: '500'}}
            title={`Login`}
            onPress={()=>this.LoginPress()}
          />
          <Button
            buttonStyle={styles.yellowBtn}
            textStyle={{textAlign: 'center', color: '#FFDA44', fontSize: 15, fontWeight: '500'}}
            title={`Sign Up`}
            onPress={()=>this.SignupPress()}
            />
        </View>

        </Image>

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

export default connect(mapStateToProps,null)(WalkScreen)
