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
import * as ImagePicker from 'react-native-image-picker';
// Redux
import { useDispatch } from 'react-redux';
import ClubActions from 'src/redux/club/Actions';
// Types
import { Club, League } from 'src/interfaces/Club';
// Theme
import styles from './style';
import { Images, Colors } from 'src/theme';

interface Props {
  visible: boolean;
  hideModal: Function;
}

enum Type {
  CLUB = 'Club',
  STADIUM = 'Stadium',
}

const ClubModal: React.FC<Props> = ({ visible, hideModal }) => {
  const dispatch = useDispatch();

  const [clubName, setClubName] = useState<string>('');
  const [stadium, setStadium] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);
  const [clubUri, setClubUri] = useState<string | undefined>(undefined);
  const [stadiumUri, setStadiumUri] = useState<string | undefined>(undefined);
  const [formValid, setFormValid] = useState<boolean>(false);

  /* on mount : add listeners to keyboard to control modal size depending on keyboard visibility */
  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', () => {
      setFocused(false);
    });
    Keyboard.addListener('keyboardDidShow', () => {
      setFocused(true);
    });
  }, []);

  /* enables the save button once all data is provided , disables it otherwise */
  useEffect(() => {
    if (
      clubName &&
      clubName !== '' &&
      stadium &&
      stadium !== '' &&
      clubUri &&
      stadiumUri
    )
      setFormValid(true);
    else setFormValid(false);
  }, [clubName, stadium, clubUri, stadiumUri]);

  /* launches image library and sets image uri on image selection */
  const launchImageLibrary = (type: Type) => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
      },
      (response) => {
        if (type === Type.CLUB) setClubUri(response.uri);
        else setStadiumUri(response.uri);
      },
    );
  };

  /* generates a random number in range */
  const getRandomArbitrary = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  /* clears form and hides modal */
  const leave = () => {
    hideModal();
    setFocused(false);
    setClubName('');
    setStadium(''), setClubUri(undefined);
    setStadiumUri(undefined);
  };

  /* creates a new club */
  const saveClub = () => {
    const club: Club = {
      id: getRandomArbitrary(40, 100),
      league: League.PremierLeague,
      name: clubName,
      stadium: stadium,
      clubUri: clubUri,
      stadiumUri: stadiumUri,
    };
    dispatch(ClubActions.createClub(club));
    leave();
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
          <Image
            source={stadiumUri ? { uri: stadiumUri } : Images.soccer_field}
            style={styles.banner}
          />
          <TouchableOpacity
            style={styles.camera}
            onPress={() => launchImageLibrary(Type.STADIUM)}>
            <AntDesign name="camera" size={22} color={Colors.black} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              placeholder="Club name"
              onChangeText={(text) => setClubName(text)}
              value={clubName}
            />
            <TextInput
              style={styles.input}
              placeholder="Stadium"
              onChangeText={(text) => setStadium(text)}
              value={stadium}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => leave()}
              style={[styles.button, { backgroundColor: Colors.white }]}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={!formValid}
              onPress={() => saveClub()}
              style={[
                styles.button,
                { backgroundColor: formValid ? Colors.primary : Colors.grey },
              ]}>
              <Text style={[styles.buttonText, { color: Colors.white }]}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.logoContainer}
          onPress={() => launchImageLibrary(Type.CLUB)}>
          <Image
            source={clubUri ? { uri: clubUri } : Images.selection}
            style={styles.logo}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ClubModal;
