import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen';
import CreateAccount from '../screens/CreateAccount';
import Contacts from './Contacts';
import Chats from './Chats';
import Article from './Article';
import Albums from './Albums';

const Tab=createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Article" component={Article} />
      <Tab.Screen name="Albums" component={Albums} />
      
    </Tab.Navigator>
  )
}

export default MainScreen

const styles = StyleSheet.create({})