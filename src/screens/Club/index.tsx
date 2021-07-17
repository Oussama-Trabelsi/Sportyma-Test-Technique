import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Animated,
  Text,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import ClubHeader from 'src/components/header/club';
import PlayerGrid from 'src/components/card/player-grid-large';
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
  const players = useSelector((state: any) => state.playerReducer.data);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <ClubHeader club={club} navigation={navigation} />
      <FlatGrid
        style={{ flex: 1 }}
        itemDimension={(windowWidth - 60) / 2}
        spacing={20}
        data={players}
        renderItem={({ item }) => (
          <PlayerGrid item={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};
export default ClubDetails;
