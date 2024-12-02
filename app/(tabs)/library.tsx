import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const tabs = ["Playlists", "New tag", "Songs", "Albums", "Artists"];

const data = [
  {
    id: "1",
    name: "Mer Watson",
    followers: "1.234K Followers",
    isFollow: true,
    image: require("@/assets/images/Image 78.png"),
  },
  {
    id: "2",
    name: "FLOWER",
    artist: "Jessica Gonzalez",
    plays: "2.1M",
    duration: "3:36",
    isFavorite: true,
    image: require("@/assets/images/Image 78.png"),
  },
  {
    id: "3",
    name: "Shape of You",
    artist: "Anthony Taylor",
    plays: "68M",
    duration: "3:35",
    isFavorite: false,
    image: require("@/assets/images/Image 78.png"),
  },
  {
    id: "4",
    name: "Blinding Lights",
    artist: "Ashley Scott",
    songs: 4,
    isFavorite: false,
    image: require("@/assets/images/Image 74.png"),
    isList: true,
  },
  {
    id: "5",
    name: "Levitating",
    artist: "Anthony Taylor",
    plays: "9M",
    duration: "7:48",
    isFavorite: true,
    image: require("@/assets/images/Image 76.png"),
  },
  {
    id: "6",
    name: "Astronaut in the Ocean",
    artist: "Pedro Moreno",
    plays: "23M",
    duration: "3:36",
    isFavorite: false,
    image: require("@/assets/images/Image 77.png"),
  },
  {
    id: "7",
    name: "Dynamite",
    artist: "Elena Jimenez",
    plays: "10M",
    duration: "6:22",
    isFavorite: true,
    image: require("@/assets/images/Image 75.png"),
  },
  {
    id: "8",
    name: "Levitating",
    artist: "Anthony Taylor",
    plays: "9M",
    duration: "7:48",
    isFavorite: true,
    image: require("@/assets/images/Image 77.png"),
  },
  {
    id: "9",
    name: "Astronaut in the Ocean",
    artist: "Pedro Moreno",
    plays: "23M",
    duration: "3:36",
    isFavorite: false,
    image: require("@/assets/images/Image 78.png"),
  },
  {
    id: "10",
    name: "Dynamite",
    artist: "Elena Jimenez",
    plays: "10M",
    duration: "6:22",
    isFavorite: true,
    image: require("@/assets/images/Image 76.png"),
  },
  {
    id: "11",
    name: "Dynamite",
    artist: "Elena Jimenez",
    plays: "10M",
    duration: "6:22",
    isFavorite: true,
    image: require("@/assets/images/Image 77.png"),
  },
];

const LibraryScreen = () => {
  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        {item.artist ? (
          <>
            <Text style={styles.subTitle}>{item.artist}</Text>
            {item.plays && item.duration && (
              <View style={styles.songInfoViewAndTime}>
                <Icon name="play-outline" size={16} color="#888" />
                <Text style={styles.songInfo}>
                  {item.plays} • {item.duration}
                </Text>
              </View>
            )}
          </>
        ) : (
          <Text style={styles.subTitle}>{item.followers}</Text>
        )}
      </View>
      {item.isFollow ? (
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>
      ) : (
        <Icon
          name={
            item.isFavorite
              ? "heart"
              : item.isList
              ? "chevron-forward"
              : "ellipsis-horizontal"
          }
          size={24}
          color="purple"
        />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Library</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabContainer}
      >
        {tabs.map((tab, index) => (
          <TouchableOpacity key={index} style={styles.tab}>
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    justifyContent: "flex-start",
  },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  songInfo: {
    fontSize: 14,
    color: "#888",
  },
  tab: {
    backgroundColor: "#F2F2F2",
    borderRadius: 16,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    height: 32,
  },
  songInfoViewAndTime: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  tabText: { fontSize: 14, color: "#333" },
  list: { justifyContent: "flex-start" },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  image: { width: 50, height: 50, borderRadius: 8, marginRight: 16 },
  textContainer: { flex: 1 },
  title: { fontSize: 16, fontWeight: "600" },
  subTitle: { fontSize: 12, color: "gray" },
  followButton: { backgroundColor: "black", padding: 8, borderRadius: 16 },
  followText: { color: "white", fontWeight: "bold", paddingHorizontal: 8 },
});

export default LibraryScreen;
