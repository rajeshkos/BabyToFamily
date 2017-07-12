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
} from 'react-native';
const {width,height}=Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
  },
  componentContainer: {
    flex: 0.5,
    width: width/1.4,
    alignSelf: 'center',
  },
  keyboardStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  componentSubContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  halfFlex: {
    flex:0.9,
  },
  btnStyle: {
    height: 35,
    elevation: 3,
    backgroundColor: '#FF57A5', borderRadius: 5, marginTop: 10,  shadowOpacity: 1.0, shadowOffset:{
    width: 1,
    height: 1,
    },
  },
  orText: {
    flex:0.5,
    alignSelf: 'center',
  },
  socialMediaContainer: {

    flex:1,
    marginTop:5,
    alignSelf:'center',
    flexDirection: 'row',
  },
  fbContainer: {
    flex:0.2,
    alignItems: 'flex-end',
    marginRight: 1,
  },
  instaContainer: {
    flex:0.2,
    alignItems: 'flex-start',
    marginRight: 1,
  },
  bottomUserContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userSubContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  registerSubContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 5,
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
  },
  or: {
    backgroundColor: "transparent",
    alignSelf: "center",
    color: '#8F8F8F',
    opacity: 1,
    fontSize: 18,
    //fontFamily: 'gotham_rounded_book',
  },
  newuser: {
    backgroundColor: "transparent",
    alignSelf: "flex-end",
    color: '#969696',
    opacity: 1,
    fontSize: 18,
  //  fontFamily: 'gotham_rounded_book',
  },
  registeruser: {
    backgroundColor: "transparent",
    alignSelf: "flex-start",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    color: '#B5BBEF',
    opacity: 1,
    fontSize: 18,
    //fontFamily: 'gotham_rounded_book',
  },
  forgotContainer: {
    marginRight:20,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 200,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5
  },
  modalCard:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  modalFont:{
    fontSize:15,
    color:'gray'
  }

});

export default styles;
