import React from "react";
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity,View,TextInput, } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants/";
import { Button, Select, Icon, Input, Header, Switch } from "../components/";

const { width } = Dimensions.get("screen");

class NewReservation extends React.Component {

   // BBR

  render= () => {
    return (
      <View style ={styles.container}>
      <View style={styles.row}>
      <View style={styles.inputWrap}>
        <Text bold size={15} style={styles.label}>Time</Text>
        <Input right placeholder="HH:MM" iconContent={<Block />} />
      </View>

      <View style={styles.inputWrap}>
        <Text bold size={15} style={styles.label}>Duration</Text>
        <Input right placeholder="Hours" iconContent={<Block />} maxLength={10} />
        <TextInput style={styles.inputcvv} maxLength={17} />
      </View>

      <TouchableOpacity
               style = {styles.submitButton}
               >
               <Text style = {styles.submitButtonText}> Search </Text>
            </TouchableOpacity>
      </View>
      <View style={styles.Screen2}>
      <Text bold size={20} style={styles.title}>
          Available Slots
        </Text>
      <View style={{alignItems: 'center'}}>
      
      <Block>
         <Button color="default" style={styles.optionsButton} onPress={() => this.props.navigation.navigate('SlotInformation')}>
            Slot 1
         </Button>
      </Block>

    </View>
     </View>
   </View>
    );
  };

}

const styles = StyleSheet.create({
   row: {
      flex: 1,
      flexDirection: "row"
    },
    inputWrap: {
      flex: 1,
      borderColor: "#cccccc",
      borderBottomWidth: 1,
      marginBottom: 10
    },
    inputdate: {
      fontSize: 14,
      marginBottom: -5,
      color: "#6a4595"
    },
    inputcvv: {
      fontSize: 14,
      marginBottom: -12,
      color: "#6a4595"
    },

    submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 30,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   },

   container: {
      flex: 1,
     
  },

  buttonContainer1: {
   alignItems: 'center',
   marginVertical: -50,

},
title: {
    textAlign: 'center',
    marginVertical: 30,
 },
 optionsButton: {
   width: 100,
   height: 20,
   paddingHorizontal: theme.SIZES.BASE,
   marginVertical: 10,
 },
 Screen2:{
   flex: 5,
   backgroundColor: '#b4cfd7',
},

});

export default NewReservation;