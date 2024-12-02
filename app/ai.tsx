import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList, TextInput, TouchableOpacity } from "react-native";
import Response from "@/components/response";
import Message from "@/components/message";

// Định nghĩa kiểu cho các state
type ListDataType = string[];

export default function App() {
  const [inputText, setInputText] = useState<string>(""); // Kiểu string cho inputText
  const [listData, setListData] = useState<ListDataType>([]); // Kiểu array của string cho listData

  const SearchInput = () => {
    setListData((prevList) => [...prevList, inputText]);
    setInputText(""); // Đặt lại inputText sau khi thêm
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Header */}
      <View style={styles.header}>
        <Image source={require("@/assets/icons/robot.png")} style={styles.icon} />
        <Text style={{ fontSize: 24, fontWeight: "800", color: "#323232" }}>Gemini AI</Text>
      </View>

      {/* Content */}
      <FlatList
        style={{ paddingHorizontal: 16, marginBottom: 80 }}
        data={listData}
        renderItem={({ item }) => (
          <View>
            <Message message={item} />
            <Response prompt={item} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Search-Bar */}
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Ask to Gemini AI"
          style={styles.input}
          value={inputText}
          onChangeText={(text) => setInputText(text)} // onChangeText sẽ trả về string
          selectionColor={"#323232"}
        />
        <TouchableOpacity onPress={SearchInput}>
          <Image source={require("@/assets/icons/right-arrow.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    paddingTop: 36,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    margin: 8,
    gap: 8,
  },
  icon: {
    width: 32,
    height: 32,
  },
  searchBar: {
    backgroundColor: "#ffffff",
    width: "100%",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    paddingVertical: 16,
    gap: 8,
  },
  input: {
    backgroundColor: "#fff",
    width: "100%",
    fontSize: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 32,
    borderWidth: 0.1,
  },
});
