import {
  AppRegistry,
  StyleSheet,
  Dimensions,
} from 'react-native';
const {width,height}=Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
  },
  componentContainer: {
    flex: 1,
    alignSelf: 'stretch',
    paddingLeft: 65,
    paddingRight: 65,
    paddingTop: 20,
    justifyContent: 'center',

  },
  topBar: {
    backgroundColor: '#939ceb',
    height: 60
  },
  keyboardStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerImage: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  componentSubContainer: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrap: {
    height: 100,
    width: 100,
    flexDirection: 'column',
    backgroundColor: '#d6d6d6',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start'
  },
  canvas: {
    height: 80,
    width: 80,
  },
  halfFlex: {
    flex:1,
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
  btnStyle: {
    height: 30,
    backgroundColor: '#FF57A5', 
    borderRadius: 5, 
    marginTop: 10,  
    shadowOpacity: 0.5, 
    shadowOffset:{
      width: 1,
      height: 1,
    }
  },

  
  babyTitle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: '#343434',
    fontSize: 16
  },
  box: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  boxWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0,
    flex:1,
    alignSelf:'stretch'
  },
  halfBox: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 15
  },
  dateWrap: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 0,
    flex:1,
    alignSelf:'stretch',
    borderBottomWidth: 1,
    borderColor: '#cecece',
    height: 40,

  },
  halfBox2: {flex: 1,
    flexDirection: 'row'
  }
  
 
});

export default styles;
