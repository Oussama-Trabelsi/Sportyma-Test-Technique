import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
// Types
import { Player } from 'src/interfaces/Player';
// Theme
import styles from './style';
import { Colors } from 'src/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface Props {
  item: Player;
  navigation: StackNavigationProp<any, 'Club'>;
  clubId: number;
}

const PlayerGrid: React.FC<Props> = ({ item, navigation, clubId }) => {
  
  /* retrieve player number within a team */
  const getPlayerNumber = (): number => {
    let number = -1;
    item.teams.map((t) => {
      if (t.club_id === clubId) number = t.number;
      return;
    });
    return number;
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          flex: 0.3,
        }}>
        <Text style={styles.number}>{getPlayerNumber()}</Text>
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
    </View>
  );
};

export default PlayerGrid;
