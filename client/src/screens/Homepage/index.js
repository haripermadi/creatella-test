import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
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
      isLastData: false,
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
      if (!response.data.length) {
        this.setState({
          isLoadMore: false,
          isLastData: true,
        });
      } else {
        let ads = {
          id: `ads-${response.data[0].id}`,
          key: 'ads',
          size: 10,
          price: 10,
          face: 'ads',
          date: 'Sun Jun 30 2020 11:37:53 GMT+0700 (Western Indonesia Time)',
          image: `http://localhost:3000/ads/?r=${response.data[0].id}`,
        };
        this.setState({
          faces: [...faces, ...response.data.concat(ads)],
          isLoadMore: false,
        });
      }
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
        isLastData: false,
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
    console.log('loadmore-----------', this.state.isLastData);
    if (!this.state.isLastData) {
      this.setState(
        (prevState, nextProps) => ({
          page: prevState.page + 1,
          isLoadMore: true,
        }),
        () => {
          this.getAsciiFaces();
        },
      );
    }
  };

  renderFooterLoad = () => {
    console.log('RENDERFOOTER--------------');
    if (this.state.isLastData) {
      console.log('RENDERFOOTER--------------in');
      return (
        <View style={styles.containerEnd}>
          <Text style={styles.textEnd}>
            ~ <Text style={styles.iconEnd}>┏༼ ◉ ╭╮ ◉༽┓</Text> end of catalogue ~
          </Text>
        </View>
      );
    } else {
      if (!this.state.isLoadMore) return null;
      return (
        <View style={styles.containerFooterLoad}>
          <ActivityIndicator size={'small'} color="#0000ff" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      );
    }
  };

  render() {
    console.log('state-----', this.state);
    const {sort, isLastData} = this.state;
    const {height} = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <Text style={[styles.title, styles.textCenter]}>
          {this.state.title}
        </Text>
        <Text style={[styles.subTitle, styles.textCenter]}>
          Here you're sure to find a bargain on some of the finest ascii
          available to purchase. Be sure to peruse our selection of ascii faces
          in an exciting range of sizes and prices.
        </Text>
        <View style={styles.containerFilter}>
          <Text style={styles.title}>Filter</Text>
          {this.renderFilterButton('size')}
          {this.renderFilterButton('price')}
          {this.renderFilterButton('id')}
        </View>
        {this.state.faces && (
          <View style={{height: height * 0.8}}>
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
              extraData={this.state}
              initialNumToRender={10}
            />
          </View>
        )}
      </View>
    );
  }
}

export default Homepage;
