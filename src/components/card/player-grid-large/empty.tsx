import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
// Types
import { StackNavigationProp } from '@react-navigation/stack';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import ClubActions from 'src/redux/club/Actions';
// Helpers
import { getClubById } from 'src/helpers/Common';
// Theme
import styles from './style';
import { Images } from 'src/theme';

interface Props {
  navigation: StackNavigationProp<any, 'Club'>;
}

const PlayerGridEmpty: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  const clubs = useSelector((state: any) => state.clubReducer.clubs);

  const onPress = async () => {
    const club = await getClubById(clubs, 1);
    dispatch(ClubActions.generateSquad(1));
    navigation.navigate('Club', { club: club });
  };
  return (
    <View style={styles.emptyContainer}>
      <Text style={[styles.text, { fontSize: 18, marginBottom: 20 }]}>
        Generating data can be time consuming
      </Text>
      <Text style={[styles.text, { fontSize: 16, marginBottom: 40 }]}>
        For testing purposes check Arsenal team
      </Text>
      <TouchableOpacity onPress={() => onPress()}>
        <Image style={styles.logo} source={Images.Arsenal} />
      </TouchableOpacity>
    </View>
  );
};

export default PlayerGridEmpty;
