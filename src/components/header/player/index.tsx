import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Theme
import styles from './style';
import { Colors, Images } from 'src/theme';
import { Player } from 'src/interfaces/Player';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getPlayerNumber } from 'src/helpers/Common';

interface Props {
  player: Player;
  clubId: number;
  navigation: StackNavigationProp<any, 'Player'>;
}

const PlayerHeader: React.FC<Props> = ({ player, clubId, navigation }) => {
  return (
    <View style={styles.header}>
      <View
        style={{
          backgroundColor: Colors.primary,
          paddingTop: 20,
          flex: 1,
        }}>
        <View style={styles.topMask} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons name="md-return-up-back" size={35} color={Colors.white} />
        </TouchableOpacity>
        <Image source={Images.player} style={styles.image} />
        <View style={styles.mask}>
          <View>
            <Text style={styles.number}>
              {getPlayerNumber(player.teams, clubId)}
            </Text>
            <Text style={styles.name}>{player.name}</Text>
          </View>
          <View>
            <View style={styles.row}>
              <FontAwesome
                name="soccer-ball-o"
                size={22}
                color={Colors.black}
              />
              <Text style={[styles.text, { marginLeft: 10 }]}>
                {player.position}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>{player.flag}</Text>
              <Text style={[styles.text, { marginLeft: 10 }]}>
                {player.nationality}
              </Text>
            </View>
            <Text
              style={
                styles.text
              }>{`${player.birthdate} ( ${player.age} )`}</Text>
            <Text style={styles.text}>{`${player.height} cm`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlayerHeader;
