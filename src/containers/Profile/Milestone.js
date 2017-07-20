import React,{Component} from 'react'
import {View,Text} from 'react-native';
import { Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
import StarRating from 'react-native-star-rating';
export default class Milestone extends Component{
  constructor(props){
    super(props);
    this.state = {
      starCount: 3.5,

    };
  }
  render(){
    const {cardTitle,cardDesc,selectedStar,rating}=this.props;
    return(

    <Card
      containerStyle={styles.card}
      wrapperStyle={styles.wrapperStyle}
    >
      <View style={styles.topBar}>
        <Text style={styles.cardTitle}>
            {cardTitle}
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
                selectedStar={selectedStar}
                starColor={'#FFDA43'}
                starSize={25}
                starStyle={styles.starStyle}
                rating={rating}
              />
          </View>
        </View>
        <Text style={styles.cardDesc}>
          {cardDesc}
        </Text>
    </Card>

  )

  }

}
