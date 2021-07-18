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
import PlayerHeader from 'src/components/header/player';
import PlayerGrid from 'src/components/card/player-grid-large';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import PlayerActions from 'src/redux/player/Actions';
import { Player } from 'src/interfaces/Player';
// Theme
import styles from './style';

interface Props {
  navigation: StackNavigationProp<any, 'Player'>;
  route: RouteProp<any, 'Player'>;
}

const PlayerDetails: React.FC<Props> = ({ navigation, route }) => {
  const player: Player = route.params?.player;
  const club_id: number = route.params?.club_id;
  //const team = useSelector((state: any) => state.clubReducer.team);
  const windowWidth = Dimensions.get('window').width;
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(ClubActions.generateSquad(club.id));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <PlayerHeader player={player} clubId={club_id} navigation={navigation} />
      <View style={{flex: 1, backgroundColor: 'transparent'}}/>
    </SafeAreaView>
  );
};
export default PlayerDetails;
/*
<ClubHeader club={club} navigation={navigation} />
      <FlatGrid
        style={{ flex: 1 }}
        itemDimension={(windowWidth - 60) / 2}
        spacing={20}
        data={team}
        renderItem={({ item }) => (
          <PlayerGrid item={item} navigation={navigation} clubId={club.id} />
        )}
      />
*/
