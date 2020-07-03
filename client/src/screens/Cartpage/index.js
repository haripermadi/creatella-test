import React from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import {connect} from 'react-redux';

import styles from './styles';

import CustomButton from '../../components/custom-button';
import CartItem from '../../components/cart-item';
import {cleanCart} from '../../redux/cart/cart.actions';
import {totalPrice} from '../../helper';

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'CART PAGE',
    };
  }

  handleCheckout = () => {
    Alert.alert('Checkout', 'Thank you for shopping with us!', [
      {
        text: 'OK',
        onPress: () => this.props.navigation.navigate('Home'),
      },
    ]);
  };

  componentWillUnmount() {
    this.props.cleanCart();
  }

  render() {
    // console.log('cartpage--------->', this.props);
    const {carts} = this.props;
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
        {carts.length > 0 && (
          <CustomButton
            title={'Checkout'}
            handleOnClick={this.handleCheckout}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    carts: state.cart.carts,
  };
};

const mapDispatchToProps = dispatch => ({
  cleanCart: () => dispatch(cleanCart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartPage);
