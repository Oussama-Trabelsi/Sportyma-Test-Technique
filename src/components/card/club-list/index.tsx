import React from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
// Types
import { Club } from 'src/interfaces/Club';
// Theme
import styles from './style';
import { Images } from 'src/theme';

interface Props {
  item: Club;
  navigation: StackNavigationProp<any, 'Home'>;
}

const ClubList: React.FC<Props> = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Club', { club: item })}>
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
    </TouchableOpacity>
  );
};

export default ClubList;
