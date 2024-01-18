import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert, // Import Alert for showing confirmation dialogs
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { style } from "../screens/globalstyle";
import HomeScreen from "./HomeScreen";
import Contacts from "./Contacts";
import Chats from "./Chats";
import Article from "./Article";
import Albums from "./Albums";

const Tab = createBottomTabNavigator();

const MainScreen = ({
  navigation,
  isLoggedIn,
  setShowLogoutPopup,
  handleLogout,
}) => {
  const confirmLogout = () => {
    // Display a confirmation dialog
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          onPress: () => {
            // Handle logout when the user confirms
            handleLogout();
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#E99282" }}>
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

      {/* {isLoggedIn && (
        <TouchableOpacity style={styles.logoutButton} onPress={confirmLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      )} */}
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
  logoutButton: {
    position: "absolute",
    top: 30,
    right: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },

  logoutButtonText: {
    color: "#E99282",
    fontWeight: "bold",
  },
});
