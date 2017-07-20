import React,{Component} from 'react'
import {
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
  Linking,
  Animated,
  PanResponder,
  LayoutAnimation,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    toggle() {
        this.setState({checked: !this.state.checked});
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.toggle.bind(this)} style={{width:50,height:50,backgroundColor:'blue'}}>
                <View style={{flex:1,width:50,height:50}}>
                    {this.state.checked ?
                         <Icon name="angle-left" size={16} color='#000000' />
                         :
                         null
                    }
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
export default Example;
/*





const MAP_TAP_THRESHOLD = 100
const {height}=Dimensions.get('window')
class LocationScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showRideOptions: false,
      scrollY: new Animated.Value(0),
      mapTouchStart: '',
      mapViewMode: false
    }

    this.scrollSpot = height / 4.25
    this.activeMapHeight = height - this.scrollSpot
  }


  componentWillMount () {
    // Get the map tap check
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (e) => this.setState({mapTouchStart: e.nativeEvent.timestamp}),
      onPanResponderRelease: this.checkMapTap
    })
  }
  checkMapTap = (e) => {
    if (e.nativeEvent.timestamp - this.state.mapTouchStart < MAP_TAP_THRESHOLD) {
      LayoutAnimation.configureNext({...LayoutAnimation.Presets.linear, duration: 500})
      this.refs.scrolly.scrollTo({y: this.scrollSpot, animated: true})
      this.setState({mapViewMode: true})
    }
    this.setState({mapTouchStart: ''})
  }




  toggleRides = () => {
    const { showRideOptions, scrollY } = this.state
    if (!showRideOptions && scrollY._value < 200) {
      this.refs.scrolly.scrollTo({x: 0, y: 200, animated: true})
    }
    this.setState({showRideOptions: !this.state.showRideOptions})
  }

  renderBackground = () => {
    const height = Metrics.locationBackgroundHeight
    const { scrollY } = this.state
    return (
      <Animated.Image
        style={[styles.venue, {position: 'absolute'}, {
          width: '100%',
          height: height,
          transform: [{
            translateY: scrollY.interpolate({
              inputRange: [-height, 0, height],
              outputRange: [height, 0, 0]
            })
          }, {
            scale: scrollY.interpolate({
              inputRange: [-height, 0, height],
              outputRange: [0.9, 1, 1.5]
            })
          }]
        }]}
        source={Images.theArmory}
        resizeMode='cover'
      />
    )
  }

  renderHeader = () => {
    const height = Metrics.locationBackgroundHeight - 24
    const { scrollY } = this.state
    return (
      <Animated.View style={{
        position: 'relative',
        height: height,
        padding: 0,
        opacity: scrollY.interpolate({
          inputRange: [-height, 0, height * 0.4, height * 0.9],
          outputRange: [1, 1, 1, 0]
        }),
        transform: [{
          translateY: scrollY.interpolate({
            inputRange: [-height, 0, height * 0.45, height],
            outputRange: [0, 0, height * 0.45, height * 0.4]
          })
        }]
      }}>
        <View style={styles.headingContainer}>
          <Text style={styles.mainHeading}>The Armory</Text>
          <Text style={styles.address}>
            128 NW Eleventh Ave{'\n'}
            Portland, OR 97209
          </Text>
        </View>
      </Animated.View>
    )
  }

  onCloseMap = () => {
    LayoutAnimation.configureNext({...LayoutAnimation.Presets.linear, duration: 400})
    this.setState({mapViewMode: false})
  }

  render () {
    const { showRideOptions, mapViewMode } = this.state
    const { nearbyData } = this.props
    const { event } = Animated

    return (
      <View style={[styles.linearGradient, {flex: 1}]}>
        <ScrollView
          ref='scrolly'
          onScroll={event([{nativeEvent: {contentOffset: {y: this.state.scrollY}}}])}
          scrollEventThrottle={10}
          scrollEnabled={!this.state.mapViewMode}>
          <View style={styles.container}>
            {this.renderBackground()}
            {this.renderHeader()}
            <View ref='mapContainer' {...this._panResponder.panHandlers}>
              <View style={[styles.map, mapViewMode && {height: this.activeMapHeight}]} />
            </View>
            <View style={styles.mapActions}>
              <TouchableOpacity onPress={() => this.openMaps()}>
                <View style={styles.getDirections}>
                  <View style={styles.addressContainer}>
                    <Text style={styles.venueName}>
                      The Armory
                    </Text>
                    <Text style={styles.venueAddress}>
                      128 NW Eleventh Ave.{'\n'}Portland, OR 97209
                    </Text>
                  </View>
                  <View style={styles.directionsIcon}>
                    <Image source={Images.directionsIcon} />
                    <Text style={styles.directionsLabel}>Directions</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.toggleRides()}>
                <View style={styles.getRide}>
                  <Text style={styles.getRideLabel}>
                    Taking an Uber or Lyft?
                  </Text>
                  <Image
                    style={[styles.getRideIcon, showRideOptions && styles.flip]}
                    source={Images.chevronIcon}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.rideOptions, showRideOptions && {height: 170}]}>
              <TouchableOpacity onPress={() => this.openLyft()}>
                <Image style={styles.rideButton} source={Images.lyftButton} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.openUber()}>
                <Image style={styles.rideButton} source={Images.uberButton} />
              </TouchableOpacity>
            </View>
            <View style={styles.nearby}>
              <Text style={styles.mainHeading}>
                Nearby
              </Text>
            </View>

          </View>
        </ScrollView>
      </View>
    )
  }
}
const styles=StyleSheet.create({

  headingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  mainHeading: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 31,
    letterSpacing: 0.2,
    color: 'red'
  },
  address: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    letterSpacing: 0.47,
    lineHeight: 23,
    textAlign: 'center',
    color: '#FDE5FF'
  },
  map: {
    width: '100%',
    height: 180,
    zIndex: 2
  },
  mapActions: {
    paddingHorizontal: 12,
    backgroundColor: 'green',
    borderTopWidth: 1,
    borderTopColor: '#C4C4C4',
    borderBottomWidth: 1,
    borderBottomColor: '#DEDEDE',
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOffset: {
      x: 10,
      y: 10
    },
    shadowOpacity: 0.3,
    zIndex: 1
  },
  getDirections: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#DEDEDE'
  },
  venueName: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 17,
    letterSpacing: 0,
    color: 'darkPurple'
  },
  venueAddress: {
    fontFamily: 'Montserrat-Light',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0,
    color:'blue'
  },
  addressContainer: {
    flex: 4
  },
  directionsIcon: {
    alignItems: 'center',
    flex: 1
  },
  directionsLabel: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 11,
    letterSpacing: 0,
    color: 'darkPurple'
  },
  getRide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16
  },
  getRideLabel: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    lineHeight: 23,
    letterSpacing: 0.5,
    color:'darkPurple'
  },
  getRideIcon: {
    marginHorizontal: 10
  },
  rideButton: {
    margin: 1.2 * 0.2
  },
  rideOptions: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 0,
    overflow: 'hidden',
    backgroundColor: '#EDEDED'
  },
  flip: {
    transform: [{
      rotate: '180 deg'
    }]
  },
  nearby: {
    alignItems: 'center',
    paddingTop: 40
  }
})


*
export default LocationScreen;
*/
