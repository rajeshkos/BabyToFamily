import React,{Component} from 'react'
import {Text,
  View,
   StyleSheet,
   Image,
   Dimensions,
   ScrollView,
   Animated,
   PanResponder,
   LayoutAnimation
 } from 'react-native'
import { Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import StarRating from 'react-native-star-rating';
import Banner  from 'app/components/Banner'
import Tabs from '../Tabs'
import styles from './style';
const {width}=Dimensions.get('window')
import Milestone from './Milestone'
export default class Profile extends Component{
  constructor(props) {
    super(props);
    this.state = {
        social:2.5,
        communication:1.5,
        congnitive:2.5,
        specialfirst:1.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
 render(){
     const {navigation,dispatch}=this.props;
   return(
	<Tabs {...this.props}>
		<View style={styles.headerTop}>
			<View style={styles.subElement}>
				{/*<Icon
				 name="ios-arrow-back"
				 size={26}
				 color="black"
				 style={styles.iconStyle}
         onPress={()=>{navigation.navigate('Auth')}}
				/>*/}
			</View>
			<View style={styles.subHead}>
				<Text style={styles.fontStyle}>Baby Profile</Text>
			</View>
			<View style={styles.subRightElement}>
				<MIcon
				 name="mode-edit"
				 size={22}
				 color="black"
				 style={styles.iconStyle}
				/>
			</View>
		</View>
		<View  ref="scrollView" style={{flex:1,  justifyContent: 'center', backgroundColor: '#fff'}}>

			<View style={styles.mainContainer}>

				<Banner >
				 <View style={styles.bottomBar}>
                <View style={styles.barIcon}>
                  <Image style={styles.iconImage} source={require('./Images/ios/milestone.png')} />
                  <Text style={styles.iconDesc}>2</Text>
                </View>
                <View style={styles.barIcon}>
                  <View style={styles.centerIcon}>
                    <Image style={styles.iconImage} source={require('./Images/ios/premium.png')} />
                    <Text style={styles.iconDesc}>Premium</Text>
                  </View>
                </View>
                <View style={styles.barIcon}>
                  <Image style={styles.iconImage} source={require('./Images/ios/photo.png')} />
                  <Text style={styles.iconDesc}>30</Text>
                </View>
            </View>
				</Banner>

				<View style={styles.cardWrap}>
					<View style={styles.leftText}>
						<MIcon
							 name="add-circle-outline"
							 size={18}
							 color="#FE57A5"
							 style={styles.sideIcon}
							/>
						<Text style={styles.pinkText}>Milestone</Text>
					</View>
					<ScrollView contentContainerStyle={styles.cardBox}>
					 <Milestone
             cardTitle="Social"
             cardDesc="Baby gets good ranking in this category!"
             rating={this.state.social}
             selectedStar={(rating)=>this.setState({social:rating})}
           />
           <Milestone
             cardTitle="Communication"
             cardDesc="Needs to improve in this Category"
             rating={this.state.communication}
             selectedStar={(rating)=>this.setState({communication:rating} )}
           />
           <Milestone
             cardTitle="Congnitive"
             cardDesc="Baby gets good ranking in this category!"
             rating={this.state.congnitive}
             selectedStar={(rating)=>this.setState({congnitive:rating} )}
           />
           <Milestone
             cardTitle="Special First"
             cardDesc="Needs to improve in this Category"
             rating={this.state.specialfirst}
             selectedStar={(rating)=>this.setState({specialfirst:rating} )}
           />

					</ScrollView>
				</View>
			</View>
		</View>
	</Tabs>
   )
 }

}
