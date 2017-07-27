import React,{Component} from 'react'
import {Text,View, StyleSheet, Image, Dimensions, ScrollView,TouchableHighlight} from 'react-native'
import { Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import MilestoneScreen from './MilestoneScreen'
const {width}=Dimensions.get('window')

export default class AddMilestone extends Component{
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
 render(){
   const {navigate,goBack}=this.props.navigation;
   return(
	   <View style={styles.Container}>
      <View style={styles.headerTop}>
        <View style={styles.subElement}>
          <Icon
           name="ios-arrow-back"
           size={26}
           color="black"
           style={styles.iconStyle}
           onPress={()=>goBack(null)}
          />
        </View>
        <View style={styles.subHead}>
          <Text style={styles.fontStyle}>Add Milestone</Text>
        </View>
        <View style={styles.subRightElement}>
          <MIcon
           name="tune"
           size={22}
           color="black"
           style={styles.iconStyle}
          />
        </View>
      </View>
      <View style={styles.subContainer}>
        <View style={styles.topWrap}>
          <View style={styles.imageBar}>
            <View style={styles.colSec}>
              <View style={styles.greyBg}>
                <Image resizeMode="stretch" style={styles.canvas} source={require('./Images/ios/social.png')} />
                <Text style={styles.testDesc}>Social</Text>
              </View>
              <View style={styles.greyBg}>
                <Image resizeMode="stretch" style={styles.canvas} source={require('./Images/ios/physical.png')} />
                <Text style={styles.testDesc}>Physical</Text>
              </View>
            </View>
            <View style={styles.colSec}>
              <View style={styles.centerGrey}>
                <Image resizeMode="stretch" style={styles.canvas} source={require('./Images/ios/communication.png')} />
                <Text style={styles.testDesc}>Communication</Text>
              </View>
              <View style={styles.centerImage}>
                <Image resizeMode="stretch" style={styles.canvas} source={require('./Images/ios/baby.png')} />
              </View>
            </View>
            <View style={styles.colSec}>
              <View style={styles.greyBg}>
                <Image resizeMode="stretch" style={styles.canvas} source={require('./Images/ios/cognitive.png')} />
                <Text style={styles.testDesc}>Cognitive</Text>
              </View>
              <View style={styles.greyBg}>
                <Image resizeMode="stretch" style={styles.canvas} source={require('./Images/ios/special_first.png')} />
                <Text style={styles.testDesc}>Special First</Text>
              </View>
            </View>
          </View>
          <Text style={styles.title}>Annie is 2 months old now</Text>

        </View>

          <View style={styles.bottomWrap}>
           <ScrollView  ref="scrollView" contentContainerStyle={{flex:1, backgroundColor: '#fff', padding: 10}}>
           <TouchableHighlight style={{flex:1}} underlayColor={'transparent'} onPress={()=>navigate('MilestoneScreen')}>
            <View style={styles.card}>
              <Text style={styles.Title}>Baby give attention to voice?</Text>
              <Text style={styles.desc}>2-3 Months</Text>
            </View>
            </TouchableHighlight>
             <TouchableHighlight style={{flex:1}}>
            <View style={styles.card}>
              <Text style={styles.Title}>Laugh in response of something</Text>
              <Text style={styles.desc}>3-6 Months</Text>
            </View>
            </TouchableHighlight>
             <TouchableHighlight style={{flex:1}}>
            <View style={styles.card}>
              <Text style={styles.Title}>Hold object with hold hand</Text>
              <Text style={styles.desc}>2-3 Months</Text>
            </View>
              </TouchableHighlight>
              <TouchableHighlight style={{flex:1}}>
            <View style={styles.card}>
              <Text style={styles.Title}>Laugh in response to something</Text>
              <Text style={styles.desc}>2-3Months</Text>
            </View>
              </TouchableHighlight>
          </ScrollView>
          </View>

      </View>
     </View>
   )
 }

}
