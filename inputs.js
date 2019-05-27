import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,ScrollView } from 'react-native'
import axios from 'axios';

class Inputs extends Component {
   state = {
    //   email: '',
    //   password: '',
      hsnCode:'',
      medForm:'',
      api:'',
      isPrescibed:'',
      cName:'',
      bname:''
   }
   handleHSN = (text) => {
      this.setState({ hsnCode: text })
   }

   handlemedForm = (text) => {
    this.setState({ medForm: text })
   }
        
    handleAPI = (text) => {
    this.setState({ api: text })
    }
 
    handlerPrescribed = (text) => {
    this.setState({ isPrescibed: text })
    }
    
    handlecName = (text) => {
        this.setState({ cName: text })
    }

    handlebName = (text) => {
      this.setState({ bname: text })
   }

   send = (hsnCode,medForm,api,isPrescibed,cName,bname) => {
    //    hsnCode,medForm,api,isPrescibed,cName,bname
    //    this.state.hsnCode,this.state.medForm,this.state.api,this.state.isPrescibed,this.state.cName,this.state.bname
      alert(hsnCode)
    //   send the data to server 

   //  http://192.168.1.6:3001/api/putData
   //  192.168.1.6
    axios.post('http://192.168.1.6:3001/api/putData', {
        hsnCode: hsnCode,
        medForm: medForm,
        api:api,
        isPrescibed:isPrescibed,
        cName:cName,
        bname:bname
      }).then(function (response) {
         console.log(response);
       })
       .catch(function (error) {
         console.log(error);
       });
    // TODO clear the state and input fields
    //   this.setState({ hsnCode: '' });
    //   this.setState({ medForm: '' });
    //   this.setState({ api: '' });
    //   this.setState({ isPrescibed: '' });
    //   this.setState({ bName: '' });
    //   this.setState({ cName: '' });
   }
   render() {
      return (
         <View style = {styles.container}>
         <ScrollView>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "HSN Code"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleHSN}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "form of medicine"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlemedForm}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Salt Composition"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleAPI}
               />

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Is Prescribed ??"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlerPrescribed}
               />

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Company Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlecName}
               />

            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Brand Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlebName}
                //    onChangeText = {this.handlePassword}/>
               />
           
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.send(this.state.hsnCode,this.state.medForm,this.state.api,this.state.isPrescibed,this.state.cName,this.state.bname)
               }>
               <Text style = {styles.submitButtonText}> Create </Text>
            </TouchableOpacity>
            </ScrollView>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
    
   }
})