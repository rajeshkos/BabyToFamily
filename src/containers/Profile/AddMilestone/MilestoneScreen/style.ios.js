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
    flex: 1, 
    paddingVertical: 5,
    paddingHorizontal: 10, 
    
  },
  imageCard: {
    flex: 0.35,
    borderRadius: 7,
    marginBottom: 5,
    position: 'relative',
  },
  babyImage: {
    resizeMode: 'cover',
    width: null,
    flex: 1,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center'
   },
  ratingWrap: {
    position: 'absolute',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-end', 
    resizeMode: 'stretch',
    width: null,
    borderRadius: 7,alignSelf: 'flex-end',
    left: 0, 
    right: 0, 
    bottom: 0,
    zIndex: 2, 
    paddingBottom: 5
  },
  starStyle: {
    marginRight: 2
  },
  subCategory: {
    flex: 0.65,
    marginTop: 3,
    alignItems: 'center',
    flexDirection: 'row',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 6,
    marginBottom: 10,
    padding: 5,
    shadowOpacity: 0.2, 
    shadowColor: '#000000',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    shadowOffset:{
    width: 0,
    height: 0,
    },
  },
  textFont: {
    color: '#1c1c1c',
    fontWeight: '400', 
    fontSize: 12,
    flex: 1,
    flexDirection: 'row',
  },
  checkWrap: {
    borderWidth: 0,
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    width: width - 24,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 4,
    padding: 0,
    paddingLeft: 5,
    borderColor: '#D2D2D2'
  },
  checkActiveWrap: {
    borderWidth: 0,
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    width: width - 24,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderWidth: 0,   
    borderRadius: 4,
    padding: 0,
     borderColor: 'transparent',
    paddingLeft: 5,
    shadowOpacity: 0.2, 
    shadowColor: '#000000',
    shadowOffset:{
    width: 0,
    height: 0,
    },
  }


});
export default styles;

