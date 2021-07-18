import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'src/theme';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    height: (windowHeight - 50) / 3,
    borderColor: Colors.black,
    borderWidth: 1,
  },
  boldText: {
    color: Colors.black,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'BlankenyScript',
  },
  number: {
    color: Colors.white,
    fontSize: 30,
    fontFamily: 'Legacy',
    textAlign: 'center',
  },
  column: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: Colors.white,
    flex: 0.7,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    color: Colors.black,
    fontSize: 15,
    fontFamily: 'Legacy',
    textAlign: 'center',
  },
  flag: {
    fontSize: 20,
  },
  emptyContainer: {
    height: windowHeight - (windowHeight - 50) / 3 - 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: windowWidth / 3,
    height: windowWidth / 3,
    resizeMode: 'contain'
  }
});
