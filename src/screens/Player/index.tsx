import React, { useEffect } from 'react';
import { View, FlatList, Text, SafeAreaView } from 'react-native';
// Components
import PlayerHeader from 'src/components/header/player';
import GoalList from 'src/components/card/goal-list';
// Redux
import { useSelector } from 'react-redux';
// Types
import { Player } from 'src/interfaces/Player';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
// Theme
import styles from './style';

interface Props {
  navigation: StackNavigationProp<any, 'Player'>;
  route: RouteProp<any, 'Player'>;
}

const PlayerDetails: React.FC<Props> = ({ navigation, route }) => {
  const player: Player = useSelector(
    (state: any) => state.playerReducer.player,
  );
  const club_id: number = route.params?.club_id;

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <PlayerHeader player={player} clubId={club_id} navigation={navigation} />
      <Text style={styles.title}>Premier League Playing Career</Text>
      <View style={styles.table}>
        <Text style={styles.tableText}>Season</Text>
        <Text style={styles.tableText}>Club</Text>
        <Text style={styles.tableText}>Goals</Text>
      </View>
      <FlatList
        style={{ flex: 1, padding: 20 }}
        data={player.teams}
        renderItem={({ item }) => <GoalList item={item} />}
        keyExtractor={(item) => `${item.club_id}${item.season}`}
      />
    </SafeAreaView>
  );
};
export default PlayerDetails;
