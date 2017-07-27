import React,{Component} from 'react';
import {View,Text,TextInput} from 'react-native';
import Header from './Header'
import {Card,Button} from 'react-native-elements'
import style from './style'
import {CardItem} from './CardItem'

export default class ChangePassword extends Component{
  submit=()=>{



    }
  render(){
    const {navigation}=this.props;
    return(

     <View style={{flex:1,backgroundColor:'white'}}>
      <Header navigation={navigation} title={'ChangePassword'}/>
       <View style={{flex:1,padding:10}}>
        <Card containerStyle={style.curvedRadius}>
        <CardItem style={{height:50,alignItems:'center'}}>
        <TextInput
         style={{height: 40,flex:1}}
         underlineColorAndroid='transparent'
         placeholder="Current Password"
         onChangeText={(text) => this.setState({text})}
       />
        </CardItem>
        <CardItem style={{height:50,alignItems:'center'}}>
        <TextInput
         style={{height: 40,flex:1}}
         underlineColorAndroid='transparent'
         placeholder="New Password"
         onChangeText={(text) => this.setState({text})}
       />
        </CardItem>
        <CardItem style={{height:50,alignItems:'center'}}>
        <TextInput
         style={{height: 40,flex:1}}
         underlineColorAndroid='transparent'
         placeholder="Confirm Password"
         onChangeText={(text) => this.setState({text})}
       />
        </CardItem>

        </Card>

         <View style={style.btnContainer}>
         <Button

           buttonStyle={style.btnStyle}
           onPress={()=>this.Login(email, password)}
           textStyle={style.btnTextStyle}
           title={`Change Password`}
         />
         <Button

           buttonStyle={[style.btnStyle,{marginTop:10}]}
           onPress={()=>this.Login(email, password)}
           textStyle={style.btnTextStyle}
           title={`Cancel`}
         />

         </View>
</View>
     </View>

    )
  }


}
