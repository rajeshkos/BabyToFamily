import React,{Component} from 'react';
import {View,TouchableHighlight,TextInput,Text, Image, Dimensions} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';
const {width,height}=Dimensions.get('window');

export default class Banner extends Component {
  render(){
    const {children}=this.props;
    return(
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
             {children}
          </Image>
        </View>
      </View>
    )
  }
}