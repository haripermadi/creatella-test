import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {connect} from 'react-redux';

import styles from './styles';

import CustomButton from '../../components/custom-button';
import CartItem from '../../components/cart-item';
import {getTotalPrice, reduceItem} from '../../redux/cart/cart.actions';
import {totalPrice} from '../../helper';

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'CART PAGE',
    };
  }

  render() {
    console.log('cartpage--------->', this.props);
    const {carts, total} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.textLarge}>Your cart:</Text>
        </View>
        <View style={styles.containerFlatList}>
          <FlatList
            data={carts}
            renderItem={({item}) => <CartItem key={item.key} itemCart={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            extraData={this.props}
          />
          <View style={styles.containerTotal}>
            <Text style={styles.textLarge}>
              Total: &#36;{totalPrice(carts) / 100}
            </Text>
          </View>
        </View>
        <CustomButton
          title={'Checkout'}
          handleOnClick={() => alert('Thank you for shopping with us')}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    carts: state.cart.carts,
    total: state.cart.total,
  };
};

export default connect(mapStateToProps)(CartPage);
