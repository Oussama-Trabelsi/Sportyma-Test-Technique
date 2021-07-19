import React, { useEffect, useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
// Components
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
// Theme
import styles from './style';
import { Images, Colors } from 'src/theme';

interface Props {
  visible: boolean;
  hideModal: Function;
}

const ClubModal: React.FC<Props> = ({ visible, hideModal }) => {
  const [clubName, setClubName] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', () => {
      setFocused(false);
    });
    Keyboard.addListener('keyboardDidShow', () => {
      setFocused(true);
    });
  }, []);

  const pickLogo = () => {
    console.log('pick logo logic ..');
  };

  const pickBanner = () => {
    console.log('pick banner logic ..');
  };

  const saveClub = () => {
    console.log('save club logic ..');
  };

  return (
    <Modal
      isVisible={visible}
      style={styles.modal}
      animationIn="bounceIn"
      animationOut="bounceOut"
      backdropTransitionOutTiming={0}>
      <KeyboardAvoidingView
        style={[styles.container, { flex: focused ? 0.75 : 0.45 }]}>
        <View>
          <Image source={Images.soccer_field} style={styles.banner} />
          <TouchableOpacity style={styles.camera} onPress={() => pickBanner()}>
            <AntDesign name="camera" size={22} color={Colors.black} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Club name"
            onChangeText={(text) => setClubName(text)}
            value={clubName}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                hideModal();
                setFocused(false);
              }}
              style={[styles.button, { backgroundColor: Colors.white }]}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => saveClub()}
              style={[styles.button, { backgroundColor: Colors.primary }]}>
              <Text style={[styles.buttonText, { color: Colors.white }]}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.logoContainer}
          onPress={() => pickLogo()}>
          <Image source={Images.selection} style={styles.logo} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ClubModal;
