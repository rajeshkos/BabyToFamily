import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default class ActionMenu extends Component {
  constructor(props){
    super(props);
  }

  render() {
      const {PostPressed,VideoPressed,ImagePressed}=this.props;
    return (
      <View style={{flex:1, backgroundColor: '#f3f3f3',marginBottom:43}}>
        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#80c785' title="Add Post" onPress={PostPressed}>
            <FAIcon name="quote-right" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#feb74b' title="Add Video" onPress={VideoPressed}>
            <Icon name="ios-videocam" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#64b5f6' title="Add Image" onPress={ImagePressed}>
            <Icon name="md-camera" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
