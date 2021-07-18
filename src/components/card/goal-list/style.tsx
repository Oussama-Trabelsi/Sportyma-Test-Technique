import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'src/theme';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    width: windowWidth / 8,
    height: windowWidth / 8,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 100,
  },
  club: {
    fontFamily: 'BlankenyScript',
    marginLeft: 10,
    fontSize: 17,
  },
  text: {
    fontFamily: 'Legacy',
    fontSize: 17,
  },
  divider: {
    backgroundColor: Colors.grey,
    height: 1,
    width: '100%',
  },
});
