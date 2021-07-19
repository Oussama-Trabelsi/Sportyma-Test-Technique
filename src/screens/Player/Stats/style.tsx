import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    margin: 20,
    fontFamily: 'Legacy',
    fontSize: 18,
  },
  table: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tableText: {
    fontFamily: 'Legacy',
    fontSize: 16,
  },
  chart: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
  },
});
