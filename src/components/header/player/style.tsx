import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'src/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  header: {
    height: windowHeight / 2.5,
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
  },
  image: {
    height: windowWidth / 2,
    width: windowWidth / 2,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    right: 10
  },
  mask: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    top: 60,
    left: 0,
    height: (windowHeight / 2.5) - 60,
    width: windowWidth,
    padding: 10,
    justifyContent: 'space-around'
  },
  number: {
    fontFamily: 'CarmenSans-Bold',
    color: Colors.white,
    fontSize: 33
  },
  name: {
    fontFamily: 'CarmenSans-Heavy',
    color: Colors.white,
    fontSize: 24
  },
  text: {
    fontFamily: 'CarmenSans-SemiBold',
    color: Colors.white,
    fontSize: 16,
    marginBottom: 4
  }
});
