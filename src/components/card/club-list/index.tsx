import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
// Types
import { Club } from 'src/interfaces/Club';
// Theme
import styles from './style';
import { Images } from 'src/theme';

interface Props {
  item: Club;
}

const ClubList: React.FC<Props> = ({ item }) => {
  return (
    <ImageBackground
      imageStyle={{ borderRadius: 16 }}
      style={styles.container}
      source={Images[item.stadium.replace(/\s+/g, '_')]}>
      <View style={styles.row}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={Images[item.name.replace(/\s+/g, '_')]}
          />
        </View>
        <Text style={styles.boldText}>{item.name}</Text>
      </View>
      <Text style={styles.mediumText}>{item.stadium}</Text>
    </ImageBackground>
  );
};

export default ClubList;
