import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'src/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  header: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: windowWidth,
    height: windowHeight / 3,
    resizeMode: 'contain'
  },
  button: {
    width: 40,
    height: 40,
  }
});
