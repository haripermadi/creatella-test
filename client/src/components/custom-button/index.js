import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const CustomButton = ({handleOnClick, title}) => {
  return (
    <TouchableOpacity onPress={handleOnClick} style={styles.containerButton}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
