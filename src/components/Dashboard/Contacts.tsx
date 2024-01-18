import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import React from "react";
import { style } from "../screens/globalstyle";
import MainScreen from "./MainScreen";
import Maincard from "../../Pages/Homepage/Cards/Maincard";
import fakeInstagramFeeds from "../../Dummydata/instafeed";
import { TouchableOpacity } from "react-native-gesture-handler";
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

const renderItem = ({ index, item }) => {
  return (
    <View
      key={index}
      style={{
        borderColor: "green",
        borderWidth: 2,
        width: Dimensions.get("window").width * 0.21,
        height: Dimensions.get("window").height * 0.1,
        padding: 3,
        borderRadius: Dimensions.get("window").width * 0.21,
      }}
    >
      <Image
        style={{ width: "auto", height: "100%", borderRadius: 100 }}
        source={{ uri: item.img }}
      />
    </View>
  );
};
const Contacts = () => {
  const data = require("../../Dummydata/Storydata.json");
  const data1 = require("../../Dummydata/Cardspost.json");
  return (
    <View style={styles.containers}>
      <View style={[styles.addresspart]}>
        <FlatList
          contentContainerStyle={{ marginTop: 20, gap: 12 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
        />

        {/* Applying card  */}
      </View>

      <FlatList
        nestedScrollEnabled
        contentContainerStyle={{ flexGrow: 1, rowGap: 20 }}
        data={fakeInstagramFeeds}
        ListFooterComponent={
          <TouchableOpacity
            style={{
              height: 40,
              // backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
            }}
          >
            <Text>No more content...</Text>
          </TouchableOpacity>
        }
        renderItem={({ item, index }) => {
          return <Maincard key={index} {...item} />;
        }}
      />
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  containers: {
    marginTop: "8%",
    gap: 10,
    flex: 1,
  },
  addresspart: {
    paddingHorizontal: 2,
  },
  head: {
    width: "90%",
    paddingVertical: 0,
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
  },
});
