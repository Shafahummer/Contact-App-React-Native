import React from 'react';
import { StyleSheet, Text, View, Keyboard, AsyncStorage, Alert, TouchableWithoutFeedback, ScrollView } from 'react-native';
import {Form,Item,Input,Label,Button} from "native-base";

export default class AddNewContactScreen extends React.Component {

  constructor(props){
    super(props)
    this.state={
      fname:"",
      lname:"",
      phone:"",
      email:"",
      address:""
    }
  }

  static navigationOptions={
    title:"Contact App"
  }

  saveContact=async()=>{
    if(this.state.fname !== "" &&
      this.state.lname !== "" &&
      this.state.phone !== "" &&
      this.state.email !== "" &&
      this.state.address !== ""
    ){
      var contact ={
        fname:this.state.fname,
        lname:this.state.lname,
        phone:this.state.phone,
        email:this.state.email,
        address:this.state.address
      }
      await AsyncStorage.setItem(Date.now().toString(),
      JSON.stringify(contact)
      ).then(()=>{
        this.props.navigation.goBack()
      }).catch(error=>{
        console.log(error)
      });
      
    }else{
      Alert.alert("All fields are required!!")
    }
  }
  
  render(){
    return (
      <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss}}>
      <ScrollView style={styles.container}>
        <Form>
          <Item>
            <Label style={styles.inputItem}>First Name</Label>
            <Input
              authoCorrect={false}
              autoCapitalize="none"
              onChangeText={fname=>this.setState({fname})}
              keyboardType="default"
            />
          </Item>
          <Item>
            <Label style={styles.inputItem}>Last Name</Label>
            <Input
              authoCorrect={false}
              autoCapitalize="none"
              onChangeText={lname=>this.setState({lname})}
              keyboardType="default"
            />
          </Item>
          <Item>
            <Label style={styles.inputItem}>Phone</Label>
            <Input
              authoCorrect={false}
              autoCapitalize="none"
              onChangeText={phone=>this.setState({phone})}
              keyboardType="number-pad"
            />
          </Item>
          <Item>
            <Label style={styles.inputItem}>Email</Label>
            <Input
              authoCorrect={false}
              autoCapitalize="none"
              onChangeText={email=>this.setState({email})}
              keyboardType="email-address"
            />
          </Item>
          <Item>
            <Label style={styles.inputItem}>Address</Label>
            <Input
              authoCorrect={false}
              autoCapitalize="none"
              onChangeText={address=>this.setState({address})}
              keyboardType="default"
            />
          </Item>
        </Form>
        <Button
          style={styles.button}
          full
          onPress={()=>{
            this.saveContact()
          }}>
            <Text style={styles.buttonText}>Save</Text>
          </Button>
          <View style={styles.empty}></View>
      </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:10,
    height:500
  },
  inputItem:{
    margin:10
  },
  button:{
    backgroundColor:"#B83227",
    marginTop:40,
  },
  buttonText:{
    color:"#fff",
    fontWeight:"bold"
  },
  empty:{
    height:500,
    backgroundColor:"#FFF"
  }
});