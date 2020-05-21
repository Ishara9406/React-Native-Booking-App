import React, { UseState } from 'react';
import { StyleSheet, Dimensions, ScrollView, View,Button,Text,title,Helmet,} from 'react-native';
import { Block, theme } from 'galio-framework';
import { StackNavigator } from "react-navigation";

import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class Home extends React.Component {
  render= () => {
    const { navigation } = this.props;
    return (

     
         <View style={styles.container}>
            <Text style={styles.sectionTitle}>Reservation</Text>

         {/* <Button
            style={styles.buttonContainer}
            // onPress={() => navigation.navigate("App")}
            // textStyle={{ color: argonTheme.COLORS.BLACK }}
            >
            Getting Started
         </Button> */}
                  <View style={styles.buttonContainer}>
                  <Button
                    title="New reservation"
                    onPress={() => navigation.navigate ("App2")}
                  />
                  </View>

                  <View style={styles.buttonContainer1}>
                  <Button
                    title="View reservation"
                    onPress={() => this.props.navigation.navigate('ViewRes')}
                  />
                  </View> 

                  {/* <View style={styles.buttonContainer2}>
                    <Button title='My Details' onPress></Button>
                  </View> */}
       </View>   
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },

  container: {
    flex: 1,
   
},

container1: {
  flex: 1,
  // flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical:100,
},
buttonContainer: {
  alignItems: 'center',
    
  marginVertical: 100,
},

  sectionTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 50,
    // margin:50,
  },
 
  background: {
    flex: 1,
   backgroundColor: '#3EC9C1',
  },

   
   
 
    buttonContainer1: {
        alignItems: 'center',
        marginVertical: -50,

    },

    buttonContainer2: {
        alignItems: 'center',
        marginVertical: 100,

    },
    button: {
      width: width - theme.SIZES.BASE * 4,
      height: theme.SIZES.BASE * 3,
      shadowRadius: 0,
      shadowOpacity: 0
    }

});

export default Home;
