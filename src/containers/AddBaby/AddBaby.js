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
  NativeModules,
  PixelRatio
} from 'react-native';
import { Button } from 'react-native-elements';
import InputWithIcon  from 'app/components/InputWithIcon'
import Loading from 'app/components/Loading'
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-datepicker'
import {connect} from 'react-redux';
const {width,height}=Dimensions.get('window');
import Modal from 'react-native-modalbox';
const ImagePicker = NativeModules.ImageCropPicker;
var {GooglePlacesAutocomplete} = require('react-native-google-places-autocomplete');
import {AddBabyUpdate,AddBabyUpload,AddBabyAdded} from  './AddBabyActions'
import moment from 'moment'
import {validation} from './validation';
import Api from 'app/lib/api'

import MCIcon from 'react-native-vector-icons/Ionicons';
//md-close-circle
var locationName;
 class AddBaby extends Component {
   constructor() {
     super();
     this.state = {
       image: null,
       isDisabled: false,
       isOpen: false,
       isDisabled: false,
      // swipeToClose: true,
    //   sliderValue: 0.3,
       genderState:'boy'
     };
   }
  //  onClose() {
  //    console.log('Modal just closed');
  //  }
   //
  //  onOpen() {
  //    console.log('Modal just openned');
  //  }
   //
  //  onClosingState(state) {
  //    console.log('the open/close of the swipeToClose just changed');
  //  }

   setFocus(event, heightUp){
     this.refs.scrollView.scrollTo({y: height-heightUp, animated: true});
   }
   setunFocus(event, heightdown){
       this.refs.scrollView.scrollTo({y: 0, animated: true});

   }

submit=()=>{
    const {AddBabyUpdate,Addbaby,AddBabyUpload,data}=this.props;
    const {image}=this.state;
    console.log("image",image);
    AddBabyUpdate({prop:'gender',value:this.state.genderState})
      const error=validation(Addbaby);

  //   if(error==='Successfully Registerd'){
      // let o1 = { email:'iamshimil@gmail.com' };
      // let  o2 = {data:{name:'shimil',gender:'boy',dob:'2017-05-1',location:'culcutta',relation:'father',image:this.state.image.uri}};
      // let obj = Object.assign(o1, o2);

if(image){
        alert(error)
  if(error==='Successfully Registerd'){
    //  let profile=new Object();
  //  let data=new Object();
      //  profile['email']='iamshimil@gmail.com'
      //  profile['data']=data;
      //  data['name']=Addbaby.name;
      //  data['gender']=Addbaby.gender;
      //  data['dob']=Addbaby.date;
      //  data['location']=Addbaby.location;
      //  data['relation']=Addbaby.relation;
        var formData = new FormData();
        formData.append("email","iashimil@gmail.com");
        formData.append("name",Addbaby.name);
        formData.append("gender",Addbaby.gender);
        formData.append("dob",Addbaby.date);
        formData.append("location",Addbaby.location);
        formData.append("relation",Addbaby.relation);
        formData.append('images',{name:image.uri.match(/[-_\w]+[.][\w]+$/i)[0],uri:image.uri,type: 'image/jpg'})

      //  console.log("path",image.uri.match(/[-_\w]+[.][\w]+$/i)[0]);
      //  send.append()

      //  data['profileimage']=this.state.image.uri;
        //console.log("profile",profile);
  //    AddBabyUpload(formData);
      //  console.log(this.props);
      //alert("Successfully Added")
         this.props.AddBabyUpload({formData})
         this.props.AddBabyAdded()
     }
}else{
  alert("Select Profile Picture")
}




}

renderAsset=(image)=> {
  return (
  <View style={styles.imageWrap}>
    <Image  resizeMode="stretch" style={styles.selected}  source={image} />
    </View>
  )
}
pickSingleFromGallery=(cropping)=> {
  const {AddBabyUpdate}=this.props;
  this.refs.modal.close();
  ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: cropping,
      includeBase64: true
    }).then(image => {
      console.log('received base64 image',image);
      this.setState({
        image: {uri: image.path, width:image.width, height: image.height,mime:image.mime},

      });
      AddBabyUpdate({prop:'image',value:true})
    }).catch(e => alert(e));
  }
  pickSingleWithCamera(cropping) {
    this.refs.modal.close();
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
    }).then(image => {
      console.log('received image', image);
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height},

      });
    }).catch(e => alert(e));
  }
  render() {
    const {width,height}=Dimensions.get('window');

    const {name,gender,date,location,relation,loading,sucecsss,AddBabyUpdate,navigation}=this.props;
    const {genderState}=this.state;
 //console.log("imagesxxx",this.state.image);
    return (
      <View style={styles.mainContainerTop}>
        <ScrollView  ref="scrollView" contentContainerStyle={{flex:1,  justifyContent: 'center'}}>
        <StatusBar hidden={true} />
          <Modal
            style={[styles.modal, styles.modal3]}
            animationInTiming={2000}
            position={"center"}
            ref={"modal3"}
            isOpen={this.state.isOpen}
            onClosed={() => this.setState({isOpen: false})}
            isDisabled={this.state.isDisabled}>
        <View style={styles.mainContainerOne}>

        <View style={styles.topBar}>
        <View style={{position:'absolute',bottom:10}}>
        <Text style={styles.modalHeading}>Search Location </Text>
        </View>
         <TouchableHighlight
         underlayColor='transparent'
         style={{position:'absolute',right:2,top:5,width:50,height:50,alignItems:'center',justifyContent:'center'}}
          onPress={()=>this.setState({isOpen:false})}>
                 <MCIcon name="md-close-circle" size={25} color="#ffff" />
         </TouchableHighlight>
        </View>
        <GooglePlacesAutocomplete
           placeholder='Search'
           minLength={2}
           autoFocus={true}
           returnKeyType={'search'}
           listViewDisplayed='auto'
           fetchDetails={true}
           renderDescription={(row) => row.description}
           onPress={(data, details = null) => {
             this.setState({isOpen: false});
             AddBabyUpdate({prop:'location',value:details["formatted_address"]})
           }}
           getDefaultValue={() => {
             return '';
           }}
           query={{

             key: 'AIzaSyA5m8U4SYKBhV4IldQs409Jv28L3avWYtM',
             language: 'en',
             types: '(cities)',
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
                    fontFamily: 'GothamRounded-Book',
                  }
                }}
               currentLocation={false}
               currentLocationLabel="Current location"
               nearbyPlacesAPI='GooglePlacesSearch'
               GoogleReverseGeocodingQuery={{

               }}
               GooglePlacesSearchQuery={{
                 rankby: 'distance',
                 types: 'food',
               }}
               debounce={200}

             />
             </View>
        </Modal>
        <View style={styles.topBar}>
          <TouchableHighlight style={styles.icon} onPress={()=>navigation.goBack(null)} underlayColor={'transparent'}>
              <Icon name="md-arrow-round-back" size={30} color="#FFFFFF"   />
        </TouchableHighlight>
        <View style={{flex:3,alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.modalHeading}>Add Baby</Text>
        </View>
        <View style={{flex:1}}/>
  </View>
        <View style={styles.componentContainer}>
          <View style={styles.centerImage}>
            <View style={styles.box}>
              <TouchableHighlight style={styles.imageWrap} onPress={() => this.refs.modal.open()}>
              <View style={styles.imageWrap}>
              {this.state.image ?
                this.renderAsset(this.state.image) :
                <Image resizeMode="stretch" style={styles.canvas} source={require('./Images/addbaby/baby-avtar.png')} />}

               </View>
              </TouchableHighlight>


            </View>

          </View>
          <View style={styles.componentSubContainer}>
            <View style={styles.halfFlex}>
              <InputWithIcon
                iconName= {require('./Images/addbaby/baby1.png')}
                value={name}
                placeholder="Baby's Name"
                secureTextEntry={false}
                maxLength={20}
                keyboardType="default"
                placeholderTextColor="#333333"
                onChangeText={(text)=>AddBabyUpdate({prop:'name',value:text})}
               />
            </View>
            <View style={styles.boxWrap}>
              <TouchableHighlight style={styles.halfBox} onPress={()=>this.setState({genderState:'boy'})} underlayColor='transparent'>
                <View style={{flex:1,flexDirection:'row'}}>
                    <Image source={genderState=='boy'?require('./Images/addbaby/boy1.png'):require('./Images/addbaby/boy.png')} style={styles.smallavatr}/>
                    <Text style={genderState=='boy'?styles.genderactive:styles.genderdefault}>Boy</Text>
                 </View>
              </TouchableHighlight>

              <TouchableHighlight style={styles.halfBox} onPress={()=>this.setState({genderState:'girl'})} underlayColor='transparent'>
              <View style={{flex:1,flexDirection:'row'}}>
                <Image source={genderState=='girl'?require('./Images/addbaby/girl1.png'):require('./Images/addbaby/girl.png')} style={styles.smallavatr}/>
                <Text style={genderState=='girl'?styles.genderactive:styles.genderdefault}>Girl</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.boxWrap}>
              <View style={styles.dateWrap}>
              <DatePicker
                style={{width: '100%', }}
                date={date}
                mode="date"
                placeholder="DOB"
                format="YYYY-MM-DD"
                minDate="1980-05-01"
                maxDate="2050-06-01"
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
                  dateText:styles.dateinput,
                  placeholderText: {
                    fontSize:17,
                    width: 200,
                    color:'black',
                  }
                }}
                onDateChange={(date) =>AddBabyUpdate({prop:'date',value:date})}
              />
            </View>
            </View>
            <View style={styles.boxWrap}>
                 <InputWithIcon
                        iconName= {require('./Images/addbaby/location.png')}
                        value={location}
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
                    value={relation}
                    placeholder="Relation"
                    maxLength={20}
                    secureTextEntry={false}
                    keyboardType="default"
                    placeholderTextColor="#333333"
                    onChangeText={(text)=>AddBabyUpdate({prop:'relation',value:text})}
                    onFocus={(event) => {
                      this.setFocus(event, (height-250));
                      }}
                      onBlur={(event)=>this.setunFocus(event, (height-250))}
               />
            </View>
            {loading?
              <Loading/>
              :null
            }
            <View style={{flex:1, alignSelf: 'stretch'}}>

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
              onPress={()=>this.submit()}
            />

            </View>

          </View>
        </View>
        <Modal style={styles.modal } position={"center"} ref={"modal"} isDisabled={this.state.isDisabled}>
 <View style={{margin:10,padding:5}}>
  <TouchableHighlight style={styles.modalCard} onPress={() => this.pickSingleWithCamera(true)} underlayColor="transparent">
   <Text style={styles.modalFont}>Take Photo…</Text>
  </TouchableHighlight>
  <TouchableHighlight style={styles.modalCard}  onPress={() => this.pickSingleFromGallery(true)} underlayColor="transparent">
   <Text style={styles.modalFont}>Choose from Library…</Text>
  </TouchableHighlight>
  <TouchableHighlight style={styles.modalCard} onPress={() => this.refs.modal.close()} underlayColor="transparent">
   <Text style={styles.modalFont}>Cancel</Text>
  </TouchableHighlight>
  </View>
</Modal>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps=({Addbaby,Signup})=>{
  const {name,gender,date,location,relation,loading,sucecsss}=Addbaby;
  const {data}=Signup;
  return{
       name,
       gender,
       date,
       location,
       relation,
       loading,
       sucecsss,
       Addbaby,


  }

}

export default connect(mapStateToProps,{AddBabyUpdate,AddBabyUpload,AddBabyAdded}) (AddBaby);
