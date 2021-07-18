import React from 'react';
import { View, Image, Text } from 'react-native';
// Types
import { Club } from 'src/interfaces/Club';
// Theme
import styles from './style';
import { Images } from 'src/theme';
import { Team } from 'src/interfaces/Player';
import { getClubById } from 'src/helpers/Common';
import { useSelector } from 'react-redux';

interface Props {
  item: Team;
}

const GoalList: React.FC<Props> = ({ item }) => {
  const clubs = useSelector((state: any) => state.clubReducer.clubs);
  const club: Club = getClubById(clubs, item.club_id);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>{item.season}</Text>
        <View style={styles.row}>
          <Image
            source={Images[club.name.replace(/\s+/g, '_')]}
            style={styles.logo}
          />
          <Text style={styles.club}>{club.name}</Text>
        </View>
        <Text style={styles.text}>{item.goals}</Text>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

export default GoalList;
