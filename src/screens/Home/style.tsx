import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'src/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    //justifyContent: 'center',
    //alignItems: 'center'
  },
  header: {
    flex: 0.3
  },
  content: {
    flex: 1,
  },
  background: {
    width: windowWidth,
    height: windowHeight / 4,
    resizeMode: 'contain'
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  bar: {
    height: 50,
    backgroundColor: Colors.primary,
    borderTopWidth: 1,
    borderColor: Colors.white,
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
});
