import React, { Component } from 'react';
import {
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  TouchableOpacity,   // Pressable container
  View ,
  ScrollView,
  TouchableHighlight               // Container component
} from 'react-native';
export default class ScrollTabBar extends Component {

  // Initialize State
  state = {
    // First tab is active by default
    activeTab: 0
  }

  // Pull children out of props passed from App component
  render({ children } = this.props) {
    return (
      <View style={{flex:1}} >
        {/* Tabs row */}
        <ScrollView style={{flex:0.1}}
         alwaysBounceHorizontal={false}
         horizontal
         showsHorizontalScrollIndicator={false}
         removeClippedSubviews
         >
          {/* Pull props out of children, and pull title out of props */}
          {children.map(({ props: { title }}, index) =>

            <TouchableHighlight
               underlayColor={'transparent'}
              style={[
                // Default style for every tab
                styles.tabContainer,
                {paddingHorizontal:50,flex:1,alignItems:'center',justifyContent:'center'},
                this.props.tabstyle,
                // Merge default style with styles.tabContainerActive for active tab
                index === this.state.activeTab ? styles.tabContainerActive : []
              ]}
              // Change active tab
              onPress={() => this.setState({ activeTab: index }) }
              // Required key prop for components generated returned by map iterator
             key={index}
            >

              <Text style={styles.tabText}>
                {title}
              </Text>

            </TouchableHighlight>

          )}
          </ScrollView >
        {/* Content */}
        <View style={styles.contentContainer}>
          {children[this.state.activeTab]}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // Component container
  container: {
    flex: 1,                            // Take up all available space
  },
  // Tabs row container
  tabsContainer: {
    flexDirection: 'row',               // Arrange tabs in a row
    paddingTop: 10,


                       // Top padding
  },
  // Individual tab container
  tabContainer: {
    flex: 1,                            // Take up equal amount of space for each tab
    paddingVertical: 5,                // Vertical padding
    borderBottomWidth: 3,               // Add thick border at the bottom
    borderBottomColor: 'transparent',   // Transparent border for inactive tabs
  },
  // Active tab container
  tabContainerActive: {
    borderBottomColor: '#FFFFFF',
    borderBottomWidth:5 
         // White bottom border for active tabs
  },
  // Tab text
  tabText: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Content container
  contentContainer: {
    flex: 15                           // Take up all available space
  }
});
