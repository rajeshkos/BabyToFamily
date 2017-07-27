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

var styles = StyleSheet.create({
  Container: {
    backgroundColor: '#ffffff',
    flex: 1
  },
  headerTop: {
    backgroundColor: "#939CEB",

    height:50,
    width:null,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  subElement: {
    flex: 1,
    flexDirection: 'column'
  },
  subHead: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
  },
  subRightElement: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  iconStyle: {
    color: '#ffffff'
  },
  fontStyle: {
    color: '#ffffff',
    fontWeight: '700'
  },
  subContainer: {
    flex: 1,
  },
  topWrap: {
    flex: 0.6,
    backgroundColor: '#B5BBEF',
    alignItems: 'center',
    justifyContent: 'center',  
    flexDirection: 'column',
    paddingBottom: 20
  },
  bottomWrap: {
    flex: 0.4,
  },
  imageBar: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#B5BBEF',
    alignContent: 'space-around'

  },
  colSec: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3
  },
  centerTitle: {
  },
  title: {
    color: '#ffffff'
  },
  greyBg:{
    backgroundColor: '#343434',
    height: 80,
    width: 80 ,
    borderRadius: 40 ,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  centerGrey: {
    backgroundColor: '#343434',
    height: 80,
    width: 80,
    borderRadius: 40 ,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: -35,
    marginBottom: 20
  },
  centerImage: {
    marginTop: 10
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 6,
    marginBottom: 10,
    padding: 5,
    paddingLeft: 7,
    paddingRight: 7,
    shadowOpacity: 0.2,
    shadowColor: '#000000',
    shadowOffset:{
    width: 0,
    height: 0,
    },
  },
  Title: {
    fontSize: 14,
    color: '#939BEB',
    marginBottom: 2,
    fontWeight: '700',

  },
  testDesc: {
    fontSize: 8,
    color: '#ffffff',
    marginTop: 7
  },
  desc: {
    fontSize: 11,
    color: '#BEBEBE'
  }

});
export default styles;
