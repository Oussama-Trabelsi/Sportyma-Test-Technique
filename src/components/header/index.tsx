import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
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
        <View style={styles.button}>
          <Text style={styles.buttonText}>{league}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Header;
