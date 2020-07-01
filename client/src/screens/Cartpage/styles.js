import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    height: height,
  },
  containerHeader: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderColor: '#ced6e0',
  },
  containerFlatList: {
    maxHeight: height * 0.75,
    // backgroundColor: 'violet',
  },
  textLarge: {
    fontSize: 18,
    color: '#2f3542',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  containerTotal: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
  },
});
