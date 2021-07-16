import React from 'react';
import { LogBox } from 'react-native';
import AppNavigator from 'src/navigation/AppNavigator';

const App = () => {
  LogBox.ignoreAllLogs(true);
  return <AppNavigator />;
};

export default App;
