import React, { useState } from "react";
import {
  Button,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from "expo-linear-gradient";
import * as Speech from "expo-speech";
import { AntDesign, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

const DetailStory = () => {
  const { id, data } = useLocalSearchParams(); 
  const story = JSON.parse(data);
  const [speaking, setSpeaking] = useState(false);

  const speakStory = () => {
      if (!story.content.trim()) return;
      setSpeaking(true);
      Speech.speak(story.title + ". " + story.content, {
        language: story.language === "English" ? "en-US" : "fr-FR",
        pitch: 1.1,
        rate: 0.9,
        onDone: () => setSpeaking(false),
        onStopped: () => setSpeaking(false),
      });
    };
    
  
    // Function to stop speech
    const stopSpeaking = () => {
      Speech.stop();
      setSpeaking(false);
    };

  return (
      <LinearGradient colors={['#170f48', '#1c1549']} className="flex-1 items-center justify-center">
        {story && (
                <View className="mt-5 mb-5">
                  {!speaking ? (
                    // <Button title="🎙️ Read Story Aloud" onPress={speakStory} /> 
                    <TouchableOpacity 
                      className="bg-yellow-500 px-6 py-4 rounded-full mt-8 flex-row items-center"
                      onPress={speakStory}
                    >
                      <MaterialIcons name="play-circle-outline" size={36} color="yellow" />
                      <Text className="text-white text-3xl font-bold ml-2">Listen</Text>
                      
                    </TouchableOpacity>
                  ) : (
                    // <Button title="⏹️ Stop Speaking" onPress={stopSpeaking} color="red" />
                    <TouchableOpacity 
                      className="bg-red-500 px-6 py-4 rounded-full mt-8 flex-row items-center"
                      onPress={stopSpeaking}
                    >
                      <AntDesign name="pausecircleo" size={36} color="white" />
                      <Text className="text-white text-3xl font-bold ml-2">Stop</Text>
                      
                    </TouchableOpacity>
                  )}
                </View>
              )}
      <ScrollView className="flex-1" 
      contentContainerStyle={{ paddingBottom: 100 ,alignItems:'center',justifyContent:'center',paddingTop:20}}
      scrollEventThrottle={100}
      >
        <View className="flex-1 items-center justify-center p-5 m-5">
           <Text className="text-white mb-8 text-3xl">
            "{story.title}"
          </Text>
          <Text className="text-white text-lg">
            {story.content}
          </Text>
        </View>
         
      </ScrollView>
      </LinearGradient>
  );
};

export default DetailStory;
