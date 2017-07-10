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
  container: {
    flex:0.2,
    flexDirection: 'column',
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: width.width,
  },
  icon: {
    position:'absolute',
    top:10,
    left:2,
    backgroundColor:'transparent',
    width:40,height:40,
    alignItems:'center',
    justifyContent:'center',
  },
  headingMain: {
    flexDirection: 'column',
    flex: 0.3,
    width:width,
    alignSelf:'center',
  },
  subHeadingMain: {
    flex: 0.4,
    alignSelf: 'center',
  },
  headingText: {
    color: '#343434',
    opacity: 0.7,
    fontSize: 16,
    fontFamily: 'gotham_rounded_bold',
  },
  suheadingText:{
    color: '#343434',
    opacity: 0.7,
    fontSize: 11,
    fontFamily: 'gotham_rounded_bold',
    fontWeight:'400'

  },
  subHeadingMainTwo: {
    flexDirection: 'row',
    paddingTop: 16,
    alignSelf:'center',
  },
  subHeadingMainThree: {
    flexDirection: 'row',
    alignSelf:'center',
  },
  headingTextTwo: {
    color: '#343434',
    fontSize: 16,
    fontFamily: 'gotham_rounded_book',
  },
  headingTextThree: {
    color: '#343434',
    fontSize: 16,
    fontFamily: 'gotham_rounded_bold',
  },
  inputTextMain: {
    marginBottom: 20,
    flex:0.8,
    flexDirection: 'column',
    width:width/1.4,
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  inputTextSub: {
    flex:1,
    marginLeft: 20,
  },
  btnMain: {
    alignSelf: 'stretch',
    flex:1,

  },
  btnStyle: {
    height: 30,
    backgroundColor: '#FF57A5',
    borderRadius: 5,
    shadowOpacity: 1.0,
    shadowOffset:{
        width: 1,
        height: 1,
    },
    marginTop:15

  },
  btnTextStyle: {
    textAlign: 'center',
    fontFamily: 'gotham_rounded_bold',
  },
});

export default styles;
