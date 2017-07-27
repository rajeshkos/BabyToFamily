import React,{Component} from 'react'
import {View,Text} from 'react-native'
import {Card} from 'react-native-elements';
import {CardItem} from './CardItem'
import style from './style'
import Switch from 'react-native-customisable-switch';
import {connect} from 'react-redux'
import {newupdateActivate,newupdateDeActivate,likecommentActivate,likecommentDeactivate,addmemberActivate,addmemberDeactivate} from './SettingActions';
 class NotificationSettings extends Component{
render(){
  const {newUpdate,likeComment,addMembers,newupdateActivate,newupdateDeActivate,likecommentActivate,likecommentDeactivate,addmemberActivate,addmemberDeactivate}=this.props;
  //const {}=actions;
  return(

       <Card containerStyle={[{flex:2,justifyContent:'center',margin:15,paddingBottom:15},style.curvedRadius]}>
       <Text style={{color:'#939ceb',marginBottom:8}}>Notification</Text>

                   <CardItem>
                         <View style={{flex:1}}>
                          <Text>New Update</Text>
                          </View>
                          <View style={{flex:1,alignItems:'flex-end'}}>
                          <Switch
                              value={newUpdate}
                              switchWidth={30}
                              switchHeight={15}
                              buttonWidth={15}
                              buttonHeight={15}
                              activeBackgroundColor={'#ff57a5'}
                              activeButtonBackgroundColor={'white'}
                              onChangeValue={(value)=>{value?newupdateActivate():newupdateDeActivate()}}
                          />
                           </View>
                   </CardItem>
                   <CardItem>
                         <View style={{flex:1}}>
                          <Text>Like,Comment</Text>
                          </View>
                          <View style={{flex:1,alignItems:'flex-end'}}>
                          <Switch
                             value={likeComment}
                             switchWidth={30}
                             switchHeight={15}
                             buttonWidth={15}
                             buttonHeight={15}
                             activeBackgroundColor={'#ff57a5'}
                             activeButtonBackgroundColor={'white'}
                             onChangeValue={(value)=>{value?likecommentActivate():likecommentDeactivate()}}
                          />
                           </View>
                   </CardItem>
                   <CardItem>
                       <View style={{flex:1}}>
                        <Text>New Member Add</Text>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                        <Switch
                           value={addMembers}
                           switchWidth={30}
                           switchHeight={15}
                           buttonWidth={15}
                           buttonHeight={15}
                           activeBackgroundColor={'#ff57a5'}
                           activeButtonBackgroundColor={'white'}
                            onChangeValue={(value)=>{value?addmemberActivate():addmemberDeactivate()}}

                        />
                         </View>
                   </CardItem>
                      </Card>
  )
}

}
const mapStateToProps=({Settings})=>{
  const {newUpdate,likeComment,addMembers}=Settings;

  return{
      newUpdate,
      likeComment,
      addMembers
  }

}
export default connect(mapStateToProps,{newupdateActivate,newupdateDeActivate,likecommentActivate,likecommentDeactivate,addmemberActivate,addmemberDeactivate})(NotificationSettings)
