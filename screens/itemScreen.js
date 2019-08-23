import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


class ItemScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        const obj = this.props.navigation.getParam('obj')

        return(
            <View style={styles.container}>
                <Text style={styles.name}>{obj.name}</Text>
                <Text>{obj.bodyType}</Text>
                <Text>{obj.color}</Text>
            </View>
        )
    }

}
export default ItemScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
      fontWeight: 'bold'
  }
});
