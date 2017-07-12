/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  Image,
  TouchableHighlight,
  ScrollView,
  Platform,
} from 'react-native';
import { Button } from 'react-native-elements';
import InputWithIcon  from '../../components/InputWithIcon'
import ProgressBar from '../../components/ProgressBar'
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-datepicker'
import { Actions} from 'react-native-router-flux';
import Modal from 'react-native-modalbox';
var {GooglePlacesAutocomplete} = require('react-native-google-places-autocomplete');

import MCIcon from 'react-native-vector-icons/Ionicons';

var locationName;
 class AddBaby extends Component {
   constructor() {
     super();
     this.state = {
       image: null,
       isDisabled: false,
       date: '26-12-2017',
       isOpen: false,
       isDisabled: false,
       swipeToClose: true,
       sliderValue: 0.3,
       location: 'Location',
     };
   }
   onClose() {
     console.log('Modal just closed');
   }

   onOpen() {
     console.log('Modal just openned');
   }

   onClosingState(state) {
     console.log('the open/close of the swipeToClose just changed');
   }

  render() {
    const {width,height}=Dimensions.get('window');

    const {email,password,name,mobile,SignupUpdate,SignupChecking,cpassword,data,loading}=this.props;
    console.log("data------>",width, height);

    return (
      <ScrollView  ref="scrollView" contentContainerStyle={{flex:1,  justifyContent: 'center'}}>

      <View style={styles.mainContainerTop}>
        <StatusBar hidden={true} />
        <Modal style={[styles.modal, styles.modal3]} animationInTiming={2000} position={"center"} ref={"modal3"} isOpen={this.state.isOpen} onClosed={() => this.setState({isOpen: false})} isDisabled={this.state.isDisabled}>
        <View style={styles.mainContainerOne}>
        <View style={styles.topBar}><Text style={styles.modalHeading}>Search Location</Text></View>
        <GooglePlacesAutocomplete
           placeholder='Search'
           minLength={2}
           autoFocus={true}
           returnKeyType={'search'}
           listViewDisplayed='auto'
           fetchDetails={true}
           renderDescription={(row) => row.description}
           onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
             this.setState({isOpen: false});
             this.setState({location: details["formatted_address"]});
           }}
           getDefaultValue={() => {
             return ''; // text input default value
           }}
           query={{
             // available options: https://developers.google.com/places/web-service/autocomplete
             key: 'AIzaSyA5m8U4SYKBhV4IldQs409Jv28L3avWYtM',
             language: 'en', // language of the results
             types: '(cities)', // default: 'geocode'
           }}
            styles={{
                  description: {
                    fontWeight: 'bold',
                  },
                  predefinedPlacesDescription: {
                    color: '#1faadb',
                  },
                  textInputContainer: {
                    marginTop: 5,
                    width: 300,
                  },
                  listView: {
                    flex: 1,
                  },
                  textInput: {

                  }
                }}
               currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
               currentLocationLabel="Current location"
               nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
               GoogleReverseGeocodingQuery={{
                 // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
               }}
               GooglePlacesSearchQuery={{
                 // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                 rankby: 'distance',
                 types: 'food',
               }}
               debounce={200}

             />
             </View>
        </Modal>
        <View style={styles.topBar}><Text style={styles.navBar}>Add Baby</Text></View>
        <View style={styles.componentContainer}>
          <View style={styles.centerImage}>
            <View style={styles.box}>
              <View style={styles.imageWrap}>
                <Image resizeMode="stretch" source={require('./Images/addbaby/baby-avtar.png')} />
              </View>
              <Text style={styles.babyTitle}>Baby Avtar</Text>

            </View>

          </View>
          <View style={styles.componentSubContainer}>
            <View style={styles.halfFlex}>
              <InputWithIcon
                iconName= {require('./Images/addbaby/baby1.png')}
                value={"Baby's Name"}
                placeholder="Baby's Name"
                secureTextEntry={false}
                keyboardType="default"
                placeholderTextColor="#333333"
                onChangeText={(text)=>console.log(text)}
               />
            </View>
            <View style={styles.boxWrap}>
              <View style={styles.halfBox}>
                <InputWithIcon
                iconName= {require('./Images/addbaby/boy.png')}
                value={'Boy'}
                placeholder="Boy"
                secureTextEntry={false}
                keyboardType="default"
                placeholderTextColor="#333333"
                onChangeText={(text)=>console.log(text)}
               />
              </View>
              <View style={styles.halfBox}>
                <InputWithIcon
                iconName= {require('./Images/addbaby/girl.png')}
                value={"Girl"}
                placeholder="Girl"
                secureTextEntry={false}
                keyboardType="default"
                placeholderTextColor="#333333"
                onChangeText={(text)=>console.log(text,"hii")}
               />
              </View>
            </View>
            <View style={styles.boxWrap}>
              <View style={styles.dateWrap}>
            <DatePicker
              style={{width: '100%', }}
              date={this.state.date}
              mode="date"
              placeholder="DOB"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              iconSource ={require('./Images/addbaby/dob.png')}

              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  bottom: 10,
                  marginLeft: 0,
                  height: 19,
                  width: 16
                },
                btnTextCancel:{
                  color:'blue'
                 },
                 btnTextConfirm:{
                    color:'green'
                 },
                dateInput: {
                  marginLeft: 24,
                  borderWidth: 0,
                  height: 24,
                  flex:1,
                  alignItems:'flex-start'
                },
                dateText:{
                },
                placeholderText: {
                  fontSize:17,
                  width: 200,
                  color:'black',
                }

              }}
              onDateChange={(date) => {this.setState({date: date})}}
            />
            </View>
            </View>
            <View style={styles.boxWrap}>
                 <InputWithIcon
                iconName= {require('./Images/addbaby/location.png')}
                value={this.state.location}
                placeholder="Location"
                secureTextEntry={false}
                keyboardType="default"
                placeholderTextColor="#333333"
                onFocus={(event) => {
                  this.setState({isOpen: true});
                  }}

               />
             </View>
            <View style={styles.boxWrap}>
                <InputWithIcon
                iconName= {require('./Images/addbaby/relation.png')}
                value={'Relation'}
                placeholder="Relation"
                secureTextEntry={false}
                keyboardType="default"
                placeholderTextColor="#333333"
                onChangeText={(text)=>console.log("test")}
               />
            </View>
            {loading?
              <ProgressBar/>
              :null
            }
            <View style={{flex:1, alignSelf: 'stretch'}}>
          {/*    <Button
                 buttonStyle={{backgroundColor:'red'}}
                 textStyle={{textAlign: 'center', ...Platform.select({
                   ios: {
                     fontFamily: 'GothamRounded-Bold',
                   },
                   android: {
                     fontFamily: 'gotham_rounded_bold',
                   },
                 }),
               }}
               title={`Add Baby`}
               onPress={()=>this.signUp(this.props)}
               />
             */}
            <Button
              buttonStyle={styles.btnStyle}
              textStyle={{textAlign: 'center', ...Platform.select({
                ios: {
                  fontFamily: 'GothamRounded-Bold',
                },
                android: {
                  fontFamily: 'gotham_rounded_bold',
                },
              }),
            }}
              title={`Add Baby`}
              onPress={()=>console.log("hii")}
            />

            </View>

          </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}


export default AddBaby;
