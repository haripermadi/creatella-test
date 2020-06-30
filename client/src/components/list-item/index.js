import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

import styles from './styles';

import CustomButton from '../custom-button';
import {formatDate} from '../../helper/index';

const ListItem = ({id, size, price, face, date, image}) => {
  const handleOnClick = input => {
    console.log('input----', input);
    alert(input);
  };
  if (image) {
    return (
      <View style={[styles.container, styles.containerImage]}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <View style={styles.containerDesc}>
          <Text style={styles.textAds}>
            But first, a word from our sponsors
          </Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerFace}>
        <Text style={[styles.face, {fontSize: size}]}>{face}</Text>
      </View>
      <View style={styles.containerDesc}>
        <Text style={styles.textId}>{id}</Text>
        <Text style={styles.price}>&#36;{price / 100}</Text>
        <Text style={styles.date}>Publish on {formatDate(date)}</Text>
      </View>
      <CustomButton handleOnClick={() => handleOnClick(price)} />
    </View>
  );
};

export default ListItem;
