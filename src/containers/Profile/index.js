import React,{Component} from 'react'
import {Text,View, StyleSheet, Image, Dimensions, ScrollView} from 'react-native'
import { Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import StarRating from 'react-native-star-rating';
import Tabs from '../Tabs'
import styles from './style';
const {width}=Dimensions.get('window')
export default class Profile extends Component{
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
   return(
	<Tabs {...this.props}>
		<View style={styles.headerTop}>
			<View style={styles.subElement}>
				<Icon
				 name="ios-arrow-back"
				 size={26}
				 color="black"
				 style={styles.iconStyle}
				/>
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
		<ScrollView  ref="scrollView" contentContainerStyle={{flex:1,  justifyContent: 'center', backgroundColor: '#fff'}}>

			<View style={styles.mainContainer}>
				<View style={styles.topConatiner}>
					<View style={styles.bgView}>
						<Image style={styles.bgImage} resizeMode= 'stretch' source={require('./Images/ios/bg.png')}>
						 <View style={styles.profileInfo}>
								<View style={styles.babyImage}>
									<View style={styles.imageWapper}>
										<Image style={styles.image} source={require('./Images/05.png')} />
								    </View>
								</View>
								<Text style={styles.name}>Annie Smith</Text>
								<View style={styles.age}>
									<Text style={styles.ageText}>8 months 2 days old</Text>
								</View>
							</View>
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
						</Image>
					</View>
				</View>
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
					<View style={styles.cardBox}>
						<Card 
							containerStyle={styles.card}
							wrapperStyle={styles.wrapperStyle}
						>
							<View style={styles.topBar}>
								<Text style={styles.cardTitle}>
						    		Social
						  		</Text>
						  		<View style={styles.ratingWrap}>
					    			<StarRating
								        disabled={false}
								        emptyStar={'ios-star-outline'}
								        fullStar={'ios-star'}
								        halfStar={'ios-star-half'}
								        iconSet={'Ionicons'}
								        emptyStarColor={'#FFDA43'}
								        maxStars={5}
								        rating={this.state.starCount}
								        selectedStar={(rating) => this.onStarRatingPress(rating)}
								        starColor={'#FFDA43'}
								        starSize={25}
								        starStyle={styles.starStyle} 
								        rating={4.5}
								      />
					    		</View>
					    	</View>
					  		<Text style={styles.cardDesc}>
					    		Baby gets good ranking in this category!
					  		</Text>
						</Card>
						<Card 
							containerStyle={styles.card}
							wrapperStyle={styles.wrapperStyle}
						>
							<View style={styles.topBar}>
								<Text style={styles.cardTitle}>
						    		Communication
						  		</Text>
						  		<View style={styles.ratingWrap}>
					    			<StarRating
								        disabled={false}
								        emptyStar={'ios-star-outline'}
								        fullStar={'ios-star'}
								        halfStar={'ios-star-half'}
								        iconSet={'Ionicons'}
								        emptyStarColor={'#FFDA43'}
								        maxStars={5}
								        rating={this.state.starCount}
								        selectedStar={(rating) => this.onStarRatingPress(rating)}
								        starColor={'#FFDA43'}
								        starSize={25}
								        starStyle={styles.starStyle} 
								        rating={3.5}
								      />
					    		</View>
					    	</View>
					  		<Text style={styles.cardDesc}>
					    		Need to improve in this category
					  		</Text>
						</Card>
						<Card 
							containerStyle={styles.card}
							wrapperStyle={styles.wrapperStyle}
						>
							<View style={styles.topBar}>
								<Text style={styles.cardTitle}>
						    		Cognitive
						  		</Text>
						  		<View style={styles.ratingWrap}>
					    			<StarRating
								        disabled={false}
								        emptyStar={'ios-star-outline'}
								        fullStar={'ios-star'}
								        halfStar={'ios-star-half'}
								        iconSet={'Ionicons'}
								        emptyStarColor={'#FFDA43'}
								        maxStars={5}
								        rating={this.state.starCount}
								        selectedStar={(rating) => this.onStarRatingPress(rating)}
								        starColor={'#FFDA43'}
								        starSize={25}
								        starStyle={styles.starStyle} 
								        rating={4.5}
								      />
					    		</View>
					    	</View>
					  		<Text style={styles.cardDesc}>
					    		Baby gets good ranking in this category!
					  		</Text>
						</Card>
						<Card 
							containerStyle={styles.card}
							wrapperStyle={styles.wrapperStyle}
						>
							<View style={styles.topBar}>
								<Text style={styles.cardTitle}>
						    		Physical
						  		</Text>
						  		<View style={styles.ratingWrap}>
					    			<StarRating
								        disabled={false}
								        emptyStar={'ios-star-outline'}
								        fullStar={'ios-star'}
								        halfStar={'ios-star-half'}
								        iconSet={'Ionicons'}
								        emptyStarColor={'#FFDA43'}
								        maxStars={5}
								        rating={this.state.starCount}
								        selectedStar={(rating) => this.onStarRatingPress(rating)}
								        starColor={'#FFDA43'}
								        starSize={25}
								        starStyle={styles.starStyle} 
								        rating={3.5}
								      />
					    		</View>
					    	</View>
					  		<Text style={styles.cardDesc}>
					    		Need to improve in this category
					  		</Text>
						</Card>
						<Card 
							containerStyle={styles.card}
							wrapperStyle={styles.wrapperStyle}
						>
							<View style={styles.topBar}>
								<Text style={styles.cardTitle}>
						    		Special First
						  		</Text>
						  		<View style={styles.ratingWrap}>
					    			<StarRating
								        disabled={false}
								        emptyStar={'ios-star-outline'}
								        fullStar={'ios-star'}
								        halfStar={'ios-star-half'}
								        iconSet={'Ionicons'}
								        emptyStarColor={'#FFDA43'}
								        maxStars={5}
								        rating={this.state.starCount}
								        selectedStar={(rating) => this.onStarRatingPress(rating)}
								        starColor={'#FFDA43'}
								        starSize={25}
								        starStyle={styles.starStyle} 
								        rating= {3.5}
								      />
					    		</View>
					    	</View>
					  		<Text style={styles.cardDesc}>
					    		Need to improve in this category
					  		</Text>
						</Card>
					</View>
				</View>
			</View>
		</ScrollView>
	</Tabs>
   )
 }

}
