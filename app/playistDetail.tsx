import React from 'react';
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';

// Define the type for the song data
interface Song {
  id: string;
  title: string;
  artist: string;
  plays: string;
  duration: string;
  image: string;
}

interface Chart {
  title: string;
  songs: Song[];
}

const Index: React.FC = () => {
  const router = useRouter();
  const chart: Chart = {
    title: 'Top 50 - Canada',
    songs: [
      {
        id: "1",
        title: "FLOWER",
        artist: "Jessica Gonzalez",
        plays: "2.1M",
        duration: "3:36",
        image: "data:image/jpeg;base64,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",
      },
      {
        id: "2",
        title: "Shape of You",
        artist: "Anthony Taylor",
        plays: "68M",
        duration: "3:35",
        image: "https://linkstorage.linkfire.com/medialinks/images/2fdecdb2-6d41-4643-96cc-788849c33527/artwork-440x220.jpg",
      },
      {
        id: "3",
        title: "Blinding Lights",
        artist: "Brian Bailey",
        plays: "93M",
        duration: "4:39",
        image: "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",
      },
      {
        id: "4",
        title: "Levitating",
        artist: "Anthony Taylor",
        plays: "9M",
        duration: "7:48",
        image: "https://upload.wikimedia.org/wikipedia/vi/3/3d/Dua_Lipa_Levitating_%28DaBaby_Remix%29.png",
      },
      {
        id: "5",
        title: "Astronaut in the Ocean",
        artist: "Pedro Moreno",
        plays: "23M",
        duration: "3:36",
        image: "https://i1.sndcdn.com/artworks-y8bCRIvlfx9HOXqd-rJsnzQ-t500x500.jpg",
      },
      {
        id: "6",
        title: "Dynamite",
        artist: "Elena Jimenez",
        plays: "10M",
        duration: "6:22",
        image: "https://upload.wikimedia.org/wikipedia/vi/thumb/5/5f/BTS_-_Dynamite_%28official_cover%29.png/330px-BTS_-_Dynamite_%28official_cover%29.png",
      },
    ]
  };

  // Render function for each song item in the FlatList
  const renderSong = ({ item }: { item: Song }) => (
    <View style={styles.songContainer}>
      <Image source={{ uri: item.image }} style={styles.songImage} />
      <View style={styles.songDetails}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songArtist}>{item.artist}</Text>
        <Text style={styles.songPlays}>{item.plays}  {item.duration}</Text>
      </View>
      <TouchableOpacity onPress={() => {router.push('/songAudio')}}>
        <Text style={styles.playButton}>Play</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{chart.title}</Text>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <EvilIcons name="heart" size={30} color="black" />
          <Entypo name="dot-single" size={24} color="black" />
          <Text>05:10:18</Text>
        </View>
        <Text style={styles.subTitle}>Daily chart-toppers update</Text>
      </View>
      <FlatList
        data={chart.songs}
        renderItem={renderSong}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 16,
    backgroundColor: "#f7f7f7",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 14,
    color: "#666",
  },
  songContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  songDetails: {
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  songArtist: {
    fontSize: 14,
    color: "#666",
  },
  songPlays: {
    fontSize: 12,
    color: "#aaa",
  },
  playButton: {
    fontSize: 14,
    color: "#007bff",
    fontWeight: "bold",
  },
});

export default Index;
