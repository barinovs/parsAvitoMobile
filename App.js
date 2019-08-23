import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Avatar, Icon, Button  } from 'react-native-elements'
import { ListItem } from 'react-native-elements'
import axios from 'axios'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import ItemScreen from './screens/itemScreen'
import MainScreen from './screens/mainScreen'


const RootStack = createStackNavigator({
    ItemScreen: {
        screen: ItemScreen
    },
    MainScreen: {
        screen: MainScreen
    },
},
    {
      initialRouteName: 'MainScreen'
    }
)

class App extends Component {
    constructor(props) {
        super(props)
        this.state={
            test: 'test'
        }
    }

  render() {
    return <RootStack />;
  }
}
export default createAppContainer(RootStack);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
