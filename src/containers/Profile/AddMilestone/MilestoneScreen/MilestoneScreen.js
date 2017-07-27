import React,{Component} from 'react'
import {Text,View, StyleSheet, Image, Dimensions, ScrollView} from 'react-native'
import { Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollTabBar from 'app/components/ScrollTabBar';
import { CheckBox } from 'react-native-elements';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import Tabs from 'app/containers/Tabs';
import StarMilestone from './StarMilestone';
import Header from './Header'
const {width}=Dimensions.get('window')
const data=['Social','Communication','Cognitive','Physical','Special First']
export default class MilestoneScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      starCount: 4.5,
      first:false,
      second:false,
      third:false,
      four:false


    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  renderTabs=()=>{
  const {first,second,third,four}=this.state;
    return(
      data.map((key,index)=>(

  

        <View title={key} style={styles.Container} key={index}>
          <View style={styles.imageCard}>
            <Image source={require('./Images/ios/baby.jpg')} style={styles.babyImage}>
            </Image>
            <Image style={styles.ratingWrap} source={require('./Images/ios/gardeint.png')} >
              <StarMilestone
                 rating={this.state.starCount}
                 selectedStar={(rating)=>this.setState({starCount:rating})}
                 style={styles.starStyle}
               />
            </Image>
          </View>
          <View style={styles.subCategory}>
            <ScrollView  ref="scrollView" contentContainerStyle={{flex:1,  flexDirection: 'column'}}>

                <CheckBox
                  title='An action in which the individual responds successfully to an environmental demand. Adaptive responses require good sensory integration.'
                  checked={first}
                  checkedIcon='check-circle'
                  uncheckedIcon='circle-o'
                  checkedColor='#00a650'
                  uncheckedColor='#a5a5a5'
                  containerStyle={first?styles.checkActiveWrap:styles.checkWrap}
                  textStyle={styles.textFont}
                  //onPress={()=>this.setState({first:!first})}
                />


                <CheckBox
                  title='An action in which the individual responds successfully to an environmental demand. Adaptive responses require good sensory integration.'
                  checked={second}
                  checkedIcon='check-circle'
                  uncheckedIcon='circle-o'
                  checkedColor='#00a650'
                  uncheckedColor='#a5a5a5'
                  containerStyle={second?styles.checkActiveWrap:styles.checkWrap}
                  textStyle={styles.textFont}
                  //onPress={()=>this.setState({second:!second})}
                />

                <CheckBox
                  title='An action in which the individual responds successfully to an environmental demand. Adaptive responses require good sensory integration.'
                  checked={third}
                  checkedIcon='check-circle'
                  uncheckedIcon='circle-o'
                  checkedColor='#00a650'
                  uncheckedColor='#a5a5a5'
                  containerStyle={third?styles.checkActiveWrap:styles.checkWrap}
                  textStyle={styles.textFont}
                  //onPress={()=>this.setState({third:!third})}
                />

                <CheckBox
                  title='An action in which the individual responds successfully to an environmental demand. Adaptive responses require good sensory integration.'
                  checked={four}
                  checkedIcon='check-circle'
                  uncheckedIcon='circle-o'
                  checkedColor='#00a650'
                  uncheckedColor='#a5a5a5'
                  containerStyle={four?styles.checkActiveWrap:styles.checkWrap}
                  textStyle={styles.textFont}
                  //onPress={()=>this.setState({four:!four})}
                />
            </ScrollView>
          </View>

        </View>


)

    )
    )
  }
  render() {
    const {navigation}=this.props;
    return (


        <View style={{flex:1}}>
         <Header
           navigation={navigation}
         />
          <ScrollTabBar tabstyle={{backgroundColor:'#939ceb'}}>
            {this.renderTabs()}
          </ScrollTabBar>

        </View>

    );
  }
}
