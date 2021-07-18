import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
// Theme
import styles from './style';
import { Images } from 'src/theme';
import { useDispatch, useSelector } from 'react-redux';
import ClubActions from 'src/redux/club/Actions';

interface Props {
  navigation: StackNavigationProp<any, 'Club'>;
}

const PlayerGridEmpty: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  const clubs = useSelector((state: any) => state.clubReducer.clubs);

  const onPress = () => {
    dispatch(ClubActions.generateSquad(1));
    navigation.navigate('Club', { club: clubs[0] });
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
