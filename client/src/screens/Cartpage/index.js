import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

import styles from './styles';

import CustomButton from '../../components/custom-button';
import CartItem from '../../components/cart-item';

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'CART PAGE',
    };
  }

  render() {
    console.log('cartpage--------->', this.props);
    const {items} = this.props.route.params;
    return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.textLarge}>Your cart:</Text>
        </View>
        <View style={styles.containerFlatList}>
          <FlatList
            data={items}
            renderItem={({item}) => <CartItem key={item.key} {...item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            extraData={this.state}
          />
          <View style={styles.containerTotal}>
            <Text style={styles.textLarge}>Total: &#36;1000</Text>
          </View>
        </View>
        <CustomButton
          title={'Checkout'}
          handleOnClick={() => alert('checkout')}
        />
      </View>
    );
  }
}

export default CartPage;
