import React from "react";
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity,View,TextInput,Alert, } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants/";
import { Button, Select, Icon, Input, Header, Switch } from "../components/";

const { width } = Dimensions.get("screen");

class ViewRes extends React.Component {

  render= () => {

    return (
      <View style ={styles.container}>
     
      <Text bold size={25} style={styles.title1}>
       View Reservation
      </Text>

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
});

export default ViewRes;