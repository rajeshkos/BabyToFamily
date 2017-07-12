import React,{Component} from 'react';
import{View} from 'react-native';
var {GooglePlacesAutocomplete} = require('react-native-google-places-autocomplete');


export default class Test extends Component{
  render(){
    return(
<View style={{flex:1}}>
      <GooglePlacesAutocomplete
       placeholder='Search'
       minLength={2} // minimum length of text to search
       autoFocus={false}
       returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
       listViewDisplayed='auto'    // true/false/undefined
       fetchDetails={true}
       renderDescription={(row) => row.description} // custom description render
       onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
         console.log(data);
         console.log(details);
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
         textInputContainer: {
      backgroundColor: 'rgba(0,0,0,0)',
      borderTopWidth: 0,
      borderBottomWidth:1,
    },
    container: {
      paddingLeft: 10,
      paddingRight: 10,
    },
         description: {
           fontWeight: 'bold',
         },
         predefinedPlacesDescription: {
           color: '#1faadb',
         },
       }}

       currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
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
    )
  }

}
