import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { style } from "./globalstyle";
import email from "react-native-email";

const Images = {
  image: {
    Loginwatch: require("../../assets/images/Login-watch.png"),
  },
};

// const Images = {
//     image: {
//       CreateSplashscr: require("../../assets/images/createSplashimage.png"),
//     },
//   };

const LogInScreen = ({ navigation }) => {
  const goToCreateSplashscreen = () => {
    navigation.goBack();
  };
  const goToCrateAccount=()=>{
    navigation.navigate('CreateAccount');
  };

  const width1 = 250;
  // const [width1,setWidth] = useState(null)
  const styles = StyleSheet.create({
    headerdata: {
      padding: 16,
      flexDirection: "row",
      alignItems: "center",
      // gap: Dimensions.get("screen").width / 2+ -width1,
    },
    welcombackscrdata: {
      paddingHorizontal: 24,
      // position: "absolute",
      // top: 150,
    },
    createBannerimage: {
      // flex: 0.6,
    },
    loginform: {},
    screennametext: {},
    loginwatch:{
      width:'100%'
    }
  });
  // console.log(width1);

  return (
    <View style={style.container}>
      {/* Header data */}
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
          <Text style={style.screennametext} >Log In</Text>
        </View>
        {/* </View> */}
      </View>
      {/* header image section */}
      <View style={[styles.createBannerimage]}>
        {/* Use require to load the image */}
        <Image
          source={Images.image.Loginwatch}
          style={styles.loginwatch}
        />

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
        <TouchableOpacity>
        <Text style={[style.textbody, style.logintext,style.margin,style.underline]}>Frogot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.margin}>
          <Text style={[style.buttontext]}>Log In</Text>
        </TouchableOpacity>
      

      <View style={[style.account,style.margin]}>
        <Text style={[style.textbody, style.alradytext]}>New to PINKSHOP?</Text>
        <TouchableOpacity onPress={goToCrateAccount}>
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
