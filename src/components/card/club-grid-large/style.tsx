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
    borderTopRightRadius: 11.5,
    borderTopLeftRadius: 11.5,
    shadowColor: Colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
  logo: {
    width: (windowWidth - -60) / 4,
    height: (windowWidth - 60) / 4,
    resizeMode: 'contain',
  },
  boldText: {
    color: Colors.black,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'BlankenyScript',
  },
  mediumText: {
    color: Colors.primary,
    fontSize: 15,
    fontFamily: 'Legacy',
    textAlign: 'center',
    marginTop: 10,
  },
  background: {
    width: '100%',
    height: (windowHeight - 50) / 6,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: (windowWidth - -60) / 4,
    height: (windowWidth - -60) / 4,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: (windowWidth - -60) / 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
