import React from 'react';
import { View, Image, Text } from 'react-native';
// Types
import { Club } from 'src/interfaces/Club';
// Theme
import styles from './style';
import { Images } from 'src/theme';

interface Props {
  item: Club;
}

const ClubList: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={Images[item.name.replace(/\s+/g, '_')]}
      />
      <Text style={{ textAlign: 'center', marginTop: 10 }}>{item.name}</Text>
    </View>
  );
};

export default ClubList;
