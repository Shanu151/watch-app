import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CreateSplashscreen from "./src/components/screens/CreateSplashscreen";
import CreateAccount from "./src/components/screens/CreateAccount";
import MainScreen from "./src/components/Dashboard/MainScreen";
import LogInScreen from "./src/components/screens/LogInScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [loginStatusChecked, setLoginStatusChecked] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const storedLoginStatus = await AsyncStorage.getItem("isLoggedIn");
      if (storedLoginStatus && storedLoginStatus === "true") {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Error checking login status:", error);
    } finally {
      setLoginStatusChecked(true); // Set the flag after login status check
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch("https://new-api-staging.rydeu.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          type: "customer",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsLoggedIn(true);
        await AsyncStorage.setItem("isLoggedIn", "true");
        console.log("Authentication successful");
      } else {
        console.log("Authentication failed");
        throw new Error("Authentication failed");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      throw error;
    }
  };

  const handleLogout = async (navigation) => {
    try {
      await AsyncStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
      setShowLogoutPopup(false);
      navigation.navigate("LogInScreen");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  if (!loginStatusChecked) {
    return null; // You can render a loading indicator here if needed
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? "MainScreen" : "LogInScreen"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LogInScreen">
          {(props) => (
            <LogInScreen
              {...props}
              handleLogin={handleLogin}
              isLoggedIn={isLoggedIn}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="CreateSplashscreen"
          component={CreateSplashscreen}
        />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        {/* <Stack.Screen name="MainScreen">
          {(props) => (
            <MainScreen
              {...props}
              setShowLogoutPopup={setShowLogoutPopup}
              isLoggedIn={isLoggedIn}
              handleLogout={handleLogout}
            />
          )} */}
        <Stack.Screen name="MainScreen">
          {(props) => (
            <MainScreen
              {...props}
              setShowLogoutPopup={setShowLogoutPopup}
              isLoggedIn={isLoggedIn}
              handleLogout={() => handleLogout(props.navigation)} // Pass navigation prop
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>

      {/* Logout Popup */}
      {showLogoutPopup && (
        <View style={style.logoutPopup}>
          <Text style={style.logoutPopupText}>
            Are you sure you want to log out?
          </Text>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={style.logoutPopupButton}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </NavigationContainer>
  );
}
