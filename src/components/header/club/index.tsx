import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Theme
import styles from './style';
import { Colors, Images } from 'src/theme';
import { Club } from 'src/interfaces/Club';

interface Props {
  club: Club;
  navigation: StackNavigationProp<any, 'Club'>;
}

const ClubHeader: React.FC<Props> = ({ club, navigation }) => {
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.header}>
      <ImageBackground
        source={Images[club.stadium.replace(/\s+/g, '_')]}
        style={styles.background}>
        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            padding: 20,
            height: windowHeight / 4,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.button}>
            <Ionicons name="md-return-up-back" size={35} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ClubHeader;
