import React from "react";
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity, View, TextInput, KeyboardAvoidingView } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants/";
import { Button, Select, Icon, Input, Header, Switch } from "../components/";

const { width } = Dimensions.get("screen");

class NewReservation extends React.Component {



  render = () => {
    return (

      <View style={styles.container}>

        <Block flex>
          <Block flex center>
            <KeyboardAvoidingView
              style={{ flex: 1 }}
              behavior="padding"
              enabled
            >
              <Block width={width * 0.9} style={{ marginBottom: 15 }}>

              </Block>

              <View style={styles.row}>
                <View style={styles.inputWrap}>
                  <Text size={15} style={styles.label}>Time</Text>
                  <Input right placeholder="HH:MM" iconContent={<Block />} />
                </View>

                <View style={styles.inputWrap1}>
                  <Text size={15} style={styles.label}>Duration</Text>
                  <Input right placeholder="Hours" iconContent={<Block />} maxLength={10} />
                  <TextInput style={styles.inputcvv} maxLength={17} />
                </View>

                <TouchableOpacity
                  style={styles.submitButton}
                >
                  <Text style={styles.submitButtonText}> Search </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.Screen2}>
                <Text size={18} style={styles.title}>
                  Available Slots
                </Text>
                {/* <Block middle style={{ marginTop: 0, marginBottom: 16 }}>
                  <Block style={styles.divider} />
                </Block> */}
                <View style={{ alignItems: 'center' }}>

                  <Block>
                    <Button color="default" style={styles.optionsButton} onPress={() => this.props.navigation.navigate('SlotInformation')}>
                      Slot 1
                     </Button>
                  </Block>

                </View>
              </View>
            </KeyboardAvoidingView>

          </Block>
        </Block>
      </View>
    );
  };

}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row"
  },
  inputWrap1: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10,
    marginRight: 0
  },
  inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10,
    marginRight: 8
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
    marginLeft:10,
    marginRight:5,
    margin: 30,
    height: 40,
    width:100
  },
  submitButtonText: {
    color: 'white',
    width: 50,
  },

  container: {
    flex: 1,

  },

  buttonContainer1: {
    alignItems: 'center',
    marginVertical: -50,

  },
  title: {
    textAlign: 'left',
    marginVertical: 10,
    marginLeft:15
  },
  optionsButton: {
    width: 100,
    height: 20,
    paddingHorizontal: theme.SIZES.BASE,
    marginVertical: 10,
  },
  Screen2: {
    flex: 5,
    backgroundColor: '#b4cfd7',
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },

});

export default NewReservation;