import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Page/Home'
import Friend from '../Page/Friend'
import Events from '../Page/Events'
import Login from '../Page/Login'


const Stack = createStackNavigator();

class Routes extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Events" component={Events}/>
          <Stack.Screen name="Friend" component={Friend}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Routes