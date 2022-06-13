import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from '../Page/HomeScreen'
import ArtistesScreen from '../Page/ArtistesScreen'
import EventsScreen from '../Page/EventsScreen'
import LoginScreen from '../Page/LoginScreen'

//Screen name
const events = "Events"
const artistes = "Artistes"
const home = "Home"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

class Routes extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={home}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;
  
              if (rn === home) {
                iconName = focused ? 'home' : 'home-outline';
  
              } else if (rn === artistes) {
                iconName = focused ? 'list' : 'list-outline';
  
              } else if (rn === events) {
                iconName = focused ? 'settings' : 'settings-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70}
          }}>

            <Tab.Screen name={events} component={EventsScreen} />
            <Tab.Screen name={home} component={HomeScreen} />
            <Tab.Screen name={artistes} component={ArtistesScreen} />

        </Tab.Navigator>

      </NavigationContainer>
    );
  }
}

export default Routes


/***
 * 
 *         <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Events" component={Events}/>
          <Stack.Screen name="Artistes" component={Artistes}/>
        </Stack.Navigator>
 */