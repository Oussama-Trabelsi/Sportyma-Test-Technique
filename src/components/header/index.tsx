import React, { useState } from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
// Theme
import styles from './style';
import { Images } from 'src/theme';

interface Props {}

const Header: React.FC<Props> = ({}) => {
  return (
    <ImageBackground source={Images.Premier_League} style={styles.background}>
      <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></View>
    </ImageBackground>
  );
};

export default Header;
