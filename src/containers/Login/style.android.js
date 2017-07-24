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
  smallFlex: {
    flex:0.8,
  },
  spaceTextInput: {
    flex:0.8,
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    flex:0.5,
    paddingRight: 10,
  },
  btnStyle: {
    height: 35,
    elevation: 3,
    backgroundColor: '#FF57A5', borderRadius: 5,  shadowOpacity: 0.2, shadowOffset:{
    width: 1,
    height: 1,
    },
  },
  btnContainer: {
    flex:0.5,
    alignSelf: 'stretch',
  },
  orContainer: {
    paddingTop: 10,
    flex: 0.5,
    alignSelf: 'center',
  },

  or: {
    backgroundColor: "transparent",
    alignSelf: "center",
    color: '#8F8F8F',
    opacity: 1,
    fontSize: 18,
    fontFamily: 'gotham_rounded_book',
  },
  socialContainer: {
    flex:1,
    alignSelf:'center',
    flexDirection: 'row',
  },
  facebookContainer: {
    flex:0.2,
    alignItems: 'flex-end',
    marginRight: 1,
  },
  instaContainer: {
    flex:0.2,
    alignItems: 'flex-start',
    marginLeft: 1,
  },
  newuserContainer: {
    paddingTop: 10,
    marginRight: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnTextStyle: {
    fontFamily: 'gotham_rounded_bold',
    textAlign: 'center',
  },
  componentContainer: {
    flex:0.6,
    width:width/1.4,
    alignSelf:'center',
  },
  componentInnerContainer: {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
  },
  mainContainer: {
    flex:1,
    flexDirection: 'column',
    backgroundColor:'white',
  },
  fullContainer: {
    flex: 1,
  },
  container: {
    flex: 0.4,
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: width.width,
  },
  forgot: {
    alignSelf: "flex-end",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    color: '#B5BBEF',
    opacity: 1,
    fontSize: 16,
    fontFamily: 'gotham_rounded_book',
  },

  newuser: {
    backgroundColor: "transparent",
    alignSelf: "flex-end",
    color: '#969696',
    opacity: 1,
    flex: 1,
    fontSize: 18,
    fontFamily: 'gotham_rounded_book',
  },
  registeruser: {
    backgroundColor: "transparent",
    alignSelf: "flex-start",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    color: '#B5BBEF',
    opacity: 1,
    flex: 1,
    fontSize: 18,
    fontFamily: 'gotham_rounded_book',
  },
  errorMessage: {
    color: '#ea3d13',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 10,
    marginTop: 30,
  },
  popup: {
    width: width * 0.8,
  }
});

export default styles;
