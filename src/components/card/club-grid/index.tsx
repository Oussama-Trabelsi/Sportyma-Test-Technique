import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
// Types
import { Club } from 'src/interfaces/Club';
// Theme
import styles from './style';
import { Images } from 'src/theme';

interface Props {
  item: Club;
  navigation: StackNavigationProp<any, 'Home'>;
}

const Grid: React.FC<Props> = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Club', { club: item })}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={styles.logo}
          source={Images[item.name.replace(/\s+/g, '_')]}
        />
        <Text style={{ textAlign: 'center', marginTop: 10 }}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Grid;
