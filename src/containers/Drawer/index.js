import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const { width, height}= Dimensions.get('window');
import DrawerItem from './DrawerItem'
import {connect} from 'react-redux';
import {logout} from 'app/containers/Login/LoginAction';
 class Drawer extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
    <LinearGradient colors={['#B074C1', '#BA66B1', '#A87FCD']} style={styles.container}>
    <View style={styles.avatarContainer}>
      <View style={{ flex: 1 }}>
        <View style={styles.imageContainer}>
           <View style={styles.image} />

        </View>
        <View style={styles.nameContainer}>
          <Text style={{ fontSize: 20, color: 'white' }}> John Smith</Text>
         </View>
        <View style={styles.subnameContainer}>
         <Text style={{ fontSize: 15, color: 'white', fontWeight: '300' }}> Father</Text>
        </View>
        </View>
        </View>
        <DrawerItem
            label="Add Baby"
            icon="plus-circle"
            iconfamily="FontAwesome"
            {...this.props}
            onPress={()=>navigate('DrawerItems')}

        />
        <DrawerItem
          label="Family Member"
          icon="user-plus"
          iconfamily="FontAwesome"
          {...this.props}
        />

        <DrawerItem
        label="Invite & Earn"
        icon="share-alt"
        iconfamily="FontAwesome"
        {...this.props}
        />
         <DrawerItem
         label="Terms & Policy"
          icon="file-text"
          iconfamily="FontAwesome"
          {...this.props}
         />
        <DrawerItem
        label="Feedback"
        iconfamily="MaterialIcons"
        icon="feedback"
        {...this.props}
        />
        <DrawerItem
         label="Logout"
         {...this.props}
         onPress={()=>this.props.logout()}
        />
        <View style={{flex:2}}/>
      </LinearGradient>
    );
  }

}

const styles = StyleSheet.create({
  container: {
   elevation: 5,
   flex: 1,
   paddingVertical: 20,
  },
  avatarContainer: {
   backgroundColor: 'transparent',
   height: height / 4,
   borderBottomWidth: 0.2,
   borderBottomColor: 'white'
  },
  imageContainer: {
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 10,
    paddingBottom: 10
  },
  header: {
    fontSize: 20,
    marginVertical: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: 'blue'
  },
  nameContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10
  },
  subnameContainer:{
    flex:1,
    alignItems:'flex-start',
    justifyContent:'center',
    paddingLeft:12,
    paddingBottom:10
  }

});
export default connect(null,{logout})(Drawer)
