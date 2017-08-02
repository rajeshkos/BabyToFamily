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
    paddingTop:20,
    alignItems: 'flex-start',
    alignSelf: 'center',flex: 0.7,width: width,
    zIndex: 1,
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
    left: 5,zIndex: 3, top: 25,  flexDirection: 'column',justifyContent: 'flex-start',
  },
  duck: {
    left: width/20,zIndex: 3, top: 15,  flexDirection: 'column',justifyContent: 'flex-start',
  },
  toys: {
    right: 5 ,zIndex: 3, top: 25,  flexDirection: 'column',justifyContent: 'flex-start', position: 'absolute'
  },
  heart: {
    left: 5,zIndex: 3, top: 35,  flexDirection: 'column',justifyContent: 'flex-start',
  },
  twitter: {
    zIndex: 3, top: 35,  flexDirection: 'column',justifyContent: 'flex-start',
  },
  facebook: {
    zIndex: 3, top: 35, left: 25, flexDirection: 'column',justifyContent: 'flex-start',
  },
  specs: {
    zIndex: 3, top: height/5.2, flexDirection: 'column',justifyContent: 'flex-start', alignItems: 'center', right: width/17
  },
  video: {
    zIndex: 3, top: 35,right: 30, flexDirection: 'column',justifyContent: 'flex-end', position: 'absolute'
  },
  star: {
    zIndex: 2, top: 35, right: 5, flexDirection: 'column',justifyContent: 'flex-end', position: 'absolute'
  },
  cGrand: {
    left: 14,zIndex: 3, top: 85,  flexDirection: 'column',justifyContent: 'flex-start',
  },
  grandParents: {
    left: 5, zIndex: 3, top: 35,  flexDirection: 'column',justifyContent: 'flex-start',position: 'absolute'
  },
  cBaby: {
      zIndex: 4, top: height/7,right: 30, flexDirection: 'column',justifyContent: 'flex-end', position: 'absolute'
  },
  Baby: {
    zIndex: 3, top: 35,right: 30, flexDirection: 'column',justifyContent: 'flex-end', position: 'absolute'
  },
  cParent: {
    zIndex: 3, top: 0, left: 0, flexDirection: 'column',justifyContent: 'flex-start',
  },
  parents: {
    zIndex: 2, top: 35, right: 5, flexDirection: 'column',justifyContent: 'flex-end', position: 'absolute'
  },
  tag: {left: -20,zIndex: 3, bottom: 0,  flexDirection: 'column',justifyContent: 'flex-end',},
  tag2: {left: 0,zIndex: 3, bottom: 0,  flexDirection: 'column',justifyContent: 'flex-end',},
  tabg3: {left: 0,zIndex: 3, bottom: 0,  flexDirection: 'column',justifyContent: 'flex-end',},
  mom: {left: 5,zIndex: 3, top: 25,  flexDirection: 'column',justifyContent: 'flex-start',},
  bottlePar: {left: 5,zIndex: 3, top: 10,  flexDirection: 'column',justifyContent: 'flex-start',},
  book: {left: 15,zIndex: 3, top: 10,  flexDirection: 'column',justifyContent: 'flex-start',},
  hey: {zIndex: 2, bottom: 35, right: 15, flexDirection: 'column',justifyContent: 'flex-end', position: 'absolute'},
  parentBaby: {zIndex: 2, top: 35, right: 5, flexDirection: 'column',justifyContent: 'flex-end', position: 'absolute'},
  momShopping: {left: 5,zIndex: 3, top: 25,  flexDirection: 'column',justifyContent: 'flex-start',},
  shop: {zIndex: 2, top: 35, right: 5, flexDirection: 'column',justifyContent: 'flex-end', position: 'absolute'},
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
     marginTop:30
   },
   blackbtn: {
     backgroundColor: '#FFDA44',
     borderRadius: 8,
     marginBottom: 10,
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
