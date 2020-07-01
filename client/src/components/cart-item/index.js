import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const CartItem = ({id, size, price, face, quantity}) => {
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
          <TouchableOpacity style={styles.buttonCircle}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <View style={styles.containerItemCount}>
            <Text style={styles.textCount}>{quantity}</Text>
          </View>
          <TouchableOpacity style={styles.buttonCircle}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
