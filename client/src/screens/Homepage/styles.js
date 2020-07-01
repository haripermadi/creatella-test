import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  containerList: {
    justifyContent: 'space-between',
    // paddingBottom: 150,
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
  subTitle: {
    fontSize: 14,
    color: '#2f3542',
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
  containerEnd: {
    backgroundColor: '#f1f2f6',
    paddingVertical: 10,
    borderRadius: 5,
  },
  textEnd: {
    fontSize: 16,
    color: '#2f3542',
    textAlign: 'center',
  },
  iconEnd: {
    fontSize: 12,
    color: '#3742fa',
  },
  containerLoading: {
    marginTop: 250,
  },
});
