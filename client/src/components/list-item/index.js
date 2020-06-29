import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const ListItem = ({size, price, face, date}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text>{face}</Text>
      </View>
      <View>
        <Text>{price}</Text>
        <Text>{size}</Text>
        {/* <Text>{date}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
