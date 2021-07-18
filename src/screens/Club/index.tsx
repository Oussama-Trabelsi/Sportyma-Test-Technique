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
import PlayerGridEmpty from 'src/components/card/player-grid-large/empty';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import ClubActions from 'src/redux/club/Actions';
import { Club } from 'src/interfaces/Club';
// Theme
import styles from './style';

interface Props {
  navigation: StackNavigationProp<any, 'Club'>;
  route: RouteProp<any, 'Club'>;
}

const ClubDetails: React.FC<Props> = ({ navigation, route }) => {
  const club: Club = route.params?.club;
  const team = useSelector((state: any) => state.clubReducer.team);
  const windowWidth = Dimensions.get('window').width;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ClubActions.generateSquad(club.id));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ClubHeader club={club} navigation={navigation} />
      <FlatGrid
        ListEmptyComponent={<PlayerGridEmpty navigation={navigation} />}
        style={{ flex: 1 }}
        itemDimension={(windowWidth - 60) / 2}
        spacing={20}
        data={team}
        renderItem={({ item }) => (
          <PlayerGrid item={item} navigation={navigation} clubId={club.id} />
        )}
      />
    </SafeAreaView>
  );
};
export default ClubDetails;
