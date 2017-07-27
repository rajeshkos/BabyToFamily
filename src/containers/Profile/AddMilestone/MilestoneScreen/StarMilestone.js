import React,{Component} from 'react'
import {Image,Text,View} from 'react-native';
import { Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
import StarRating from 'react-native-star-rating';
export default class StarMilestone extends Component{
  constructor(props){
    super(props);
    this.state = {
      starCount: 3.5,

    };
  }
  render(){
    const {cardTitle,cardDesc,selectedStar,rating}=this.props;
    return(
    <View>
      <StarRating
        disabled={false}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        emptyStarColor={'#FFDA43'}
        maxStars={5}
        selectedStar={selectedStar}
        starColor={'#FFDA43'}
        starSize={20}
        starStyle={styles.starStyle}
        rating={rating}
        />
    </View>
  )

  }

}
