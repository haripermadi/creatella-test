import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const CustomButton = ({handleOnClick}) => {
  return (
    <TouchableOpacity onPress={handleOnClick} style={styles.containerButton}>
      <Text style={styles.title}>Add to cart</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
