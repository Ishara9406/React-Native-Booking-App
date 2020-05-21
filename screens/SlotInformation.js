import React from "react";
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity,View,TextInput,Alert,ImageBackground,StatusBar,
  KeyboardAvoidingView } from "react-native";
// Galio components
import { Block, Checkbox, Text, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants/";
import { Button, Select, Icon, Input, Header, Switch } from "../components/";
//
import { HeaderHeight } from "../constants/utils";
//
const { width,height } = Dimensions.get("screen");

class SlotInformation extends React.Component {

  render= () => {

    return (
      <View style ={styles.container}>
     
      <Text bold size={25} style={styles.title1}>
       Reserve your SLOT
      </Text>
      <Block flex>
                {/* <Block flex={0.17} middle>
                  <Text color="#8898AA" size={12}>
                    Or sign up the classic way
                  </Text>
                </Block> */}
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
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
                      <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Name"
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
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="NIC"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Email"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Rental"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    {/* <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder="Password"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                      <Block row style={styles.passwordCheck}>
                        <Text size={12} color={argonTheme.COLORS.MUTED}>
                          password strength:
                        </Text>
                        <Text bold size={12} color={argonTheme.COLORS.SUCCESS}>
                          {" "}
                          strong
                        </Text>
                      </Block>
                    </Block> */}
                    {/* <Block row width={width * 0.75}>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        color={argonTheme.COLORS.PRIMARY}
                        label="I agree with the"
                      />
                      <Button
                        style={{ width: 100 }}
                        color="transparent"
                        textStyle={{
                          color: argonTheme.COLORS.PRIMARY,
                          fontSize: 14
                        }}
                      >
                        Privacy Policy
                      </Button>
                    </Block> */}
                    <Block flex={1.25} right>
              <Button center color="default" style={styles.optionsButton}>
                Reserve
              </Button>
            </Block>
                    
                  </KeyboardAvoidingView>
                </Block>
              </Block>
   </View>
    );
  };

}

const styles = StyleSheet.create({
   

   container: {
      flex: 1,
     
  },

//
title1: {
    textAlign: 'center',
    marginVertical: 30,
 },
 registerContainer: {
  width: width * 0.9,
  height: height * 0.78,
  backgroundColor: "#F4F5F7",
  borderRadius: 4,
  shadowColor: argonTheme.COLORS.BLACK,
  shadowOffset: {
    width: 0,
    height: 4
  },
  shadowRadius: 8,
  shadowOpacity: 0.1,
  elevation: 1,
  overflow: "hidden"
},
socialConnect: {
  backgroundColor: argonTheme.COLORS.WHITE,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderColor: "#8898AA"
},
socialButtons: {
  width: 120,
  height: 40,
  backgroundColor: "#fff",
  shadowColor: argonTheme.COLORS.BLACK,
  shadowOffset: {
    width: 0,
    height: 4
  },
  shadowRadius: 8,
  shadowOpacity: 0.1,
  elevation: 1
},
socialTextButtons: {
  color: argonTheme.COLORS.PRIMARY,
  fontWeight: "800",
  fontSize: 14
},
inputIcons: {
  marginRight: 12
},
passwordCheck: {
  paddingLeft: 15,
  paddingTop: 13,
  paddingBottom: 30
},
createButton: {
  width: width * 0.5,
  marginTop: 25
},
profile: {
  marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
  // marginBottom: -HeaderHeight * 2,
  flex: 1
},
optionsButton: {
  width: "auto",
  height: 30,
  paddingHorizontal: theme.SIZES.BASE,
  paddingVertical: 10
}
});

export default SlotInformation;