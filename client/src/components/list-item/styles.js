import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
    shadowColor: 'grey',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 10,
    borderRadius: 5,
  },
  face: {
    color: '#0984e3',
  },
  containerFace: {
    alignItems: 'center',
    backgroundColor: '#f1f2f6',
    padding: 5,
    flex: 1,
    justifyContent: 'center',
  },
  containerDesc: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  price: {
    fontSize: 20,
    color: '#2f3542',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: '#747d8c',
  },
  textId: {
    textAlign: 'center',
    fontSize: 16,
    color: '#2f3542',
  },
  image: {
    width: '100%',
    height: 100,
  },
  containerImage: {
    backgroundColor: '#ff4757',
  },
  textAds: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});
