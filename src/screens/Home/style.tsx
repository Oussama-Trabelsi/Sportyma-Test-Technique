import { StyleSheet } from 'react-native';
import { Colors } from 'src/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20,
    //justifyContent: 'center',
    //alignItems: 'center'
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
});
