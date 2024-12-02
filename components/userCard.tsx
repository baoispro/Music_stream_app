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
    avatar: "data:image/jpeg;base64,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",
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
