import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'src/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  background: {
    width: windowWidth,
    height: windowHeight / 4,
    resizeMode: 'contain'
  },
  button: {
    backgroundColor: Colors.white,
    position: 'absolute',
    top: 40,
    right: 0,
    height: 50,
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 20,
    paddingVertical: 10,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  buttonText: {
    fontFamily: 'Legacy',
    fontSize: 17
  }
});
