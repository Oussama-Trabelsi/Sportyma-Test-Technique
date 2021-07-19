import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'src/theme';

const windowWidth = Dimensions.get('screen').width;

export default StyleSheet.create({
  modal: {
    marginHorizontal: 20,
  },
  container: {
    borderColor: Colors.black,
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: Colors.white,
  },
  logoContainer: {
    width: windowWidth / 4 + 30,
    height: windowWidth / 4 + 30,
    position: 'absolute',
    backgroundColor: Colors.white,
    top: 130 - windowWidth / 5,
    right: (windowWidth - 40) / 2 - windowWidth / 6,
    borderRadius: (windowWidth / 4 + 30) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.black,
    borderWidth: 2,
  },
  logo: {
    width: windowWidth / 5,
    height: windowWidth / 5,
    resizeMode: 'contain',
  },
  banner: {
    width: '98.5%',
    height: 120,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    borderTopWidth: 2,
    borderColor: Colors.black,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: windowWidth / 10,
  },
  input: {
    width: '60%',
    borderBottomWidth: 1,
    borderColor: Colors.grey,
    fontFamily: 'Legacy',
    fontSize: 16,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    padding: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    borderRadius: 25,
    borderColor: Colors.black,
    borderWidth: 1,
  },
  buttonText: {
    fontFamily: 'Legacy',
    fontSize: 15,
  },
  camera: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.black,
    borderWidth: 1,
  },
});
