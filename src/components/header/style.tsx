import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'src/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  header: {
    flex: 0.3,
  },
  background: {
    width: windowWidth,
    height: windowHeight / 4,
    resizeMode: 'contain'
  },
});
