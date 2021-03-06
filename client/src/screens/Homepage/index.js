import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  Image,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';

import styles from './styles';

import ListItem from '../../components/list-item';
import {
  fetchProductsAsync,
  fetchProductsSortAsync,
} from '../../redux/product/product.actions';
import {addItemToCart} from '../../redux/cart/cart.actions';
import {totalItem} from '../../helper';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Ascii Faces Store',
      page: 1,
      limit: 20,
      sort: 'price',
      isLoadMore: false,
      isLastData: false,
      isLoading: false,
      carts: [],
      cartCount: 0,
    };
  }

  componentDidMount() {
    this.getAsciiFaces('sort');
  }

  getAsciiFaces = (type = 'normal') => {
    const {page, limit, sort} = this.state;
    let input = {
      _page: page,
      _limit: limit,
      _sort: sort,
    };

    if (type === 'sort') {
      this.props.getProductSort(input);
    } else {
      this.props.getProductLists(input);
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
        this.getAsciiFaces('sort');
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
    // console.log('loadmore-----------', this.props.isLastData);
    if (!this.props.isLastData) {
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
    // console.log('RENDERFOOTER--------------', this.props);
    if (this.props.isLastData) {
      // console.log('RENDERFOOTER--------------in');
      return (
        <View style={styles.containerEnd}>
          <Text style={styles.textEnd}>
            ~ <Text style={styles.iconEnd}>┏༼ ◉ ╭╮ ◉༽┓</Text> end of catalogue ~
          </Text>
        </View>
      );
    } else {
      if (!this.props.isLoading) return null;
      return (
        <View style={styles.containerFooterLoad}>
          <ActivityIndicator size={'small'} color="#0000ff" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      );
    }
  };

  handleAddToCart = input => {
    this.props.addItemToCart(input);
  };

  render() {
    // console.log('state--home---', this.state, this.props);
    const {faces, isLoading, carts} = this.props;
    const {height} = Dimensions.get('window');
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.containerHeader}>
            <Text style={[styles.title, styles.textCenter]}>
              {this.state.title}
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Cart')}>
              <Image
                source={require('../../assets/cart.png')}
                style={styles.cartIcon}
              />
              <View style={styles.containerCounter}>
                <Text style={styles.textCount}>{totalItem(carts)}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={[styles.subTitle, styles.textCenter]}>
            Here you're sure to find a bargain on some of the finest ascii
            available to purchase. Be sure to peruse our selection of ascii
            faces in an exciting range of sizes and prices.
          </Text>
          <View style={styles.containerFilter}>
            <Text style={styles.title}>Filter</Text>
            {this.renderFilterButton('size')}
            {this.renderFilterButton('price')}
            {this.renderFilterButton('id')}
          </View>
          {/* {isLoading && (
            <View style={styles.containerLoading}>
              <ActivityIndicator size={'large'} color="#0000ff" />
            </View>
          )} */}
          {faces && (
            <View style={{height: height * 0.8}}>
              <FlatList
                data={faces}
                renderItem={({item}) => (
                  <ListItem
                    key={item.key}
                    {...item}
                    handleAddToCart={() => this.handleAddToCart(item)}
                  />
                )}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.containerList}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.5}
                onEndReached={this.handleLoadMore}
                ListFooterComponent={this.renderFooterLoad}
                extraData={this.props}
                initialNumToRender={10}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    faces: state.product.products,
    isLoading: state.product.isLoading,
    isLastData: state.product.isLastData,
    carts: state.cart.carts,
  };
};

const mapDispatchToProps = dispatch => ({
  getProductLists: input => dispatch(fetchProductsAsync(input)),
  getProductSort: input => dispatch(fetchProductsSortAsync(input)),
  addItemToCart: input => dispatch(addItemToCart(input)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);
