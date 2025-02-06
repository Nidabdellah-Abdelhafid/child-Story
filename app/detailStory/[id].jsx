import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import * as Speech from "expo-speech"; // ✅ Use expo-speech
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const DetailStory = () => {
  const { id, data } = useLocalSearchParams();
  const story = JSON.parse(data);

  const [speaking, setSpeaking] = useState(false);
  const [spokenText, setSpokenText] = useState(""); // ✅ Tracks spoken words dynamically

  const words = story.content.split(" ");

  const speakStory = async () => {
    if (!story.content.trim()) return;

    setSpeaking(true);
    setSpokenText(""); // Reset spoken text at start

    Speech.speak(story?.content, {
      language: story.language === "English" ? "en-US" : "fr-FR",
      pitch: 0.9,
      rate: 1,
      onStart: () => setSpokenText(""),
      onBoundary: (event) => {
        if (event.charIndex) {
          setSpokenText(story.content.substring(0, event.charIndex)); // ✅ Update spoken part
        }
      },
      onDone: () => {
        setSpeaking(false);
        setSpokenText(story.content); // ✅ Ensure entire text is marked after completion
      },
      onStopped: () => {
        setSpeaking(false);
        setSpokenText(""); // Reset spoken text on stop
      },
    });
  };

  const stopSpeaking = () => {
    Speech.stop();
    setSpeaking(false);
    setSpokenText(""); // Reset spoken text
  };

  return (
    <LinearGradient colors={["#170f48", "#1c1549"]} className="flex-1 items-center justify-center">
      {story && (
        <View className="mt-5 mb-5">
          {!speaking ? (
            <TouchableOpacity
              className="bg-yellow-500 px-5 py-2 rounded-full mt-8 flex-row items-center"
              onPress={speakStory}
            >
              <MaterialIcons name="play-circle-outline" size={36} color="white" />
              <Text className="text-white text-3xl font-bold ml-2">Listen</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              className="bg-red-500 px-5 py-2 rounded-full mt-8 flex-row items-center"
              onPress={stopSpeaking}
            >
              <AntDesign name="pausecircleo" size={36} color="white" />
              <Text className="text-white text-3xl font-bold ml-2">Stop</Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100, alignItems: "center", justifyContent: "center", paddingTop: 20 }}
        scrollEventThrottle={100}
      >
        <View className="flex-1 items-center justify-center p-5 m-5">
          <Text className="text-white mb-8 text-3xl">"{story.title}"</Text>
          <Text className="text-lg">
            <Text className="text-yellow-500 font-bold">{spokenText}</Text>
            <Text className="text-white">{story.content.substring(spokenText.length)}</Text>
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default DetailStory;
