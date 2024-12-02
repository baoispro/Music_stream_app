import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal";

const Feed = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const posts = [
    {
      id: "1",
      title: "FLOWER",
      artist: "Jessica Gonzalez",
      plays: "125",
      duration: "5:15",
      image: require("@/assets/images/flower-image.png"),
      like: 20,
      reload: 1,
      comments: [
        {
          id: "1",
          user: "Sally Rooney",
          comment: "Duis cull 💕",
          avatar: require("@/assets/images/avatar-comment-1.png"),
          time: "17h",
          like: 1,
        },
        {
          id: "2",
          user: "Jason",
          comment: "Nim magna ex. 😎",
          avatar: require("@/assets/images/avatar-comment-2.png"),
          time: "17h",
          like: 1,
        },
        {
          id: "3",
          user: "Michael Key",
          comment: "Illusion Smith Deserunt.",
          avatar: require("@/assets/images/avatar-comment-3.png"),
          time: "1h",
          like: 11,
        },
        {
          id: "4",
          user: "Liam Pham",
          comment: "Commodo 🔥",
          avatar: require("@/assets/images/avatar-comment-1.png"),
          time: "48m",
          like: 3,
        },
        {
          id: "5",
          user: "Kiran Glaucus",
          comment: "Esse consequat cillum.",
          avatar: require("@/assets/images/avatar-comment-2.png"),
          time: "22h",
          like: 10,
        },
      ],
    },
    {
      id: "2",
      title: "Me",
      artist: "William King",
      plays: "245",
      duration: "5:15",
      image: require("@/assets/images/eye-image.png"),
      comments: [],
      like: 45,
      reload: 12,
    },
  ];

  const [selectedPost, setSelectedPost] = useState<any>(null);

  const openComments = (post: any) => {
    setSelectedPost(post);
    setModalVisible(true);
  };

  const closeComments = () => {
    setModalVisible(false);
    setSelectedPost(null);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        showsHorizontalScrollIndicator={false} // Hides horizontal scroll indicator
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <View style={styles.header}>
              <Image
                source={{ uri: "https://via.placeholder.com/50" }}
                style={styles.avatar}
              />
              <View>
                <View style={styles.username}>
                  <Text style={styles.username}>{item.artist}</Text>
                  <Icon
                    name="checkmark-circle-outline"
                    size={12}
                    color={"#379AE6"}
                  />
                </View>
                <Text style={styles.time}>Posted a track • 3d</Text>
              </View>
            </View>
            <View style={styles.posterContainer}>
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.postImage} />
                <View style={styles.postDetails}>
                  <Text style={styles.title}>{item.title}</Text>
                  <View style={styles.containerSubtitle}>
                    <Text style={styles.subtitle}>{item.artist}</Text>
                    <Text style={styles.subtitle}>
                      <Icon name="play-outline" size={12} color="#fff" />
                      {item.plays} plays • {item.duration}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.actions}>
              <View style={styles.actionsLeft}>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    gap: 4,
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Icon name="heart-outline" size={16} color={"#9095A0"} />
                  <Text style={[styles.subtitle, { color: "#9095A0" }]}>
                    {item.like}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => openComments(item)}
                  style={{
                    flexDirection: "row",
                    gap: 4,
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Icon
                    name="chatbox-ellipses-outline"
                    size={16}
                    color={"#9095A0"}
                  />
                  <Text style={[styles.subtitle, { color: "#9095A0" }]}>
                    {item.comments.length}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    gap: 4,
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Icon name="sync-outline" size={16} color={"#9095A0"} />
                  <Text style={[styles.subtitle, { color: "#9095A0" }]}>
                    {item.reload}
                  </Text>
                </TouchableOpacity>
              </View>
              <Icon name="ellipsis-horizontal" size={20} color={"#9095A0"} />
            </View>
          </View>
        )}
      />

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={closeComments}
        style={styles.modal}
      >
        {selectedPost && (
          <View style={styles.commentContainer}>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text style={styles.commentHeader}>
                {selectedPost.comments.length} comments
              </Text>
              <Icon
                name="chevron-down-outline"
                size={24}
                color="#9095A0"
                onPress={closeComments}
              />
            </View>
            <FlatList
              data={selectedPost.comments}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.comment}>
                  <Image source={item.avatar} style={styles.avatar} />
                  <View style={{ flex: 1, flexDirection: "column", gap: 5 }}>
                    <View style={{ flex: 1, flexDirection: "row", gap: 5 }}>
                      <Text style={styles.commentUser}>{item.user}</Text>
                      <Text>{item.comment}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", gap: 5 }}>
                      <Text style={styles.sectionTimeComment}>{item.time}</Text>
                      <Text style={styles.sectionTimeComment}>
                        {item.like} like
                      </Text>
                      <Text style={styles.sectionTimeComment}>Reply</Text>
                    </View>
                  </View>
                  <Icon name="thumbs-up-outline" size={16} color="#9095A0" />
                </View>
              )}
            />
            <View style={styles.commentInputContainer}>
              <Image
                source={{ uri: "https://via.placeholder.com/50" }}
                style={styles.avatar}
              />
              <TextInput
                placeholder="Write a comment..."
                style={styles.commentInput}
              />
              <TouchableOpacity>
                <Icon name="send" size={24} color="#6e1ed6" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },
  postContainer: {
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  username: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#171A1F",
    lineHeight: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  time: {
    color: "#171A1F",
    fontSize: 11,
    lineHeight: 18,
  },
  posterContainer: {
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 3,
  },
  imageContainer: {
    position: "relative",
  },
  postImage: {
    width: "100%",
    height: 342,
  },
  postDetails: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "30%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
  },
  containerSubtitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subtitle: {
    color: "#ddd",
    fontSize: 14,
    lineHeight: 22,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionsLeft: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 25,
  },
  modal: {
    margin: 0,
    justifyContent: "flex-end",
  },
  commentContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    maxHeight: "80%",
  },
  commentHeader: {
    fontWeight: "400",
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 26,
    color: "#171A1F",
  },
  comment: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  commentUser: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  commentInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 8,
  },
  commentInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  sectionTimeComment: {
    fontSize: 10,
    lineHeight: 14,
    color: "#9095A0",
  },
});

export default Feed;
