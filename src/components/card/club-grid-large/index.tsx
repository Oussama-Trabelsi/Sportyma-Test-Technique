import React, { useEffect } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
// Components
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Types
import { Club } from 'src/interfaces/Club';
import { StackNavigationProp } from '@react-navigation/stack';
// Theme
import styles from './style';
import { Colors, Images } from 'src/theme';

interface Props {
  item: Club;
  navigation: StackNavigationProp<any, 'Home'>;
}

const GridLarge: React.FC<Props> = ({ item, navigation }) => {
  useEffect(() => {
    console.log(item.stadiumUri);
  }, []);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Club', { club: item })}>
      <View
        style={{
          flex: 0.5,
        }}>
        <ImageBackground
          imageStyle={{ borderTopRightRadius: 11, borderTopLeftRadius: 11 }}
          style={styles.background}
          source={
            item.stadiumUri
              ? { uri: item.stadiumUri }
              : Images[item.stadium.replace(/\s+/g, '_')]
          }>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={
                item.clubUri
                  ? { uri: item.clubUri }
                  : Images[item.name.replace(/\s+/g, '_')]
              }
            />
          </View>
        </ImageBackground>
      </View>
      <View style={{ backgroundColor: Colors.white, flex: 0.5 }}>
        <Text style={styles.boldText}>{item.name}</Text>
        <View style={styles.column}>
          <MaterialCommunityIcons
            name="soccer-field"
            size={30}
            color={Colors.primary}
          />
          <Text style={styles.mediumText}>{item.stadium}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GridLarge;
