import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
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
      isLoadMore: false,
    };
  }

  componentDidMount() {
    this.getAsciiFaces();
  }

  getAsciiFaces = async () => {
    const {page, limit, sort, faces} = this.state;
    let url = `${BASE_URL}products`;
    console.log('GETASCIIIFACE-----', page, faces);
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
        faces: [...faces, ...response.data],
        isLoadMore: false,
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
    this.setState(
      {
        sort: input,
        page: 1,
        faces: [],
      },
      () => {
        this.getAsciiFaces();
      },
    );
  }

  renderFilterButton(name) {
    const {sort} = this.state;
    return (
      <TouchableOpacity
        style={styles.containerFilterContent(sort === name)}
        onPress={() => this.handleSort(name)}>
        <Text style={styles.textFilter(sort === name)}>
          {name[0].toUpperCase() + name.slice(1)}
        </Text>
      </TouchableOpacity>
    );
  }

  handleLoadMore = () => {
    console.log('loadmore-----------');
    this.setState(
      (prevState, nextProps) => ({
        page: prevState.page + 1,
        isLoadMore: true,
      }),
      () => {
        this.getAsciiFaces();
      },
    );
  };

  renderFooterLoad = () => {
    if (!this.state.isLoadMore) return null;
    return (
      <View style={styles.containerFooterLoad}>
        <ActivityIndicator size={'small'} color="#0000ff" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  };

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
          {this.renderFilterButton('size')}
          {this.renderFilterButton('price')}
          {this.renderFilterButton('id')}
        </View>
        {this.state.faces && (
          <FlatList
            data={this.state.faces}
            renderItem={({item}) => <ListItem key={item.key} {...item} />}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={styles.containerList}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            onEndReached={this.handleLoadMore}
            ListFooterComponent={this.renderFooterLoad}
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