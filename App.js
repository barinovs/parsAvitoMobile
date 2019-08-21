import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Avatar, Icon, Button  } from 'react-native-elements'
import { ListItem } from 'react-native-elements'
import axios from 'axios'


class App extends Component {
    constructor(props) {
        super(props)
        this.state={
            records:[],
            isLoad: true
        }
        this.getData = this.getData.bind(this)

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
                    subtitle={
                        <View style={styles.subtitleView}>
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

export default App

// export default function App() {
//
//     const list = [
//       {
//         name: 'Amy Farha',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//         subtitle: 'Vice President'
//       },
//       {
//         name: 'Chris Jackson',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//         subtitle: 'Vice Chairman'
//       },
//     ]
//
//     const url = 'http://parsavito.electric35.ru/api/getData.php?city=%D0%92%D0%B5%D0%BB%D1%8C%D1%81%D0%BA&minPrice=0&maxPrice=0&item_per_page=30&order_by=id&order_type=desc&page=1'
//     axios.get(url, {
//         headers: { 'Content-Type': 'application/json' }
//     })
//     .then(response => {
//         this.setState({prices: response.data})
//     })
//
//   return (
//       <View>
//           <Header
//             leftComponent={{ icon: 'menu', color: '#fff' }}
//             centerComponent={{ text: 'Парсер Avito', style: { color: '#fff' } }}
//             rightComponent={{ icon: 'home', color: '#fff' }}
//           />
//           {
//             list.map((l, i) => (
//               <ListItem
//                 key={i}
//                 leftAvatar={{ source: { uri: l.avatar_url } }}
//                 title={l.name}
//                 subtitle={l.subtitle}
//               />
//             ))
//           }
//     </View>
//
//
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
