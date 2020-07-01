import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'CART PAGE',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>CART PAGE</Text>
      </View>
    );
  }
}

export default CartPage;
