import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
// Theme
import styles from './style';
import { Images } from 'src/theme';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={Images.logo} />
      </View>
    );
  }
}

export default Home;
