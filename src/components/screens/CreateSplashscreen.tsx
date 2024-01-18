import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { style } from "./globalstyle";
// import { LinearGradient } from "react-native-linear-gradient";

const Images = {
  image: {
    CreateSplashscr: require("../../assets/images/createSplashimage.png"),
  },
};

const CreateSplashscreen = ({ navigation }) => {
  const goToCrateAccount = () => {
    navigation.navigate("CreateAccount");
  };
  const goToLogInScreen = () => {
    navigation.navigate("LoginScreen");
  };
  const gotoHomeScreen = () => {
    navigation.navigate("MainScreen");
  };

  return (
    <View style={styles.container}>
      {/* logo */}
      <View style={styles.logo}>
        <Text style={[styles.logoW]}>W</Text>
        <View style={styles.logos}>
          <Text style={[styles.logoText, styles.colorlogotext]}>PINK</Text>
          <Text style={[styles.logoText]}>SHOP</Text>
        </View>
        <View style={{ position: "absolute", right: 8, bottom: 18 }}>
          <TouchableOpacity onPress={gotoHomeScreen}>
            <Text
              style={{
                paddingHorizontal: 14,
                backgroundColor: "#E99282",
                borderRadius: 100,
                paddingVertical: 6,
                color: "#fff",
                fontFamily: "Lora-Medium",
              }}
            >
              SKIP {"->"}{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} 
      style={[styles.createSplashimage,styles.linearGradient]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      > */}
      {/* Images */}
      <View style={[styles.createSplashimage]}>
        {/* Use require to load the image */}
        <Image
          source={Images.image.CreateSplashscr}
          style={styles.createSplashimages}
        />
      </View>
      {/* </LinearGradient> */}
      {/* Heading with pera */}
      <View style={styles.createaccountdata}>
        <View style={styles.createSplashdata}>
          <Text style={styles.headingtext}>
            Get your best{"\n"}fancy watch for you
          </Text>
          <Text style={styles.textbody}>
            Create an account to comment on articles,{"\n"} manage your
            collection and more.
          </Text>

          {/* Account button */}
          {/* <Pressable
          style={{ borderRadius: 4, backgroundColor: "#FF0063", padding: 8 }}
        >
          <Text style={styles.buttontext}>Press me</Text>
        </Pressable> */}
          <TouchableOpacity style={style.margin} onPress={goToCrateAccount}>
            <Text style={[style.buttontext]}>Create Account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.account}>
          <Text style={[styles.textbody, styles.alradytext]}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={goToLogInScreen}>
            <Text style={[styles.textbody, styles.logintext]}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreateSplashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  logo: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 20,
    marginTop: 20,
  },
  logoW: {
    textAlign: "center",
    fontFamily: "Lora-Bold",
    fontSize: 14,
    textTransform: "uppercase",
    alignItems: "center",
    verticalAlign: "middle",
    backgroundColor: "#E99282",
    paddingHorizontal: 6,
    color: "#fff",
    borderRadius: 8,
  },
  colorlogotext: {
    color: "#E99282",
  },
  logos: {
    flexDirection: "row",
    justifyContent: "center",
  },
  logoText: {
    textAlign: "center",
    fontFamily: "Lora-Regular",
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  createaccountdata: {},
  createSplashimage: {
    borderBottomColor: "#fff",
    // borderWidth:4,
    borderBottomWidth: 4,
    shadowOpacity: 4,
    flex: 0.88,
  },
  createSplashimages: {
    height: "100%",
    width: "100%",
  },
  // linearGradient: {
  //   flex: 1,
  //   paddingLeft: 15,
  //   paddingRight: 15,
  //   borderRadius: 5
  // },
  createSplashdata: {
    shadowColor: "#fff",
    shadowOpacity: 0.48,
    shadowRadius: 1.95,
    elevation: 2,
    borderColor: "red",
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginHorizontal: 20,
  },
  headingtext: {
    textAlign: "center",
    fontSize: 32,
    fontFamily: "Lora-Medium",
    fontStyle: "normal",
  },
  textbody: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Lora-Regular",
    fontStyle: "normal",
    color: "#9E9E9E",
    paddingTop: 8,
  },
  buttondata: {},
  account: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  logintext: {
    fontFamily: "Lora-Bold",
    color: "#E99282",
  },
  alradytext: {
    fontFamily: "Lora-Regular",
    color: "#222",
  },
});
