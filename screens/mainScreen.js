import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Header, Avatar, Icon, Button  } from 'react-native-elements'
import { ListItem } from 'react-native-elements'
import axios from 'axios'


class MainScreen extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            records:[],
            isLoad: true,
            test: 'test'
        }
        this.getData = this.getData.bind(this)
        this._onPress = this._onPress.bind(this)

    }

    getData() {
        this.setState({
            isLoad: false
        })
        const url = 'http://parsavito.electric35.ru/api/getData.php?city=Ярославль&minPrice=0&maxPrice=0&item_per_page=30&order_by=id&order_type=desc&page=1'
        axios.get(url, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            this.setState({
                records: response.data.records,
                isLoad: true})
        })
    }

    _onPress(l) {
        console.log('item press');
        this.props.navigation.navigate('ItemScreen', { obj: l })
    }

    render() {
        const { records, isLoad } = this.state
      return (
          <View>
              <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Парсер Avito', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
              />
              <Button
                  title="Получить"
                  loading={!isLoad}
                  onPress={this.getData}
              />
          {
                records.map((l, i) => (
                  <ListItem
                    key={i}
                    title={l.name}
                    Component={TouchableOpacity}
                    onPress={() => this._onPress(l)}
                    subtitle={
                        <View
                            style={styles.subtitleView}

                        >
                            <Text style={styles.ratingText}>{l.city}</Text>
                            <Text style={styles.ratingText}>{l.price}</Text>
                        </View>
                    }
                  />
                ))
             }
        </View>
      );

    }


}
export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
