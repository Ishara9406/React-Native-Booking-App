import React from "react";
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity, View, TextInput, Alert, KeyboardAvoidingView } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants/";
import { Button, Select, Icon, Input, Header, Switch } from "../components/";

const { width } = Dimensions.get("screen");

class ViewRes extends React.Component {

  render = () => {

    return (
      <View style={styles.container}>

        {/* <Text bold size={25} style={styles.title1}>
       View Reservation
      </Text> */}

        <Block middle style={styles.nameInfo}>
          <Text bold size={28} color="#32325D">
            Jessica Jones, 27
                    </Text>
          <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
            San Francisco, USA
                    </Text>
        </Block>

        <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
          <Block style={styles.divider} />
        </Block>

        {/* <View style={styles.Screen2}> */}
        <Block flex>
          {/* <Block flex={0.17} middle>
                  <Text color="#8898AA" size={12}>
                    Or sign up the classic way
                  </Text>
                </Block> */}
          <Block flex center>
            <KeyboardAvoidingView
              style={{ flex: 10 }}
              behavior="padding"
              enabled
            >
              <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                <Input
                  borderless
                  placeholder="Slot ID"
                  iconContent={
                    <Icon
                      size={16}
                      color={argonTheme.COLORS.ICON}
                      name="diamond"
                      family="ArgonExtra"
                      style={styles.inputIcons}
                    />
                  }
                />
              </Block>
              <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                <Input
                  borderless
                  placeholder="Slot No"
                  iconContent={
                    <Icon
                      size={16}
                      color={argonTheme.COLORS.ICON}
                      name="hat-3"
                      family="ArgonExtra"
                      style={styles.inputIcons}
                    />
                  }
                />
              </Block>

              <Block
                middle
                row
                space="evenly"
                style={{ marginTop: 20, paddingBottom: 24 }}
              >
                <Button
                  small
                  style={{ backgroundColor: argonTheme.COLORS.INFO }}
                >
                  Edit
                    </Button>
                <Button
                  small
                  style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
                >
                  Delete
                    </Button>
              </Block>

              {/* <Block flex={1.25} right>
                <Button center color="default" style={styles.optionsButton}>
                  Reserve
              </Button>
              </Block>
              <Block flex={4} right>
                <Button center color="default" style={styles.optionsButton}>
                  Reserve
              </Button>
              </Block> */}

            </KeyboardAvoidingView>
          </Block>
        </Block>
      </View>
      // </View>

    );
  };

}

const styles = StyleSheet.create({


  container: {
    flex: 5,

  },


  title1: {
    textAlign: 'center',
    marginVertical: 30,
  },
  nameInfo: {
    marginTop: 35
  },
  inputIcons: {
    marginRight: 12
  },
  Screen2: {
    flex: 0.1,
    backgroundColor: '#b4cfd7',
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
});

export default ViewRes;