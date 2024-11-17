import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Biểu tượng Ionicons

interface User {
  id: string;
  name: string;
  followers: string;
  avatar: string;
}

const users: User[] = [
  {
    id: "1",
    name: "Mer Watson",
    followers: "1.234K",
    avatar: "https://via.placeholder.com/100",
  },
  //   {
  //     id: "2",
  //     name: "Jane Doe",
  //     followers: "800",
  //     avatar: "https://via.placeholder.com/100",
  //   },
];

export default function UserCardList() {
  return (
    // <FlatList
    //   data={users}
    //   keyExtractor={(item) => item.id}
    //   renderItem={({ item }) => (
    <View style={styles.userCard}>
      {/* Avatar */}
      <Image source={{ uri: users[0].avatar }} style={styles.avatar} />

      {/* Thông tin người dùng */}
      <View style={styles.userDetails}>
        <Text style={styles.userName}>{users[0].name}</Text>
        <View style={styles.userFollowers}>
          <Icon name="people-outline" size={14} color="#888" />
          <Text style={styles.followersText}>
            {users[0].followers} Followers
          </Text>
        </View>
      </View>

      {/* Nút Follow */}
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followText}>Follow</Text>
      </TouchableOpacity>
    </View>
    //   )}
    // />
  );
}

const styles = StyleSheet.create({
  userCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  userFollowers: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  followersText: {
    marginLeft: 4,
    fontSize: 14,
    color: "#888",
  },
  followButton: {
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  followText: {
    fontSize: 14,
    color: "#888",
  },
});
