import {StyleSheet} from 'react-native'

const style=StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'white'
  },
  header:{
    fontSize:13,
    color:'black',
    fontWeight:'bold'
  },
  headerContainer:{
    flex:0.2,
    justifyContent:'center',
    padding:10,
  },
  buttonContainer:{
  flex:1,
  justifyContent:'center',
  marginTop:8,
  marginBottom:8
  },
  curvedRadius:{
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  },
  buttonStyle:{
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    backgroundColor:'white',
    height:10,
    borderWidth:1,
    borderColor:'#ccc'
  },
  HeaderContent:{
    backgroundColor:'#B5BBEF',
    height:50,
    justifyContent:'center',
    flexDirection:'row',
    paddingTop:20
  },
  HeaderIcon:{
   flex:1,
    alignItems:'flex-start',
    justifyContent:'center',
    padding:10
  },
  HeaderTitle:{
    marginBottom:20,
    fontSize:18,
    color:'#ffff',
    fontWeight:'bold'
  },
  HeaderTitleContainer:{
    flex:3,
    alignItems:'center',
    justifyContent:'center',
    paddingTop:22

  },
  btnStyle: {
    height: 35,
    elevation: 3,
    backgroundColor: '#FF57A5', borderRadius: 5,  shadowOpacity: 0.2, shadowOffset:{
    width: 1,
    height: 1,
    },
  },
  btnContainer: {
    flex:0.5,
    alignSelf: 'stretch',
    marginTop:30
  },
  btnTextStyle: {
    fontFamily: 'GothamRounded-Bold',
    textAlign: 'center',
  },

})
export default style;
