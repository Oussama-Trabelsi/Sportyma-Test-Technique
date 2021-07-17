import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { League } from 'src/interfaces/Club';
// Theme
import styles from './style';
import { Images } from 'src/theme';

interface Props {
  league: League;
}

const Header: React.FC<Props> = ({ league }) => {
  return (
    <ImageBackground source={Images.Premier_League} style={styles.background}>
      <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{league}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Header;
