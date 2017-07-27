import React,{Component} from 'react';
import {View,Text,TouchableHighlight,StyleSheet,ScrollView} from 'react-native';
import Switch from 'react-native-customisable-switch';
import {Card,Button} from 'react-native-elements';

import { CheckBox } from 'react-native-elements'
import * as actions from './SettingActions'
import {connect} from 'react-redux';
import {CardItem} from './CardItem'
import Header from './Header'
import ProfileSetting from './ProfileSetting'
import NotificationSettings from './NotificationSettings'
import OtherSettings from './OtherSettings'
import style from './style'

 class Settings extends Component{
  constructor(props){
    super(props);
    this.state={
      fingerPrint:false
    }
  }

  render(){
    const {navigation,fingerPrint,fingerPrintActivate}=this.props;
  console.log(actions.fingerPrintActivate);
        return(
          <View style={style.container}>
            <Header
              navigation={navigation}
               title={'Settings'}
              />
  <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
          <View style={style.headerContainer}>
          <Text style={style.header}>Account Settings</Text>
          </View>
          <ProfileSetting/>
      <View style={style.buttonContainer}>
      <Button
         large
          buttonStyle={style.buttonStyle}
          color={'black'}
          fontSize={14}
          fontWeight={'500'}
         title='Change Password'
         onPress={()=>navigation.navigate('ChangePassword')}
          />
      </View>
        <View style={style.headerContainer}>
        <Text style={style.header}>App Settings</Text>
        </View>
                  <NotificationSettings                  
                  />
                    <OtherSettings />

   <View style={style.headerContainer}>
   <Text style={style.header}>Contact us</Text>
   </View>
   <View style={style.buttonContainer}>
   <Button
      large
       buttonStyle={style.buttonStyle}
       color={'black'}
       fontSize={14}
       fontWeight={'500'}
      title='Help & Support' />
   </View>

    <Card containerStyle={[{flex:1,justifyContent:'center',margin:15,paddingBottom:15},style.curvedRadius]}>
   <Text style={{color:'#939ceb',marginBottom:8}}>Legal</Text>
   <Text style={{color:'#939ceb',marginBottom:8}}>About</Text>

   </Card>

 </ScrollView>
          </View>
        )
  }
}
const mapStateToProps=({Settings})=>{
  const {fingerprint}=Settings;

  return{
       fingerprint

  }

}


export default connect(mapStateToProps,null)(Settings)
