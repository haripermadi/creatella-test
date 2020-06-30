import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  containerList: {
    justifyContent: 'space-between',
    paddingBottom: 150,
    // backgroundColor: 'yellow',
  },
  containerFilter: {
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    marginVertical: 20,
  },
  title: {
    fontSize: 30,
    color: '#2f3542',
    fontWeight: 'bold',
  },
  textCenter: {
    textAlign: 'center',
  },
  containerFilterContent: bool => ({
    backgroundColor: bool ? '#3742fa' : '#f1f2f6',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 5,
  }),
  textFilter: bool => ({
    fontSize: 14,
    color: bool ? '#ffffff' : '#2f3542',
    fontWeight: 'bold',
  }),
  activeFilter: {
    backgroundColor: '#3742fa',
  },
  containerFooterLoad: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  loadingText: {
    fontSize: 12,
    color: '#2f3542',
    paddingVertical: 5,
  },
});
