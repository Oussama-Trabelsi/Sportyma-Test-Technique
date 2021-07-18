import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Root from 'src/screens/Root';
import Home from 'src/screens/Home';
import ClubDetails from 'src/screens/Club';
import PlayerDetails from 'src/screens/Player';
import ClubHeader from 'src/components/header/club';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Root"
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Club"
          component={ClubDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Player"
          component={PlayerDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
