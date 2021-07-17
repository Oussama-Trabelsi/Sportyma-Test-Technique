import React, { useEffect, useState } from 'react';
import { View, Image, Animated, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import ClubActions from 'src/redux/club/Actions';
// Theme
import styles from './style';
import { Images } from 'src/theme';

interface Props {
  navigation: StackNavigationProp<any, 'Club'>;
}

const Club: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text>club details</Text>
    </View>
  );
};
export default Club;
