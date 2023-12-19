import {
  FlatList,
  Image,
  StyleSheet,
  View,
  Text,
  ToastAndroid,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import { AntDesign, FontAwesome, Ionicons, Fontisto } from "@expo/vector-icons";
import React, { useState } from "react";

const Images = {
  image: {
    downarr: require("../../../assets/images/downarrow.png"),
    profileimage: require("../../../assets/images/profileimage.png"),
  },
};

interface ICard {
  onLike?: Function;
  onComment?: Function;
  onShare?: Function;
  onSave?: Function;
  index?: number;
  item?: any;
  img?: string;
  id: number;
  username: string;
  avatar: string;
  image: string;
  likes: number;
  comments: number;
  caption: string;
  timestamp: string;
}

const Maincard = ({
  index,
  username,
  id,
  avatar,
  image,
  likes,
  comments,
  caption,
  timestamp,
  item,
  img,
  onSave,
  onShare,
  onComment,
  onLike,
}: ICard) => {
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);
  const handleLike = () => {
    setLike(!like);
    if (onLike) {
      onLike();
    }
    ToastAndroid.show(like ? "Unliked!" : "Liked!", ToastAndroid.SHORT);
  };
  const handleComments = () => {
    if (onComment) {
      onComment();
    }
    ToastAndroid.show("Commented", ToastAndroid.SHORT);
  };
  const handleSave = () => {
    setSave(!save);
    if (onSave) {
      onSave();
    }
    ToastAndroid.show(save ? "Unsaved!" : "Saved!", ToastAndroid.SHORT);
  };
  const handleShare = () => {
    if (onShare) {
      onShare();
    }
    ToastAndroid.show("Shared!", ToastAndroid.SHORT);
  };
  const date = new Date(timestamp).toUTCString();
  return (
    <View key={index} style={styles.container}>
      <View style={styles.head}>
        <View>
          <Text>{username}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>{date}</Text>
          </View>
        </View>
        <View>
          <Image
            source={{ uri: avatar }}
            resizeMode="contain"
            style={{ width: 40, height: 40, borderRadius: 12 }}
          />
        </View>
      </View>
      <Image
        alt="Image Not Loded!"
        resizeMode="cover"
        style={styles.image_style}
        source={{ uri: image }}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <AntDesign
            name={like ? "heart" : "hearto"}
            color={like ? "red" : "#000"}
            size={useWindowDimensions().width * 0.05}
            onPress={handleLike}
          />
          <FontAwesome
            name="comment-o"
            size={useWindowDimensions().width * 0.05}
            onPress={handleComments}
          />
          <Ionicons
            name="share-social-outline"
            size={useWindowDimensions().width * 0.05}
            onPress={handleShare}
          />
        </View>
        <Fontisto
          name={save ? "file-1" : "file-2"}
          size={useWindowDimensions().width * 0.05}
          onPress={handleSave}
        />
      </View>
    </View>
  );
};

export default Maincard;

const styles = StyleSheet.create({
  head: {
    paddingVertical: 0,
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
  },
  container: {
    marginHorizontal: 12,
    gap: 10,
    marginVertical: 4,
    padding: 12,
    justifyContent: "space-between",
    shadowColor: "#000",
    backgroundColor: "white",
    borderRadius: 12,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image_style: {
    width: "100%",
    height: 400,
    maxHeight: 400,
    borderRadius: 12,
  },
});
