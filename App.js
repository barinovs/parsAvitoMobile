import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Avatar, Icon } from 'react-native-elements'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Serjozha Molodets!</Text>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
