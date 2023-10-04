import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { style } from "./globalstyle";

const Images = {
  image: {
    newaccountwatch: require("../../assets/images/newaccount.png"),
  },
};
const CreateAccount = ({ navigation }) => {
  const goToCreateSplashscreen = () => {
    navigation.goBack();
  };
  const goToLogInScreen = () => {
    navigation.navigate("LoginScreen");
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={style.container}>
      <View style={styles.headerdata}>
        <TouchableOpacity
          //     onLayout={(e)=>{const {width}=e.nativeEvent.layout;

          //   setWidth(width1)
          //   }
          // }
          style={style.backbutton}
          onPress={() => goToCreateSplashscreen()}
        >
          <Text style={style.backscreentext}>Back</Text>
        </TouchableOpacity>
        {/* <View style={{alignItems:'center',justifyContent:'center',backgroundColor: 'green', width:Dimensions.get('screen').width-width1, }}> */}
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
        {/* </View> */}
      </View>

      <View style={[styles.createBannerimage]}>
        <Image
          source={Images.image.newaccountwatch}
          style={style.createBannerimages}
        />

        <View style={styles.welcombackscrdata}>
          <View>
            <Text style={[style.logoW]}>W</Text>

            <Text style={style.headingtext}>Create new account</Text>
          </View>
        </View>
      </View>
      <View style={styles.loginform}>
        <ScrollView style={{ padding: 26 }}>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 20,
              }}
            >
              <TextInput
                style={[style.input, styles.flname]}
                underlineColorAndroid="#DFDFE7"
                placeholder="First Name"
                placeholderTextColor="#9E9E9E"
                autoCapitalize="none"
                //  onChangeText = {this.handleEmail}
              />
              <TextInput
                style={[style.input, styles.flname]}
                underlineColorAndroid="#DFDFE7"
                placeholder="Last Name"
                placeholderTextColor="#9E9E9E"
                autoCapitalize="none"
                //  onChangeText = {this.handleEmail}
              />
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <Text 
              style={{
                ...styles.fullnameprofile,
                color: isEnabled ? "#9E9E9E" : "#373737"
              }}
              // onValueChange={toggleSwitch}
              // value={!isEnabled}
              >
                Show full name on profile
              </Text>
              <Switch
                trackColor={{ false: "#DFDFE7", true: "#E99282" }}
                thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={!isEnabled}
                style={{ transform:[{ scaleX: 1.2 }, { scaleY: 1.2}] }}
              />
            </View>
            <TextInput
              style={style.input}
              underlineColorAndroid="#DFDFE7"
              placeholder="Username"
              placeholderTextColor="#9E9E9E"
              autoCapitalize="none"
              //  onChangeText = {this.handleEmail}
            />
            <TextInput
              style={style.input}
              underlineColorAndroid="#DFDFE7"
              placeholder="Email"
              placeholderTextColor="#9E9E9E"
              autoCapitalize="none"
              //  onChangeText = {this.handleEmail}
            />
            <TextInput
              style={style.input}
              placeholder="Password"
              underlineColorAndroid="#DFDFE7"
              placeholderTextColor="#9E9E9E"
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity style={style.margin}>
            <Text style={[style.buttontext]}>Create Account</Text>
          </TouchableOpacity>

          <View style={[style.account, style.margin]}>
            <Text style={[style.textbody, style.alradytext]}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={goToLogInScreen}>
              <Text style={[style.textbody, style.logintext]}>Log in</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 16 }}>
            <Text style={styles.siginingpolicy}>
              By signing up for a PINKSHOP Community account, you are agreeing
              to our{" "}
              <TouchableOpacity>
                <Text style={styles.linkText}>Terms of Service</Text>
              </TouchableOpacity>{" "}
              and{" "}
              <TouchableOpacity>
                <Text style={styles.linkText}>Privacy Policy</Text>
              </TouchableOpacity>{" "}
              and to receive email communications for PINKSHOP. Your
              subscription and preference can be changed at any time.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  headerdata: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  backbutton: {
    // position: "absolute",
    // padding: 18,
    marginTop: 16,
  },
  welcombackscrdata: {
    paddingHorizontal: 24,
    // marginTop: -130,
  },
  createBannerimage: {
    // height:"100%",
    width: "100%",
    resizeMode: "contain",
    // flex: 0.5,
  },
  loginform: {},
  siginingpolicy: {
    color: "#777",
    textAlign: "center",
    fontSize: 10,
    fontFamily: "Lora-Regular",
    // padding:16
  },
  linkText: {
    color: "#373737",
    textAlign: "center",
    fontSize: 10,
    fontFamily: "Lora-Bold",
  },
  flname: {
    width: "48%",
    paddingVertical: 16,
    paddingHorizontal: 5,
    marginVertical: 10,
    fontSize: 16,
    fontFamily: "Lora-Medium",
    fontStyle: "normal",
    color: "#000",
  },
  fullnameprofile: {
    color: "#9E9E9E",
    fontSize: 16,
    padding: 4,
    fontFamily: "Lora-Medium",
  },
});
