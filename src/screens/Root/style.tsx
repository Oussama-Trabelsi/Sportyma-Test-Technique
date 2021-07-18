import { StyleSheet } from 'react-native';
import { Colors } from 'src/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  bottom: {
    position: 'absolute',
    bottom: 30,
    textAlign: 'center',
    fontFamily: 'CarmenSans-Regular',
    fontSize: 20 
  }
});
