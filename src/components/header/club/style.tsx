import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'src/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  header: {
    height: windowHeight / 3.2,
  },
  background: {
    flex: 1,
    width: windowWidth,
    resizeMode: 'contain',
  },
  logo: {
    width: windowWidth / 3,
    height: windowWidth / 3,
    resizeMode: 'contain',
  },
  bar: {
    backgroundColor: Colors.white,
    position: 'absolute',
    top: windowHeight / 6.4 - 25,
    right: 0,
    minHeight: 50,
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 20,
    paddingVertical: 10,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    width: '50%',
  },
  bar1: {
    position: 'absolute',
    top: windowWidth / 6,
    left: 0,
    minHeight: 50,
    paddingLeft: 20,
    width: '50%',
  },
  boldText: {
    fontFamily: 'BlankenyScript',
    fontSize: 22,
    textAlign: 'center',
  },
  mediumText: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: 'Legacy',
    textAlign: 'center',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
