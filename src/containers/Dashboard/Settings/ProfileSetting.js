import React,{Component} from 'react'
import {View,Text} from 'react-native'
import {Card} from 'react-native-elements';
import {CardItem} from './CardItem'
import style from './style'
import {connect} from 'react-redux'
class ProfileSetting extends Component{
render(){
  return(

    <Card
    containerStyle={[{flex:2,justifyContent:'center',margin:15,paddingBottom:15},style.curvedRadius]}
    >
    <Text style={{color:'#939ceb',marginBottom:8}}> Profile</Text>

            <CardItem>
                  <View style={{flex:1}}>
                   <Text>Username</Text>
                   </View>
                   <View style={{flex:1}}>
                    <Text>bbbbb</Text>
                    </View>
            </CardItem>
            <CardItem>
                  <View style={{flex:1}}>
                   <Text>Email</Text>
                   </View>
                   <View style={{flex:1}}>
                    <Text>iamshimil@gmail.com</Text>
                    </View>
            </CardItem>
            <CardItem>
                    <View style={{flex:1}}>
                     <Text>Mobile</Text>
                     </View>
                     <View style={{flex:1}}>
                      <Text>9633898851</Text>
                      </View>
            </CardItem>
            <CardItem>
                  <View style={{flex:1}}>
                   <Text>Date of Birth</Text>
                   </View>
                   <View style={{flex:1}}>
                    <Text>10/06/2016</Text>
                    </View>
            </CardItem>


    </Card>

  )
}

}
export default connect(null,null)(ProfileSetting)
