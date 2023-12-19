import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import HomeScreen from "./HomeScreen";
import Contacts from "./Contacts";
import Chats from "./Chats";
import Article from "./Article";
import Albums from "./Albums";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { style } from "../screens/globalstyle";

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#E99282",
      }}
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: styles.container,
          headerShown: false,
          tabBarActiveTintColor: "#E99282",
          tabBarInactiveTintColor: "gray",
          tabBarLabel: "",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "HomeScreen") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Contacts") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Chats") {
              iconName = focused ? "chatbubbles" : "chatbubbles-outline";
            } else if (route.name === "Article") {
              iconName = focused ? "newspaper" : "newspaper-outline";
            } else if (route.name === "Albums") {
              iconName = focused ? "albums" : "albums-outline";
            }
            return (
              <View style={styles.tab_icon_style}>
                <Ionicons
                  name={iconName}
                  size={Dimensions.get("screen").width * 0.05}
                  color={color}
                />
                <Text
                  style={{
                    fontSize: 10,
                    color: color,
                  }}
                >
                  {route.name}
                </Text>
              </View>
            );
          },
        })}
      >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="Contacts" component={Contacts} />
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="Article" component={Article} />
        <Tab.Screen name="Albums" component={Albums} />
      </Tab.Navigator>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  tabBarStyle: {
    padding: 20,
  },
  container: {
    height: Dimensions.get("window").height * 0.06,
    padding: 10,
    paddingTop: 15,
    margin: 10,
    paddingLeft: 10,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  tab_icon_style: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    width: "100%",
  },
});
