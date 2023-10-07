import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { style } from "../screens/globalstyle";
// import {
//   HeaderSearchBar,
//   HeaderClassicSearchBar 
// } from "react-native-header-search-bar";

// export { HeaderSearchBar, HeaderClassicSearchBar };
// export default { HeaderSearchBar, HeaderClassicSearchBar };

const Images = {
  image: {
    downarr: require("../../assets/images/downarrow.png"),
    profileimage: require("../../assets/images/profileimage.png"),
  },
};

const HomeScreen = () => {
  return (
    <View style={styles.containers}>
      <View style={[styles.addresspart]}>

        <View style={styles.head}>
          <View>
            <Text style={[style.whitetext]}>Location</Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Text style={[style.whitetext]}>Bilzen,Tanjungbalai</Text>
              <Image source={Images.image.downarr} />
            </View>
          </View>
          <View>
            <Image source={Images.image.profileimage} style={{width:50,height:50}}/>
          </View>
        </View>
        <View>
          <View>
            
          </View>
          {/* <HeaderSearchBar onChangeText={text => console.log(text)} />
          <HeaderClassicSearchBar onChangeText={text => console.log(text)} /> */}
        </View>
      </View>
      <View></View>
      <View>
        <ScrollView></ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  containers: {
    flex: 1,
  },
  addresspart: {
    flex: 0.4,
    backgroundColor: "#313131",
    alignItems: "center",
    paddingVertical: 20,
  },
  head: {
    width: "85%",
    top: 40,
    paddingVertical: 20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
    // margin:20
  },
  seaarchfilter: {
    width: "85%",
  }
});
