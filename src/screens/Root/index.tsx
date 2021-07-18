import React, { useEffect, useState } from 'react';
import { View, Text, Image, Animated } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
// Redux
import { useDispatch } from 'react-redux';
import ClubActions from 'src/redux/club/Actions';
import PlayerActions from 'src/redux/player/Actions';
// Theme
import styles from './style';
import { Images } from 'src/theme';

interface Props {
  navigation: StackNavigationProp<any, 'Root'>;
}

const Root: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const buildData = () => {
    dispatch(ClubActions.loadClubs());
    dispatch(PlayerActions.loadPlayers());
  };

  const [LogoAnime] = useState<Animated.Value>(new Animated.Value(0));

  useEffect(() => {
    buildData();
    Animated.parallel([
      Animated.spring(LogoAnime, {
        toValue: 1,
        tension: 10,
        friction: 2,
        useNativeDriver: false,
      }),
    ]).start(() => {
      setTimeout(() => props.navigation.navigate('Home'), 1000);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          opacity: LogoAnime,
          top: LogoAnime.interpolate({
            inputRange: [0, 1],
            outputRange: [80, 0],
          }),
        }}>
        <Image source={Images.logo} style={styles.logo} />
      </Animated.View>
      <Text style={styles.bottom}>@Oussama-Trabelsi</Text>
    </View>
  );
};
export default Root;
