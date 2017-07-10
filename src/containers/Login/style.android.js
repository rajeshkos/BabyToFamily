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
    flex:0.1,
  },
  spaceTextInput: {
    flex:0.1,
    paddingTop: 7,
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    flex:0.1,
    paddingRight: 10,
  },
  btnStyle: {
    height: 35,
    elevation: 3,
    backgroundColor: '#FF57A5', borderRadius: 5, marginTop: 10,  shadowOpacity: 0.2, shadowOffset:{
    width: 1,
    height: 1,
    },
  },
  btnContainer: {
    flex:0.1,
    alignSelf: 'stretch',
  },
  orContainer: {
    flex:0.1,
    alignSelf: 'center',
  },
  socialContainer: {
    flex:0.2,
    marginTop:5,
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
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    fontFamily: 'gotham_rounded_bold',
    textAlign: 'center',
  },
  componentContainer: {
    flex:0.6,
    width:width/1.55,
    alignSelf:'center',
  },
  componentInnerContainer: {
    flex:0.6,
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
  or: {
    padding: 15,
    backgroundColor: "transparent",
    alignSelf: "center",
    color: '#8F8F8F',
    opacity: 1,
    fontSize: 18,
    fontFamily: 'gotham_rounded_book',
  },
  newuser: {
    backgroundColor: "transparent",
    alignSelf: "flex-end",
    color: '#969696',
    opacity: 1,
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
    fontSize: 18,
    fontFamily: 'gotham_rounded_book',
  },
});

export default styles;
