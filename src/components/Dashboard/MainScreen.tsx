import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HomeScreen from './HomeScreen';
import Contacts from './Contacts';
import Chats from './Chats';
import Article from './Article';
import Albums from './Albums'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { style } from '../screens/globalstyle';

const Tab=createBottomTabNavigator();

const MainScreen = () => {
  return (
<Tab.Navigator
      screenOptions={({ route}) => ({
        headerShown:false,
        tabBarIcon: ({ focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Contacts') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Chats') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Article') {
            iconName = focused ? 'newspaper' : 'newspaper-outline'; 
          } else if (route.name === 'Albums') {
            iconName = focused ? 'albums' : 'albums-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#E99282',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Article" component={Article} />
      <Tab.Screen name="Albums" component={Albums} />


    </Tab.Navigator>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  tabBarStyle:{
    padding:20,
  }
})