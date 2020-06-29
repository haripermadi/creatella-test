import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import axios from 'axios';

import styles from './styles';

import ListItem from '../../components/list-item';

const BASE_URL = 'http://localhost:3000/';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Ascii Faces Store',
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

  handleSort(input) {
    this.setState({sort: input});
  }

  render() {
    console.log('state-----', this.state);
    const {sort} = this.state;
    return (
      <View style={styles.container}>
        <Text style={[styles.title, styles.textCenter]}>
          {this.state.title}
        </Text>
        <View style={styles.containerFilter}>
          <Text style={styles.title}>Filter</Text>
          <TouchableOpacity
            style={styles.containerFilterContent(sort === 'size')}
            onPress={() => this.handleSort('size')}>
            <Text style={styles.textFilter(sort === 'size')}>Size</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.containerFilterContent(sort === 'price')]}
            onPress={() => this.handleSort('price')}>
            <Text style={styles.textFilter(sort === 'price')}>Price</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerFilterContent(sort === 'id')}
            onPress={() => this.handleSort('id')}>
            <Text style={styles.textFilter(sort === 'id')}>ID</Text>
          </TouchableOpacity>
        </View>
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
        <View>
          <Text>~ end of catalogue ~</Text>
        </View>
      </View>
    );
  }
}

export default Homepage;
