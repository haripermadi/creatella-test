import React from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';

import styles from './styles';

import ListItem from '../../components/list-item';

const BASE_URL = 'http://localhost:3000/';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Ascii Faces',
      faces: [],
      page: 1,
      limit: 20,
      sort: 'price',
    };
  }

  componentDidMount() {
    this.getAsciiFaces();
  }

  getAsciiFaces = async () => {
    const {page, limit, sort} = this.state;
    let url = `${BASE_URL}products`;
    try {
      let response = await axios({
        method: 'GET',
        url: url,
        params: {
          _page: page,
          _limit: limit,
          _sort: sort,
        },
      });
      console.log('res----', response);
      this.setState({
        faces: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  renderItem(item) {
    return (
      <View key={item.id}>
        <Text>{item.face}</Text>
      </View>
    );
  }

  render() {
    console.log('state-----', this.state);
    return (
      <View style={styles.container}>
        <Text>{this.state.title}</Text>
        <Text>Filter</Text>
        {this.state.faces && (
          <FlatList
            data={this.state.faces}
            renderItem={({item}) => <ListItem key={item.key} {...item} />}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={styles.containerList}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    );
  }
}

export default Homepage;
