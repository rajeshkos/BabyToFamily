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
    backgroundColor: '#FFFFFF',
    flex:0.5,
    flexDirection: 'column',
  },
  suheadingText:{
    color: '#343434',
    opacity: 0.7,
    fontSize: 11,
    fontFamily: 'GothamRounded-Bold',
    fontWeight:'400'

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
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    flex: 0.7,
    width:width,
    alignSelf:'center',
  },
  subHeadingMain: {
    flex: 0.5,
    alignItems: 'center',
  },
  headingText: {
    opacity: 0.7,
    fontSize: 16,
    fontFamily: 'GothamRounded-Bold',
  },
  subHeadingMainTwo: {
    flexDirection: 'row',
    paddingTop: 15,
    alignSelf:'center',
  },
  subHeadingMainThree: {
    flexDirection: 'row',
    alignSelf:'center',
  },
  headingTextTwo: {
    fontFamily: 'GothamRounded-Book',
  },
  headingTextThree: {
    fontFamily: 'GothamRounded-Bold',
  },
  inputTextMain: {
    flex:0.6,
    flexDirection: 'column',
    width:width/1.4,
    alignSelf: 'center',
  },
  inputTextSub: {
    flex:0.1,
    marginLeft: 20,
  },
  btnMain: {
    alignSelf: 'stretch',
    flex:0.3,

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
    fontFamily: 'GothamRounded-Bold',
  },
});


export default styles;
