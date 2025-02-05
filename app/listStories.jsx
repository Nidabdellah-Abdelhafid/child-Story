import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal, Alert, Image } from "react-native";
import * as SQLite from "expo-sqlite";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo, Feather } from "@expo/vector-icons";
import { Link, router } from "expo-router";

const ListStories = () => {
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const initial = async () => {
    try {
      const db = await SQLite.openDatabaseAsync("stories");
      getAllStories(db);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    initial();
  }, []);

  // ✅ Save story to SQLite
  const getAllStories = async (database) => {
    try {
      const allRows = await database.getAllAsync(
        "SELECT * FROM stories ORDER BY id DESC"
      );

      setStories(allRows);
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ Delete Story from Database
  const deleteStory = async (id) => {
    try {
      const db = await SQLite.openDatabaseAsync("stories");
      const result = await db.runAsync("DELETE FROM stories WHERE id = ?", id);
      setModalVisible(false);
      getAllStories(db);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View className="flex-1">
      <LinearGradient colors={["#170f48", "#1c1549"]} className="flex-1 p-5 ">
        <FlatList
          data={stories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="mb-5 p-4 rounded-2xl bg-[#291e75]">
              {/* Story Title */}
              <View className="justify-between flex-row w-full">
                <Text className="text-yellow-400 font-bold text-lg w-[310px]">
                  {item.title}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedStory(item); // Store selected story
                    setModalVisible(true); // Show modal
                  }}
                >
                  <Entypo
                    name="dots-three-vertical"
                    size={20}
                    color="yellow"
                    className="mt-1"
                  />
                </TouchableOpacity>
              </View>

              {/* Story Metadata (Date & Word Count) */}
              <Text className="text-purple-300 text-2sm mt-1">
                {new Date(item.created_at).toDateString()} ·{" "}
                {item.content.split(" ").length} words
              </Text>

              {/* Story Preview */}
              <Text className="text-white mt-2 line-clamp-2">
                {item.content.length > 150
                  ? item.content.substring(0, 150) + "..."
                  : item.content}
              </Text>

              {/* Read Again Button */}
              <TouchableOpacity
                className="mt-3 justify-center items-end"
                onPress={() => {
                  router.push({
                    pathname: "/detailStory/[id]",
                    params: { id: item.id, data: JSON.stringify(item) }, // Pass the item data
                  });
                }}
              >
                <View className="flex-1 flex-row justify-center items-center">
                  <Text className="text-yellow-300 font-bold text-sm flex-row">
                    Read again
                  </Text>
                  <Feather
                    name="arrow-right"
                    size={16}
                    color="#fde047"
                    className="ml-1"
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}

          ListEmptyComponent={()=>(
            <View className="justify-center items-center px-4 mt-44 ">
              <Image  source={require('../assets/images/search.png')} className="w-36 h-36 " resizeMode="contain" />
              <Link href="/newStory" className="font-medium text-sm text-gray-100 mt-10">Create the first story for your kids</Link>
              <Text className="font-bold text-2xl text-white text-center mt-2">No Stories Found</Text>
            </View>
          )
          }
        />

        <Modal
          visible={isModalVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View className="flex-1 justify-center items-center bg-black/60">
            <View className=" p-5 rounded-lg w-72">
              {/* Popup Title */}
              <Text className="text-white font-bold text-lg text-center">
                Select Action
              </Text>

              {/* Delete Button */}
              <TouchableOpacity
                className="mt-4 bg-red-600 p-3 rounded-md"
                onPress={() => {
                  Alert.alert(
                    "Delete Story",
                    "Are you sure you want to delete this story?",
                    [
                      { text: "Cancel", style: "cancel" },
                      {
                        text: "Delete",
                        onPress: () => deleteStory(selectedStory.id),
                        style: "destructive",
                      },
                    ]
                  );
                }}
              >
                <Text className="text-white text-center font-bold">
                  Delete Story
                </Text>
              </TouchableOpacity>

              {/* Close Button */}
              <TouchableOpacity
                className="mt-3 bg-gray-500 p-3 rounded-md"
                onPress={() => setModalVisible(false)}
              >
                <Text className="text-white text-center font-bold">Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </LinearGradient>
    </View>
  );
};

export default ListStories;
