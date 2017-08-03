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
   blueBg: {
     alignItems: 'center',
     flex: 0.7,
     justifyContent: 'center',
     alignSelf: 'center',
     width: width,
   },
   babyWrap: {
     justifyContent: 'center',
     alignItems: 'center',
     alignSelf: 'center',
     flex: 1,
     width: width,
     zIndex: 0,position: 'relative',backgroundColor: 'yellow'
   },
   mainBaby: {
     justifyContent: 'center',
     alignItems: 'center',
     alignSelf: 'center',
     backgroundColor: 'red'
   },
  slideWrap: {
    alignSelf: 'center',
    width: width,
    flex: 1,
    zIndex: 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom:0,backgroundColor: '#000'
  },
  slide: {
    alignSelf: 'center',
    width: width,
    flex: 1,
  },
  ImageWraper: { flex: 0.6,
  },
  cloudWrap: {
    justifyContent: 'flex-start',
    paddingTop:10,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    position: 'absolute', top:0,
    width: width,
    zIndex: 1,
  },
  elmentsWrap:{
    zIndex: 3 ,
    width: width,
    flexDirection: 'row',
    flex: 0.4
  },

  content: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',flex: 0.5,
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
    paddingHorizontal: 15

  },
  bottle: {
    left: 5, zIndex: 3, top: 0,  flexDirection: 'column', justifyContent: 'flex-start',
  },
  duck: {
    left: 10, zIndex: 3, top: 0, flexDirection: 'column',justifyContent: 'flex-start',
  },
  toys: {
    right: 5 ,zIndex: 3, top: 0,  flexDirection: 'column',justifyContent: 'flex-start', position: 'absolute'
  },
  heart: {
    left: 5, zIndex: 3, top:0,  flexDirection: 'column',justifyContent: 'flex-start',
  },
  tag: {left: 10,zIndex: 3, top: 100,  position: 'absolute',justifyContent: 'flex-end',},
  twitter: {
    left: 40, zIndex: 3, top: 0,justifyContent: 'flex-start',position: 'absolute'
  },
  facebook: {
    zIndex: 3, top: 0,right: 70, flexDirection: 'column',justifyContent: 'flex-end', position: 'absolute'
  },
  spexBox: {
    zIndex: 3, alignItems:'center' ,justifyContent: 'center', alignItems: 'center', left: 0, right: 0, top: 0, bottom:0,alignSelf: 'center', position: 'absolute', alignSelf: 'center'
  },
  video: {
    zIndex: 3, top: 0,right: 25, flexDirection: 'column',justifyContent: 'flex-end', position: 'absolute'
  },
  star: {
    zIndex: 2, top: 0, right: 5, flexDirection: 'column',justifyContent: 'flex-end', position: 'absolute'
  },

  grandBox: {
    left: 5, zIndex: 3, top: 0,  flexDirection: 'column', justifyContent: 'flex-start', flexDirection: 'column', flex: 0.1
  },
  babyBox: {
    right: 0, zIndex: 3, top: 0,  flexDirection: 'column', justifyContent: 'flex-start', flexDirection: 'column', flex: 0.5, position: 'relative',
  },
  parentBox: {
    right: 5 ,zIndex: 3, top: 0,  flexDirection: 'column',justifyContent: 'flex-start',  flex: 0.2, position: 'relative',
  },
  cGrand: {
    left: 14,zIndex: 3, top: 50,  flexDirection: 'column',justifyContent: 'flex-start',
  },
  grandParents: {
    left: 5, zIndex: 3, top: 0,  flexDirection: 'column',justifyContent: 'flex-start',position: 'absolute'
  },
  tag2: {left:10,zIndex: 3, top: 105, position: 'absolute'},
  cBaby: {
      zIndex: 4, top: 45,right: 0, flexDirection: 'column',justifyContent: 'flex-end', position: 'absolute'
  },
  Baby: {
    zIndex: 3, top: 0,right: 0, flexDirection: 'column',justifyContent: 'flex-end', position: 'absolute'
  },
  cParent: {
    zIndex: 3, top: 75, right: 10, flexDirection: 'column',justifyContent: 'flex-start',position: 'absolute'
  },
  parents: {
    zIndex: 2, top: 0, right: 5, flexDirection: 'column',justifyContent: 'flex-end', position: 'absolute'
  },
  chatBaby: {
    zIndex: 5, top: 40,left: 60, flexDirection: 'column',justifyContent: 'flex-end', position: 'absolute',
  },

  tag3: {left: 8,zIndex: 3, top: 105,justifyContent: 'flex-end',position: 'absolute',},
  mom: {left: 5,zIndex: 3, top: 0,justifyContent: 'flex-start',},
  bottlePar: {left: 28,zIndex: 3, top: 0,justifyContent: 'flex-start',position: 'absolute'},
  book: {right: 0,zIndex: 3, top: 0,  justifyContent: 'flex-start',position: 'absolute'},
  hey: {zIndex: 3, top: 70, right: 15, flexDirection: 'column',justifyContent: 'flex-start',position: 'absolute'},
  parentBaby: {zIndex: 2, top: 0, right: 5, flexDirection: 'column',justifyContent: 'flex-end', position: 'absolute'},
  tag4: {left: 7,zIndex: 3, top: 110,justifyContent: 'flex-end',position: 'absolute',},
  momShopping: {left: 5,zIndex: 3, top: 0,  flexDirection: 'column',justifyContent: 'flex-start',},
  shop: {zIndex: 2, top: 0, right: 5, flexDirection: 'column',justifyContent: 'flex-end', position: 'absolute'},

   fixedBox: {
     backgroundColor :'#B5BBEF',
     alignItems: 'center',
     flex: 0.4,
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
