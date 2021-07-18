import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            padding: 20,
            height: windowHeight / 3.2,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons name="md-return-up-back" size={35} color={Colors.white} />
          </TouchableOpacity>
          <View style={styles.bar}>
            <Text style={styles.boldText}>{club.name}</Text>
          </View>
          <View style={styles.bar1}>
          <Image
              style={styles.logo}
              source={Images[club.name.replace(/\s+/g, '_')]}
            />
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="soccer-field"
              size={30}
              color={Colors.white}
            />
            <Text style={[styles.mediumText, {marginLeft: 10}]}>{club.stadium}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ClubHeader;
