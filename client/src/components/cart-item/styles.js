import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    marginBottom: 5,
    borderBottomWidth: 0.5,
    borderColor: '#ced6e0',
    paddingVertical: 5,
  },
  containerItemFace: {
    alignItems: 'center',
    backgroundColor: '#f1f2f6',
    padding: 5,
    justifyContent: 'center',
    flex: 0.4,
    borderRadius: 5,
  },
  face: {
    color: '#0984e3',
  },
  containerItemInfo: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  textLarge: {
    fontSize: 18,
    color: '#2f3542',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  itemTitle: {
    fontSize: 14,
    color: '#2f3542',
  },
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonCircle: {
    backgroundColor: '#5d66fb',
    alignItems: 'center',
    justifyContent: 'center',
    // margin: 5,
    height: 25,
    width: 25,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerItemCount: {
    paddingHorizontal: 15,
  },
  textCount: {
    fontSize: 14,
    textAlign: 'center',
  },
});
