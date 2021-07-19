import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
// Components
import PlayerHeader from 'src/components/header/player';
import GoalList from 'src/components/card/goal-list';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PlayerStats from './Stats';
// Redux
import { useSelector } from 'react-redux';
// Types
import { Player } from 'src/interfaces/Player';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
// Theme
import styles from './style';
import { Colors } from 'src/theme';

interface Props {
  navigation: StackNavigationProp<any, 'Player'>;
  route: RouteProp<any, 'Player'>;
}

const PlayerDetails: React.FC<Props> = ({ navigation, route }) => {
  const player: Player = useSelector(
    (state: any) => state.playerReducer.player,
  );
  const club_id: number = route.params?.club_id;

  const [showStats, setShowStats] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <PlayerHeader player={player} clubId={club_id} navigation={navigation} />
      <View style={styles.row}>
        <Text style={styles.title}>Premier League Playing Career</Text>
        {!showStats ? (
          <TouchableOpacity onPress={() => setShowStats(true)}>
            <MaterialCommunityIcons
              name="spider-web"
              size={35}
              color={Colors.black}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setShowStats(false)}>
            <MaterialCommunityIcons
              name="format-list-bulleted"
              size={35}
              color={Colors.black}
            />
          </TouchableOpacity>
        )}
      </View>
      {!showStats ? (
        <View style={{ flex: 1 }}>
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
        </View>
      ) : (
        <PlayerStats />
      )}
    </SafeAreaView>
  );
};
export default PlayerDetails;
