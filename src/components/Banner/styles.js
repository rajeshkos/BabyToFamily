import {StyleSheet,Dimensions, Platform} from 'react-native';
const {width,height}=Dimensions.get('window');

var styles = StyleSheet.create({
 topConatiner: {
    flex: 0.4,    
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  bgView: {
    flex:1,
  },
  bgImage: {
    flex:1,
    width,
    backgroundColor:'#fff', 
    paddingTop: 0
  },
  imageWapper: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#FE57A6',
    padding: 8,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    padding: 8
  },
  profileInfo: {
    flex:1,
    alignItems: 'center',
    paddingTop: 25
  },
  
  name: {
    backgroundColor: 'transparent',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 3,
    fontSize: 18
  },  
  age: {
    backgroundColor: '#949CEC',
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 10,
    
  },
  ageText: {
    color: '#ffffff',
    fontSize: 10
  },
  

});
export default styles;
