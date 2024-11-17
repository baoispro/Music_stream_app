import UserCardList from "@/components/userCard";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Sử dụng icon từ thư viện

interface Song {
  id: string;
  title: string;
  artist: string;
  plays: string;
  duration: string;
  image: string;
  category: "all" | "tracks" | "albums" | "artists";
}

const songs: Song[] = [
  {
    id: "1",
    title: "Me",
    artist: "Jessica Gonzalez",
    plays: "2.1M",
    duration: "3:36",
    image: "https://via.placeholder.com/100",
    category: "tracks",
  },
  {
    id: "2",
    title: "Me Inc",
    artist: "Anthony Taylor",
    plays: "68M",
    duration: "3:35",
    image: "https://via.placeholder.com/100",
    category: "albums",
  },
  {
    id: "3",
    title: "Dozz me",
    artist: "Brian Bailey",
    plays: "93M",
    duration: "4:39",
    image: "https://via.placeholder.com/100",
    category: "tracks",
  },
  {
    id: "4",
    title: "Eastss me",
    artist: "Anthony Taylor",
    plays: "9M",
    duration: "7:48",
    image: "https://via.placeholder.com/100",
    category: "artists",
  },
  {
    id: "5",
    title: "Me Ali",
    artist: "Pedro Moreno",
    plays: "23M",
    duration: "3:36",
    image: "https://via.placeholder.com/100",
    category: "tracks",
  },
  {
    id: "6",
    title: "Me quis a",
    artist: "Elena Jimenez",
    plays: "10M",
    duration: "6:22",
    image: "https://via.placeholder.com/100",
    category: "albums",
  },
  {
    id: "7",
    title: "Me light",
    artist: "John Smith",
    plays: "81M",
    duration: "5:15",
    image: "https://via.placeholder.com/100",
    category: "artists",
  },
];

export default function Tab() {
  const [activeTab, setActiveTab] = useState<
    "all" | "tracks" | "albums" | "artists"
  >("all");

  const [textSearch, setTextSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false); // Track focus state

  // Lọc bài hát dựa vào tab hiện tại
  const filteredSongs =
    activeTab === "all"
      ? songs
      : songs.filter((song) => song.category === activeTab);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          placeholderTextColor="#888"
          value={textSearch}
          onChangeText={setTextSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <Text style={styles.searchClear} onPress={() => setTextSearch("")}>
          ✕
        </Text>
      </View>

      {isFocused && textSearch.length > 0 && (
        <FlatList
          data={filteredSongs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setIsFocused(false);
                setTextSearch(item.title);
              }}
              style={styles.songItem}
            >
              <Text style={styles.songTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
          style={styles.suggestionList}
        />
      )}

      {!isFocused && (
        <>
          <View style={styles.tabsContainer}>
            {["all", "tracks", "albums", "artists"].map((tab) => (
              <TouchableOpacity
                key={tab}
                onPress={() =>
                  setActiveTab(tab as "all" | "tracks" | "albums" | "artists")
                }
                style={[styles.tab, activeTab === tab && styles.activeTab]}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === tab && styles.activeTabText,
                  ]}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <UserCardList />
          <FlatList
            data={filteredSongs}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.songContainer}>
                <Image source={{ uri: item.image }} style={styles.songImage} />
                <View style={styles.songDetails}>
                  <Text style={styles.songTitle}>{item.title}</Text>
                  <Text style={styles.songInfo}>{item.artist}</Text>
                  <View style={styles.songInfoViewAndTime}>
                    <Icon name="play-outline" size={16} color="#888" />
                    <Text style={styles.songInfo}>
                      {item.plays} • {item.duration}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Text style={styles.moreIcon}>⋮</Text>
                </TouchableOpacity>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  searchClear: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    color: "#fff",
    backgroundColor: "#000",
    borderRadius: 50,
  },
  tabsContainer: {
    flexDirection: "row",
    marginBottom: 16,
    marginTop: 18,
  },
  tab: {
    width: "20%",
    paddingVertical: 8,
  },
  activeTab: {
    borderBottomWidth: 4,
    borderBottomColor: "#6e1ed6",
  },
  tabText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
  },
  activeTabText: {
    color: "#6e1ed6",
    fontWeight: "bold",
  },
  songContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  songImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  songDetails: {
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  songInfo: {
    fontSize: 14,
    color: "#888",
  },
  moreIcon: {
    fontSize: 24,
    color: "#888",
  },
  songInfoViewAndTime: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  suggestionList: {
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  songItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
