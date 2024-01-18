import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import { style } from "./globalstyle";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Images = {
  image: {
    Loginwatch: require("../../assets/images/Login-watch.png"),
  },
};

const LogInScreen = ({
  navigation,
  handleLogin,
  isLoggedIn,
  setShowLogoutPopup,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goToCreateSplashscreen = () => {
    navigation.goBack();
  };

  const goToCreateAccount = () => {
    navigation.navigate("CreateAccount");
  };

  const handleLogout = () => {
    setShowLogoutPopup(false);
    // Implement any additional logout logic here
  };

  const navigateToMainScreen = async () => {
    try {
      // Perform actual authentication logic here
      await handleLogin(email, password);

      // If authentication is successful
      navigation.navigate("MainScreen");
      console.log("Navigated to MainScreen");
    } catch (error) {
      console.error("Error during authentication:", error);
      // Handle authentication error here
    }
  };

  const styles = StyleSheet.create({
    headerdata: {
      padding: 16,
      flexDirection: "row",
      alignItems: "center",
    },
    createBannerimage: {},
    loginform: {},
    welcombackscrdata: {
      paddingHorizontal: 24,
    },
    loginwatch: {
      width: "100%",
    },
  });

  return (
    <View style={style.container}>
      {/* Header data */}
      <View style={styles.headerdata}>
        <TouchableOpacity
          style={style.backbutton}
          // onPress={() => goToCreateSplashscreen()}
        >
          <Text style={style.backscreentext}>Back</Text>
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            zIndex: -1,
            width: Dimensions.get("window").width,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={style.screennametext}>Log In</Text>
        </View>
      </View>
      {/* header image section */}
      <View style={[styles.createBannerimage]}>
        {/* Use require to load the image */}
        <Image source={Images.image.Loginwatch} style={styles.loginwatch} />
      </View>
      <View style={styles.welcombackscrdata}>
        <View>
          <Text style={[style.logoW]}>W</Text>
          <Text style={style.headingtext}>Welcome back</Text>
        </View>
        <View style={styles.loginform}></View>
      </View>
      {/* login section */}
      <ScrollView style={{ padding: 26 }}>
        <View>
          <TextInput
            style={style.input}
            underlineColorAndroid="#DFDFE7"
            placeholder="Email"
            placeholderTextColor="#9E9E9E"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={style.input}
            placeholder="Password"
            underlineColorAndroid="#DFDFE7"
            placeholderTextColor="#9E9E9E"
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </View>
        <TouchableOpacity>
          <Text
            style={[
              style.textbody,
              style.logintext,
              style.margin,
              style.underline,
            ]}
          >
            Forgot password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToMainScreen}>
          <Text style={[style.buttontext]}>Log In</Text>
        </TouchableOpacity>

        <View style={[style.account, style.margin]}>
          <Text style={[style.textbody, style.alradytext]}>
            New to PINKSHOP?
          </Text>
          <TouchableOpacity onPress={goToCreateAccount}>
            <Text style={[style.textbody, style.logintext]}>
              Create an Account
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LogInScreen;
