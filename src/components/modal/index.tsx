import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// Components
import Modal from 'react-native-modal';
// Theme
import styles from './style';
import { Colors } from 'src/theme';

interface Props {
  visible: boolean;
  hideModal: Function;
}

const ClubModal: React.FC<Props> = (props) => {

  return (
    <Modal
      isVisible={props.visible}
      style={styles.modal}
      animationIn="bounceIn"
      animationOut="bounceOut"
      backdropTransitionOutTiming={0}>
      <View style={styles.container}>
        
      </View>
    </Modal>
  );
};

export default ClubModal;
