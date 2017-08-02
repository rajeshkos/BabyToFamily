import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  PixelRatio,
} from 'react-native';
const {width,height}=Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainerTop: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  icon:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  input:{
    paddingLeft: 30,
   paddingBottom: 2,

    height:20,
    fontSize:17,
    width: 200,
    color:'black',
  },
  dateinput:{
    paddingLeft: 5,
   paddingBottom: 2,
    width: 200,
    height:20,
    fontSize:17,
    width: 200,
    color:'black',
  },
  mainContainerOne: {
    flex:1,
    backgroundColor: "white",
  },
  modalHeading: {
    flex: 1,
    color: 'white',
    paddingTop: 15,
    fontSize:18,
    fontWeight:'bold',
    fontFamily: 'GothamRounded-Book',
  },
  navBar: {
    flex: 1,
    alignSelf: 'center',
    color: 'white',
  },
  container: {
    flex: 0.3,
  },
  componentContainer: {
    flex: 0.3,
    alignSelf: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  keyboardStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected:{
    width: PixelRatio.getPixelSizeForLayoutSize(85),
     height: PixelRatio.getPixelSizeForLayoutSize(85),
     borderRadius:80
  },
  componentSubContainer: {
    width: width/1.4,
    flex: 0.6,
    flexDirection: 'column',
    alignItems: 'center',
  },
  halfFlex: {
    flex:1,
  },

  btnStyle: {
    height: 30,
    width: width/1.5,
    backgroundColor: '#FF57A5',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
    shadowOpacity: 0.5,
    shadowOffset:{
      width: 1,
      height: 1,
    }
  },
  topBar: {

    justifyContent: 'center',
    backgroundColor: '#939ceb',
    height: 50,
    flexDirection:'row'
  },
  centerImage: {
    flexDirection: 'column',
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrap: {
    width: PixelRatio.getPixelSizeForLayoutSize(85),
    height: PixelRatio.getPixelSizeForLayoutSize(85),
    flexDirection: 'column',
    backgroundColor: '#d6d6d6',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  babyTitle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: '#343434',
    fontSize: 16,
    marginTop: 2,
    fontFamily: 'GothamRounded-Book',
  },
  box: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 13,
    marginRight: 13,
    flex:1,
  },
  halfBox: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 10
  },
  dateWrap: {
    marginBottom: 12,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 0,
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#cecece',
  },
  wrapper: {
    backgroundColor: 'red',
    flex: 1
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal2: {
    height: 230,
    width: width,
    backgroundColor: "#3B5998",

  },

  modal3: {
    height: 300,
    width: 300,

  },

  modal4: {
    height: 300
  },

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "black",
    padding: 10
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "black",
    fontSize: 22
  },

  canvas: {
  height: 80,
  width: 80,


},
genderdefault:{
  paddingLeft: 5,
 paddingBottom: 2,
  width: 200,
  height:20,
  fontSize:17,
  width: 200,
  color:'black',

},
genderactive:{
  paddingLeft: 5,
 paddingBottom: 2,
  width: 200,
  height:20,
  fontSize:17,
  width: 200,
  color:'#FF57A5',

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
},
smallavatr:{
  width:18,
  height:18,
  marginRight:5
},
});

export default styles;
