import React,{Component} from 'react'
import {View,Text} from 'react-native'
import {Card} from 'react-native-elements';
import {CardItem} from './CardItem'
import style from './style'
import Switch from 'react-native-customisable-switch';
import {connect} from 'react-redux'
import {fingerPrintActivate,fingerPrintDeactivate,autoplayActivate,autoplayDecActivate} from './SettingActions'
 class OtherSettings extends Component{
render(){
  const {fingerPrintActivate,fingerprint,fingerPrintDeactivate,autoplayActivate,autoplayDecActivate,autoplayVideo}=this.props;

  return(

       <Card containerStyle={[{flex:1,justifyContent:'center',margin:15,paddingBottom:15},style.curvedRadius]}>
       <Text style={{color:'#939ceb',marginBottom:8}}>Other Settings</Text>
           <CardItem>
               <View style={{flex:1}}>
                <Text>Finger Print Login</Text>
                </View>
                <View style={{flex:1,alignItems:'flex-end'}}>
                <Switch
                   value={fingerprint}
                    switchWidth={30}
                    switchHeight={15}
                    buttonWidth={15}
                    buttonHeight={15}
                    activeBackgroundColor={'#ff57a5'}
                    activeButtonBackgroundColor={'white'}
                    onChangeValue={(value)=>{value?fingerPrintActivate():fingerPrintDeactivate()}}
                />
                 </View>
           </CardItem>
         <CardItem>
             <View style={{flex:1}}>
              <Text>Auto Play Video</Text>
              </View>
              <View style={{flex:1,alignItems:'flex-end'}}>
              <Switch
                 value={autoplayVideo}
                 switchWidth={30}
                 switchHeight={15}
                 buttonWidth={15}
                 buttonHeight={15}
                 activeBackgroundColor={'#ff57a5'}
                 activeButtonBackgroundColor={'white'}
                 onChangeValue={(value)=>{value?autoplayActivate():autoplayDecActivate()}}
              />
               </View>
         </CardItem>
       </Card>
  )
}

}
const mapStateToProps=({Settings})=>{
const {fingerprint,autoplayVideo}=Settings;
  return{
    fingerprint,
    autoplayVideo
  }
}

export default connect(mapStateToProps,{fingerPrintActivate,fingerPrintDeactivate,autoplayActivate,autoplayDecActivate})(OtherSettings)
