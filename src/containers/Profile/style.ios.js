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
  
headerTop: {
    backgroundColor: "#ffffff",
    flexDirection: 'row',
    height:40,
    width:null,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  subElement: {
    flex: 1,
    flexDirection: 'column'
  },
  subHead: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center'
  },
  subRightElement: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  iconStyle: {
    color: '#343434'
  },
  fontStyle: {
    color: '#343434',
    fontWeight: '700'
  },
  mainContainer: {
    flex: 2,
    backgroundColor: '#fff'
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: width,
    marginBottom: 30
  },
  barIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  iconImage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,

  },
  iconDesc:{
    color: '#003133',
    fontWeight: '500',
    fontSize: 13,
    backgroundColor: 'transparent'
  },
  centerIcon: {
    position: 'absolute',
    bottom: -45,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
  },  
  cardWrap: {
    flex: 0.6,
    backgroundColor: '#ffffff',
    padding: 10
  },
  leftText: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  
  pinkText: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    lineHeight: 18,
    marginLeft: 5,
    color: "#FE57A5",
    fontWeight: '700',
    fontSize: 16
  },
  cardBox: {
    alignItems: 'stretch',
    alignSelf: 'stretch',
    flex: 1,
    padding: 0,
    marginTop: 10
  },
  card: {
    padding: 0,
    margin: 0,
    borderRadius: 8,
    marginBottom: 7
  },
  wrapperStyle: {
    padding: 5,
  },
  cardTitle: {
    fontSize: 16,
    color: '#939BEB',
    marginBottom: 10,
    fontWeight: '700',
    flex: 0.5,
    alignSelf: 'center',
    alignSelf: 'center',
  },
  topBar: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  ratingWrap: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
    flex: 0.5,
  },
  starStyle: {
    marginLeft: 5
  },
  cardDesc: {
    color: '#343434'
  }
});
export default styles;

