import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import ClubActions from 'src/redux/club/Actions';
// Theme
import styles from './style';
import { Images } from 'src/theme';


interface Props {}

const Home: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();
  const clubs = useSelector((state: any) => state.clubReducer.clubs);

  return (
    <View style={styles.container}>
      <FlatGrid
        itemDimension={70}
        spacing={20}
        data={clubs}
        renderItem={({ item }) => (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={styles.logo}
              source={Images[item.name.replace(/\s+/g, '_')]}
            />
            <Text style={{ textAlign: 'center', marginTop: 10 }}>
              {item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
//<Image style={styles.logo} source={Images.logo} />
