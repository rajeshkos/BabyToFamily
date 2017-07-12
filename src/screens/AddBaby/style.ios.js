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
  mainContainerOne: {
    flex:1,
    backgroundColor: "white",
  },
  modalHeading: {
    flex: 1,
    color: 'white',
    paddingTop: 15,
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
    backgroundColor: '#FF57A5',
    borderRadius: 5,
    marginTop: 10,
    shadowOpacity: 0.5,
    shadowOffset:{
      width: 1,
      height: 1,
    }
  },
  topBar: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#939ceb',
    height: 50,
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
    backgroundColor: "#3B5998"
  },

  modal3: {
    height: 300,
    width: 300
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
  btnStyle: {
    height: 30,
    backgroundColor: '#FF57A5', borderRadius: 5, marginTop: 10,  shadowOpacity: 1.0, shadowOffset:{
    width: 1,
    height: 1,
    },
  },
});

export default styles;
