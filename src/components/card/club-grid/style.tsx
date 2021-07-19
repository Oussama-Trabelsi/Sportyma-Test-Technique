import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'src/theme';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  logo: {
    width: (windowWidth - 80) / 3,
    height: (windowWidth - 80) / 3,
    resizeMode: 'contain',
  },
  boldText: {
    color: Colors.black,
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    fontFamily: 'BlankenyScript',
  },
  new: {
    position: 'absolute',
    right: -10,
    top: 0,
    width: (windowWidth - 80) / 9,
    height: (windowWidth - 80) / 9,
    resizeMode: 'contain',
  },
});
