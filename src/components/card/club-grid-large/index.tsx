import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
// Types
import { Club } from 'src/interfaces/Club';
// Theme
import styles from './style';
import { Colors, Images } from 'src/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  item: Club;
}

const GridLarge: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          flex: 0.5,
        }}>
        <ImageBackground
          imageStyle={{ borderTopRightRadius: 11, borderTopLeftRadius: 11 }}
          style={styles.background}
          source={Images[item.stadium.replace(/\s+/g, '_')]}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={Images[item.name.replace(/\s+/g, '_')]}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={{ backgroundColor: Colors.white, flex: 0.5 }}>
        <Text style={styles.boldText}>{item.name}</Text>
        <View style={styles.column}>
          <MaterialCommunityIcons
            name="soccer-field"
            size={30}
            color={Colors.primary}
          />
          <Text style={styles.mediumText}>{item.stadium}</Text>
        </View>
      </View>
    </View>
  );
};

export default GridLarge;
/*
<View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={styles.logo}
          source={Images[item.name.replace(/\s+/g, '_')]}
        />
        <Text style={styles.boldText}>{item.name}</Text>
        <Text style={styles.mediumText}>{item.stadium}</Text>
      </View>

*/
