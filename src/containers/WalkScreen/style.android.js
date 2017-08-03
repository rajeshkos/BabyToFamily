import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  KeyboardAvoidingView,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';const {width,height}=Dimensions.get('window');

var styles = StyleSheet.create({

   canvas: {
     alignItems: 'center',
     flex: 1,
     justifyContent: 'center',
     alignSelf: 'center',
     width: width,
   },
   slideWrap: {
     alignItems: 'center',
     flex: 0.8,
     justifyContent: 'center',
     alignSelf: 'center',
     width: width,
     position: 'relative',
   },
   slide: {
      flex: 1,
      position: 'absolute',
      zIndex: 0,
      width: width,
      bottom:0,top: 0,
    },
  ImageWraper:{
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 0.5,paddingTop: 50,
  },
  cloudWrap: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',flex: 0.7,
    zIndex: 1
  },
  elmentsWrap:{
    zIndex: 2,
    width: width-6,
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0, bottom: 0
  },
  bottle: {
    left: 5,zIndex: 3, top: 0,  flexDirection: 'column',justifyContent: 'flex-start',width: 80,backgroundColor: 'red'
  },
  duck: {
    left: 25,zIndex: 3, top: 15,  flexDirection: 'column',justifyContent: 'flex-start',width: 100,backgroundColor: 'yellow'
  },
  toys: {
    left: 60,zIndex: 3, top: 25,  flexDirection: 'column',justifyContent: 'flex-end',width: 150,backgroundColor: 'blue', alignItems: 'center'
  },
  text4: {
    backgroundColor: 'red',
    left: 0,zIndex: 3, top: 20,  flexDirection: 'column',
  },
   content: {
     justifyContent: 'center',
     alignItems: 'center',
     alignSelf: 'center',
     paddingHorizontal: 10,
     flex: 0.5,
     zIndex:5,
   },
   title: {
     color: '#583189',
     fontSize: 25,
     fontWeight: '700',
     textAlign: 'center',
     fontFamily: 'GothamRounded-Book',
     marginBottom: 5,
   },
   description: {
     textAlign: 'center',
     fontSize: 16,
     color: '#583189',
     fontFamily: 'GothamRounded-Book',

   },
   fixedBox: {
     backgroundColor :'#B5BBEF',
     alignItems: 'center',
     flex: 0.2,
     justifyContent: 'flex-start',
     alignSelf: 'center',
     width: width,
   },
   blackbtn: {
     backgroundColor: '#FFDA44',
     borderRadius: 8,
     marginBottom: 20,
     paddingHorizontal: 10,
     width: width/1.5,
     paddingVertical: 10,
     shadowOpacity: 0.2,
     shadowOffset:{
     width: 1,
     height: 1,
     },
   },
   yellowBtn:{
     backgroundColor: '#343434',
     borderRadius: 8,
     paddingHorizontal: 10,
     width: width/1.5,
     paddingVertical: 10,
     shadowOpacity: 0.2,
     shadowOffset:{
     width: 1,
     height: 1,
     },
   }

});

export default styles;
