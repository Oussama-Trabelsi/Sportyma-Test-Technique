import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// Components
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// Redux
import { useDispatch } from 'react-redux';
import PlayerActions from 'src/redux/player/Actions';
// Types
import { Player } from 'src/interfaces/Player';
import { StackNavigationProp } from '@react-navigation/stack';
// Helpers
import { getPlayerNumber } from 'src/helpers/Common';
// Theme
import styles from './style';
import { Colors } from 'src/theme';

interface Props {
  item: Player;
  navigation: StackNavigationProp<any, 'Club'>;
  clubId: number;
}

const PlayerGrid: React.FC<Props> = ({ item, navigation, clubId }) => {
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(PlayerActions.setPlayer(item));
    navigation.navigate('Player', { club_id: clubId });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          flex: 0.3,
        }}>
        <Text style={styles.number}>{getPlayerNumber(item.teams, clubId)}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.boldText}>{item.name}</Text>
        <View style={styles.row}>
          <FontAwesome name="soccer-ball-o" size={22} color={Colors.black} />
          <Text style={[styles.text, { marginLeft: 10 }]}>{item.position}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.flag}>{item.flag}</Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            {item.nationality}
          </Text>
        </View>
        <Text style={styles.text}>{`${item.birthdate} ( ${item.age} )`}</Text>
        <Text style={styles.text}>{`${item.height} cm`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlayerGrid;
