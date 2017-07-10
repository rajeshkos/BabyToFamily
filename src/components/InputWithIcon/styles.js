
import {StyleSheet,Dimensions, Platform} from 'react-native';
let INPUT_HEIGHT;
if(Platform.OS === 'ios'){
   INPUT_HEIGHT=5;
}
else {
}
const BORDER_RADIUS=4;
const {width,height}=Dimensions.get('window');

const styles =  StyleSheet.create({
registeruser: {
    backgroundColor: "transparent",
    alignSelf: "flex-start",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    color: '#B5BBEF',
    opacity: 1,
  },
newuser: {
    backgroundColor: "transparent",
    alignSelf: "flex-end",
    color: '#969696',
    opacity: 1,
  },
or: {
    padding: 15,
    backgroundColor: "transparent",
    alignSelf: "center",
    color: '#8F8F8F',
    opacity: 1,
  },
forgot: {
    alignSelf: "flex-end",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    color: '#B5BBEF',
    opacity: 1,
  },
canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: width,
  },
loginContainer: {
  backgroundColor:'red',
    flex: 0.4,
  },
container:{
      backgroundColor:'white',
      width:'90%',
      borderRadius:BORDER_RADIUS,
      flexDirection:'row',
      alignItems:'center',
      flex: 1,
    },
    containerDisabled:{
      backgroundColor:'#cccc'
    },
    buttonContainer:{
      height:INPUT_HEIGHT,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'white',
      borderTopLeftRadius:BORDER_RADIUS,
      borderBottomLeftRadius:BORDER_RADIUS
    },
    buttonText:{
       fontWeight:'600',
       fontSize:20,
       paddingHorizontal:16,
       height: 30,
       width: 30,
       color:'blue'
    },
    image:{
       marginTop: (Platform.OS === 'ios') ? 11 : 15,
       alignSelf: 'flex-start',
       height: 18,
       width: 18,
       opacity: 1
    },
    input:{
      ...Platform.select({
        ios: {
          paddingLeft: 30,
          paddingBottom: 2,

        },
        android: {
          paddingBottom: 0,
          paddingLeft: 15,
          width: 200,

        },
      }),
      height:INPUT_HEIGHT+10,
      fontSize:17,
      width: 200,
      color:'black',
    },

  mainContainer: {
    ...Platform.select({
      ios: {
        borderBottomWidth:1
      },
      android: {
        borderBottomWidth:0.5,
        flexDirection: 'row',
      },
    }),
    flex:1,
    borderBottomWidth:1,
    backgroundColor: 'white',
    borderBottomColor: '#cecece',
  }
});
export default styles;
