import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './styles';

import CustomButton from '../custom-button';

const ListItem = ({size, price, face, date}) => {
  const handleOnClick = input => {
    console.log('input----', input);
    alert(input);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerFace}>
        <Text style={[styles.face, {fontSize: size}]}>{face}</Text>
      </View>
      <View style={styles.containerDesc}>
        <Text style={styles.price}>&#36;{price}</Text>
        <Text style={styles.date}>Publish on {date}</Text>
      </View>
      <CustomButton handleOnClick={() => handleOnClick(price)} />
    </View>
  );
};

export default ListItem;
