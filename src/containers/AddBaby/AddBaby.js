/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  Dimensions,
  Image,
  TouchableHighlight,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  NativeModules
} from 'react-native';
import { Button } from 'react-native-elements';
//import ImagePicker from 'react-native-image-crop-picker';
//const ImagePicker = NativeModules.ImageCropPicker;
//import PlaceAutoComplete from 'app/components/PlaceAutoComplete'
import InputWithIcon from 'app/components/InputWithIcon';
import DatePicker from 'react-native-datepicker'
//import Loading from '../../components/Loading'
//import Modal from 'react-native-modalbox';
import styles from './style';
//import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

 class AddBaby extends Component {
   constructor() {
     super();
     this.state = {
       image: null,
       isDisabled: false
     };
   }
signUp=(props)=>{
//  console.log(name,email,mobile,password,cpassword);
const { name, email, mobile, password, cpassword }=props;
          if (!email) {
              alert('Please enter your Email ID')
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
              alert( 'Invalid Email ID');
            }else if(!name){
             alert('Please enter your Name');
           }else if (!mobile) {
              alert(' Please enter your Mobile Number')
           }else if(isNaN(Number(mobile))){
             alert('Mobile must be number')
           }else if(!password){
             alert('Please enter your Password')

           }else if(!cpassword){

             alert('Please enter your Confirm Password')

           }else if(password!==cpassword){
             alert('Both Password must be same')
           }else{

            this.props.SignupChecking({name,email,mobile,password});
           }


}


renderAsset=(image)=> {
  return (
  <View style={styles.imageWrap}>
    <Image  resizeMode="stretch" style={{width:200,height:200,borderRadius:50}}  source={image} />
    </View>
  )
}
pickSingleFromGallery=(cropping)=> {
   console.log(cropping);
  }
  pickSingleWithCamera(cropping) {
   console.log(cropping);
  }

  render() {

  //  const {email,password,name,mobile,SignupUpdate,SignupChecking,cpassword,data,loading}=this.props;
//console.log("data------>",data);
    return (
<View style={{flex:1, flexDirection: 'column', alignItems: 'stretch'}}>
  <ScrollView  ref="scrollView" contentContainerStyle={{flex:1,  justifyContent: 'center',alignItems: 'stretch'}}>
    <StatusBar hidden={true} />
    <View style={{backgroundColor:'green',flexDirection:'row', justifyContent: 'center',alignItems: 'stretch'}}/>
      <View style={styles.topBar}><Text>Top bar</Text></View>
      <View style={styles.componentContainer}>
          <View style={styles.centerImage}>
            <View style={styles.box}>
              <TouchableHighlight  style={styles.imageWrap} onPress={() =>console.log("ggg")}>
                <View style={styles.imageWrap}>
                  {this.state.image ?
                  null :
                  <Image resizeMode="stretch" style={styles.canvas} source={require('./Images/addbaby/baby-avtar.png')} />}
                </View>
              </TouchableHighlight>
              <Text style={[styles.babyTitle,{ paddingTop:10,paddingBottom:15}]}>Baby Avtar</Text>
            </View>
          </View>
            <View style={{flex:1}}>

           </View>
          <KeyboardAvoidingView style={{flex:2,  backgroundColor: 'white', flexDirection: 'row'}} behavior='padding'>
          <View style={styles.componentSubContainer}>
            <View style={styles.halfFlex}>
              <InputWithIcon
                iconName= {require('./Images/addbaby/baby1.png')}
                value={'name'}
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
              <View style={styles.halfBox2}>
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
                      bottom: 7,
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
                      marginLeft: 36,
                      borderWidth: 0,
                      height: 24,
                      width: 200,
                      flex:1,
                      alignItems:'flex-start'

                    },
                    dateText:{

                     color:'red'
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

            <View style={styles.halfFlex}>
                <InputWithIcon

                iconName= {require('./Images/addbaby/relation.png')}
                value={'name'}
                placeholder="Relation"
                secureTextEntry={false}
                keyboardType="default"
                placeholderTextColor="#333333"
                onChangeText={(text)=>console.log("test")}
               />
            </View>

            <View style={{flex:1, alignSelf: 'stretch'}}>
              <Button
                buttonStyle={styles.btnStyle}
                textStyle={{textAlign: 'center', ...Platform.select({
                  ios: {

                  },
                  android: {

                  },
                }),
              }}
                title={`Add Baby`}
                onPress={()=>console.log('hiii')}
              />
            </View>

            </View>
             </KeyboardAvoidingView>
            </View>


</ScrollView>

</View>

    );
  }
}


export default AddBaby;
