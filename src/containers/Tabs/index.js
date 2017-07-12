import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Keyboard,
  Platform,
  Image,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';


type State = {
    keyboardUp: boolean,
}

const { width } = Dimensions.get('window');
 class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selected: ''
    };
  }
   state: State = {};
  componentWillMount() {
      if (Platform.OS === 'android') {
 this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);
 this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);
      }
  }
  componentWillUnmount() {
    //   this.keyboardDidShowListener.remove();
      // this.keyboardDidHideListener.remove();
   }
   keyboardWillShow = () => {
       this.setState({ keyboardUp: true });
   };

   keyboardWillHide = () => {
       this.setState({ keyboardUp: false });
   };

  render() {
    const { tabone, tabtwo, tabthree, tabfour, tabfive, dispatch } = this.props;
    return (

    <View style={style.container}>

            {this.props.children}

      <View style={[style.tabbarView, this.state.keyboardUp && style.hidden]}>
      <TouchableOpacity
       style={{ flex: 1 }}
       onPress={() => {
         dispatch({ type: 'TAB_ONE' });
         this.props.navigation.navigate('Community');
                   }}
      >
      <View style={style.iconContainer}>
            <FAIcon
            name="dot-circle-o"
             color={tabone ? '#ff57a6' : '#343434'}
             size={30}
            />
            <Text
            style={tabone ? style.activeLabel : style.tabLabel}
            >Community
            </Text>
      </View>
      </TouchableOpacity>
       <TouchableOpacity
       style={{ flex: 1 }}
       onPress={() => {
          dispatch({ type: 'TAB_TWO' });
          this.props.navigation.navigate('Gallery');
                 }}
       >
       <View style={style.iconContainer}>
       <MIcon
       name="class"
       color={tabtwo ? '#ff57a6' : '#343434'}
       size={30}
       />
       <Text
       style={tabtwo ? style.activeLabel : style.tabLabel}
       >
       Parenting</Text>
       </View>
       </TouchableOpacity>
       <View
       style={{ flex: 1, backgroundColor: 'white', margin: 10 }}
       />
        <TouchableOpacity
         style={{ flex: 1 }}
         onPress={() => {
           dispatch({ type: 'TAB_FOUR' });
           this.props.navigation.navigate('Nesting');
         }}
        >
       <View style={style.iconContainer}>
      <MCIcon
        name="basket"
        color={tabfour ? '#ff57a6' : '#343434'}
        size={30}
      />
        <Text style={tabfour ? style.activeLabel : style.tabLabel}>Nesting</Text>
       </View>
       </TouchableOpacity>
         <TouchableOpacity
         style={{ flex: 1 }}
         onPress={() => {
           dispatch({ type: 'TAB_FIVE' });
           this.props.navigation.navigate('Profile');
            }}
         >
       <View style={style.iconContainer}>
                <MIcon
                name="child-care"
                color={tabfive ? '#ff57a6' : '#343434'}
                size={30}
                />
        <Text style={tabfive ? style.activeLabel : style.tabLabel}>Baby Profile</Text>
       </View>
       </TouchableOpacity>
       </View>

         <View style={[style.imageContainer, this.state.keyboardUp && style.hidden]}>
      <View style={style.imageWapper}>
          <TouchableOpacity
          style={style.imageView}
          onPress={() => {
            dispatch({ type: 'TAB_THREE' });
            this.props.navigation.navigate('Dashboard');
             }}
          >
         <Image
          style={[style.image, this.state.keyboardUp && style.hideimage]}
        
         />
         </TouchableOpacity>
         </View>
          </View>

       </View>

    )
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
tabbarView: {
  height: 80,
  width,
  backgroundColor: 'white',
  position: 'absolute',
  bottom: 0,
  right: 0,
  left: 0,
  flexDirection: 'row',
  shadowOffset: {
    width: -1,
    height: -1,
  },
  shadowColor: 'black',
  shadowOpacity: 0.20,
  zIndex: 2
},
iconContainer: {
  flex: 1,
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center'
},
imageContainer: {
  height: 76,
  borderTopLeftRadius: 95,
  borderTopRightRadius: 95,
  width: 95,
  borderRadius: 50,
  position: 'absolute',
  bottom: 25,
  left: width/2-50,
  shadowOffset: {
    width: -1,
    height: -1,
  },
  shadowColor: 'black',
  shadowOpacity: 0.20,
  zIndex: 2,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 0,
  marginRight: 10,
  marginBottom: 0,
  marginLeft: 10

},
image: {
   height: 88,
   width: 88,
   borderRadius: 50,
   padding: 20
},
hidden: {
       height: 0,
   },
hideimage: {
     height: 0,
     width: 0
   },
 imageView: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center'
 },
 iconText: {
   fontSize: 12,
   color: 'red',

 },
 tabLabel: {
   color: '#343434',
   fontSize: 12,
   marginTop: 5
 },
 activeLabel: {
   color: '#ff57a6',
   fontSize: 12,
   marginTop: 5
 },
 imageWapper: {
   borderRadius: 47,
   height: 95,
   width: 95,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
   borderColor: 'red',
   borderWidth: 2,
   position: 'absolute',
   zIndex: 3,

 },


});
const mapStateToProps = ({ Tab }) => {
  const { tabone, tabtwo, tabthree, tabfour, tabfive } = Tab;
return {
    tabone,
    tabtwo,
    tabthree,
    tabfour,
    tabfive
};
};
export default connect(mapStateToProps, null)(Tabs);
