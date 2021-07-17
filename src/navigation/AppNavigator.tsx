import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Root from 'src/screens/Root';
import Home from 'src/screens/Home';
import Club from 'src/screens/Club';
import ClubHeader from 'src/components/header/club';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root">
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
          component={Club}
          options={({ navigation, route }) => ({
            title: '',
            headerLeft: () => <ClubHeader navigation={navigation} route={route} />, 
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
