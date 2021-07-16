// screens/Home.js

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Root extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Root screen</Text>
      </View>
    );
  }
}

export default Root;
