import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';

import {addItemToCart, reduceItem} from '../../redux/cart/cart.actions';

import styles from './styles';

const CartItem = ({itemCart, addItemToCart, reduceItemFromCart}) => {
  console.log('cartitem========', itemCart);
  const {id, size, price, face, quantity} = itemCart;
  return (
    <View style={styles.containerItem}>
      <View style={styles.containerItemFace}>
        <Text style={[styles.face, {fontSize: size}]}>{face}</Text>
      </View>
      <View style={styles.containerItemInfo}>
        <View>
          <Text style={styles.itemTitle}>{id}</Text>
          <Text style={styles.textLarge}>&#36;{price / 100}</Text>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.buttonCircle}
            onPress={() => reduceItemFromCart(itemCart)}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <View style={styles.containerItemCount}>
            <Text style={styles.textCount}>{quantity}</Text>
          </View>
          <TouchableOpacity
            style={styles.buttonCircle}
            onPress={() => addItemToCart(itemCart)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item)),
  reduceItemFromCart: item => dispatch(reduceItem(item)),
});

export default connect(
  null,
  mapDispatchToProps,
)(CartItem);
