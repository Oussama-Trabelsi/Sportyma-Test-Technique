import { StyleSheet } from 'react-native';
import { Colors } from 'src/theme';

export default StyleSheet.create({
  modal: {
    marginHorizontal: 20,
  },
  container: {
    borderColor: Colors.black,
    borderWidth: 2,
    borderRadius: 8,
    flex: 0.45,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    padding: 20,
  },
});
