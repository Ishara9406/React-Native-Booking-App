import React from "react";
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity,View,TextInput,Alert, } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants/";
import { Button, Select, Icon, Input, Header, Switch } from "../components/";

const { width } = Dimensions.get("screen");

class SlotInformation extends React.Component {

  render= () => {

    return (
      <View style ={styles.container}>
     
      <Text bold size={25} style={styles.title1}>
        Slot Information
      </Text>

      <Text bold size={18}>
          Slot No:
      </Text>
      <View style={styles.row}>
      <Text bold size={18} style={styles.line} >
          User Name:
      </Text>
      <TextInput  style={styles.input}
        placeholder='e.g'
       />
      </View>
      
      <View style={styles.row}>
      <Text bold size={18} style={styles.line1} >
          User NIC:
      </Text>
      <TextInput  style={styles.input1}
       />
   </View>

   <View style={styles.row}>
      <Text bold size={18} style={styles.line2} >
          Email:
      </Text>
      <TextInput  style={styles.input2}
       />
   </View>

   <View style={styles.row}>
      <Text bold size={18} style={styles.line3} >
          Contact No:
      </Text>
      <TextInput  style={styles.input3}
       />
   </View>
   <View style={styles.buttonContainer}>
   <Button  onPress={() => Alert.alert('Reservation will verified via email !')} style={styles.ButtonStyle} >
          Confirm
          </Button>
   </View>
   </View>
    );
  };

}

const styles = StyleSheet.create({
   

   container: {
      flex: 1,
     
  },


title1: {
    textAlign: 'center',
    marginVertical: 30,
 },

input:{
  padding:6,
  height:30,
  margin:18,
  width:200,
  borderBottomColor: '#000000',
  borderBottomWidth: 1,
 
},
input1:{
  padding:6,
  height:30,
  margin:2,
  width:200,
  borderBottomColor: '#000000',
  borderBottomWidth: 1,
 
},

input2:{
  padding:6,
  height:30,
  margin:20,
  width:200,
  borderBottomColor: '#000000',
  borderBottomWidth: 1,
 
},

input3:{
  padding:6,
  height:30,
  margin:10,
  width:200,
  borderBottomColor: '#000000',
  borderBottomWidth: 1,
 
},
row: {

  flexDirection: "row"
},

line:{
  lineHeight: 70,
},

line1:{
  lineHeight: 30,
},

line2:{
  lineHeight: 80,
},

line3:{
  lineHeight: 50,
},

buttonContainer: {
  alignItems: 'center',
    
  marginVertical: 100,
},
ButtonStyle : {
  backgroundColor: '#7a42f4',
  height: "30%",
  width:"30%" 
}
});

export default SlotInformation;