import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'src/theme';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: (windowWidth - 80) / 3,
    height: (windowWidth - 80) / 3,
    resizeMode: 'contain',
    marginRight: 20,
  },
});
