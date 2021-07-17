import React, { useEffect, useState } from 'react';
import { View, Image, Animated, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import ClubActions from 'src/redux/club/Actions';
import { Club } from 'src/interfaces/Club';
// Theme
import styles from './style';
import { Images } from 'src/theme';

interface Props {
  navigation: StackNavigationProp<any, 'Club'>;
  route: RouteProp<any, 'Club'>;
}

const ClubDetails: React.FC<Props> = ({ navigation, route }) => {
  const club: Club = route.params?.club;

  useEffect(() => {
    console.log(club);
  }, []);

  return (
    <View style={styles.container}>
      <Text>club details</Text>
    </View>
  );
};
export default ClubDetails;
