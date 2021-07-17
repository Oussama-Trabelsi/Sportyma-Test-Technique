import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'src/theme';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    width: windowWidth - 20,
    resizeMode: 'contain',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    alignItems: 'center',
    marginBottom: 10,
  },
  logoContainer: {
    width: (windowWidth - 40) / 4,
    height: (windowWidth - 40) / 4,
    backgroundColor: Colors.white,
    borderRadius: windowWidth / 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  logo: {
    width: (windowWidth - 120) / 4,
    height: (windowWidth - 120) / 4,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flex: 1,
    borderRadius: 16,
    height: (windowWidth - 80) / 4 + 40,
    padding: 10,
  },
  boldText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 21,
    maxWidth: '65%',
    fontFamily: 'BlankenyScript'
  },
  mediumText: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    color: Colors.white,
    fontSize: 15,
    fontFamily: 'Legacy'
  },
});
