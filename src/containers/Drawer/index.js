import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  Image,
  Platform
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const { width, height}= Dimensions.get('window');
import DrawerItem from './DrawerItem'
import {connect} from 'react-redux';
import {logout} from 'app/containers/Login/LoginAction';
 class Drawer extends Component {
  state={active:'one'}

  render() {
    const {logout}=this.props;
    const { navigate } = this.props.navigation;
    return (
    <LinearGradient colors={['#B074C1', '#BA66B1', '#A87FCD']} style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={{ flex: 1 }}>
          <View style={styles.imageContainer}>
            <View style={styles.image}>
              <Image resizeMode="stretch" style={styles.userImg} source={require('./images/user.png')} />
            </View>
          </View>
          <View style={styles.nameContainer}>
            <Text style={{ fontSize: 20, color: 'white' }}> John Smith</Text>
          </View>
          <View style={styles.subnameContainer}>
            <Text style={{ fontSize: 15, color: '#DDA0CD', fontWeight: '500' }}> Father</Text>
          </View>
        </View>
      </View>
      <View style={{flex:2,flexDirection:'column'}}>
        <DrawerItem
            label="Add Baby"
            icon="plus-circle"
            iconfamily="FontAwesome"
            {...this.props}
             iconColor={this.state.active==='one'? '#FFDF58' : '#343434'}
             labelStyle={this.state.active==='one'? styles.activeLabel : styles.inactiveLabel}
             onPress={()=>{this.setState({active:'one'}),navigate('AddBaby')}}

        />
        <DrawerItem
          label="Family Member"
          icon="people"
          iconfamily="MaterialIcons"
          {...this.props}
             iconColor={this.state.active==='two'? '#FFDF58' : '#343434'}
             labelStyle={this.state.active==='two'? styles.activeLabel : styles.inactiveLabel}
          onPress={()=>this.setState({active:'two'})}
        />
        <DrawerItem
          label="Invite & Earn"
          icon="md-share"
          iconfamily="Ionicons"
          {...this.props}
           iconColor={this.state.active==='three'? '#FFDF58' : '#343434'}
             labelStyle={this.state.active==='three'? styles.activeLabel : styles.inactiveLabel}
            onPress={()=>{this.setState({active:'three'})}}
        />
        <DrawerItem
          label="Moments/Prints"
          icon="image-multiple"
          iconfamily="MaterialCommunityIcons"
          iconColor={this.state.active? styles.activeLabel : styles.inactiveLabel}
          labelStyle={{color:'#343434'}}
          {...this.props}
            iconColor={this.state.active==='four'? '#FFDF58' : '#343434'}
             labelStyle={this.state.active==='four'? styles.activeLabel : styles.inactiveLabel}
          onPress={()=>this.setState({active:'four'})}
         />
         <DrawerItem
          label="Food/Music"
          icon="food-apple"
          iconfamily="MaterialCommunityIcons"
          {...this.props}
            iconColor={this.state.active==='five'? '#FFDF58' : '#343434'}
             labelStyle={this.state.active==='five'? styles.activeLabel : styles.inactiveLabel}
          onPress={()=>this.setState({active:'five'})}
         />
         <DrawerItem
          label="Terms & Policy"
          icon="file-text"
          iconfamily="FontAwesome"
          {...this.props}
            iconColor={this.state.active==='six'? '#FFDF58' : '#343434'}
             labelStyle={this.state.active==='six'? styles.activeLabel : styles.inactiveLabel}
          onPress={()=>this.setState({active:'six'})}
         />
        <DrawerItem
          label="Feedback"
          iconfamily="MaterialCommunityIcons"
          icon="message-text"
          {...this.props}
         iconColor={this.state.active==='seven'? '#FFDF58' : '#343434'}
             labelStyle={this.state.active==='seven'? styles.activeLabel : styles.inactiveLabel}
          onPress={()=>this.setState({active:'seven'})}
        />
        <DrawerItem
          label="Logout"
          iconfamily="FontAwesome"
          icon="power-off"
          {...this.props}
            iconColor={this.state.active==='eight'? '#FFDF58' : '#343434'}
             labelStyle={this.state.active==='eight'? styles.activeLabel : styles.inactiveLabel}
           onPress={()=>{this.setState({active:'eight'}),logout()}}
        />
      </View>

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
    width: 66,
    height: 66,
    borderRadius: 33,
  },
  userImg: {
    width: 66,
    height: 66,
    borderRadius: 33  ,
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
  },
  activeLabel: {
    color: '#FFDF58'
  },
  inactiveLabel: {
    color: '#343434'
  }

});
export default connect(null,{logout})(Drawer)
