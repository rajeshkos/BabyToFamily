import React, { Component } from 'react';

import {
  StyleSheet,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class HeaderButton extends Component {


  static defaultProps = {
    icon: 'md-menu',
  };

  render() {
    return (
      <View style={styles.container}>
        <Icon.Button
          name={this.props.icon}
          size={26}
          color="#4F8EF7"
          backgroundColor="#FFF"
          onPress={this.props.onPress}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    // position absolutely in the top left corner
  //  ...StyleSheet.absoluteFillObject,
    position:'absolute',
    top: 10,
    left: 0,
    right:0,
    zIndex:3,
    height:60,


  },
});
