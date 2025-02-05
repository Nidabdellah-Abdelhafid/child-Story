import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView, ActivityIndicator, TouchableOpacity } from "react-native";
import * as Speech from "expo-speech";

const HF_API_KEY = "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"; // Replace with your Hugging Face API Key

const StoryGenerator = () => {
  const [childName, setChildName] = useState("");
  const [storyLanguage, setStoryLanguage] = useState("English");
  const [childAge, setChildAge] = useState("");
  const [gender, setGender] = useState("Boy");
  const [storySetting, setStorySetting] = useState("");
  const [characters, setCharacters] = useState([""]);
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [storyTitle, setStoryTitle] = useState("");

  // Function to call Hugging Face AI to generate a story
  const generateStory = async () => {
    if (!childName || !childAge || !storySetting) {
      alert("Please fill in all required fields!");
      return;
    }
  
    setLoading(true);
    setStory("");
    setStoryTitle("");
  
    const characterList = characters.filter(c => c.trim()).join(", ");
    const prompt = `Generate a bedtime story for a ${childAge}-year-old ${gender} named ${childName}. 
                    The story takes place in ${storySetting}. 
                    Additional characters: ${characterList}.
                    The story should be written in ${storyLanguage}.
                    Provide a creative title before the story starts.`;
  
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct",
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${HF_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputs: prompt }),
        }
      );
  
      const data = await response.json();
  
      if (response.ok && data && data[0] && data[0].generated_text) {
        const generatedText = data[0].generated_text;
        
        // Extract the first line as the title
        const titleEndIndex = generatedText.indexOf("\n");
        const title = generatedText.substring(0, titleEndIndex).trim();
        const storyContent = generatedText.substring(titleEndIndex + 1).trim();
  
        setStoryTitle(title);
        setStory(storyContent);
      } else {
        alert("No story generated. Try a different prompt.");
      }
    } catch (error) {
      console.error("Error fetching story:", error);
      alert("Something went wrong. Please try again.");
    }
  
    setLoading(false);
  };
  

  // Function to add new character input field
  const addCharacterField = () => {
    setCharacters([...characters, ""]);
  };

  // Function to update character values
  const updateCharacter = (index, value) => {
    const newCharacters = [...characters];
    newCharacters[index] = value;
    setCharacters(newCharacters);
  };

  // Function to read the story aloud
  const speakStory = () => {
    if (!story.trim()) return;
    setSpeaking(true);
    Speech.speak(storyTitle + ". " + story, {
      language: storyLanguage === "English" ? "en-US" : "fr-FR",
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
    <ScrollView contentContainerStyle={{ padding: 20 }} className="bg-gray-100">
      <Text className="text-2xl font-bold text-center text-blue-700 mb-5">✨ Bedtime Story Creator ✨</Text>

      {/* Child's Name */}
      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-4"
        placeholder="Child's Name"
        value={childName}
        onChangeText={setChildName}
      />

      {/* Story Language */}
      <Text className="text-lg font-semibold">Story Language:</Text>
      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-4"
        placeholder="English / French"
        value={storyLanguage}
        onChangeText={setStoryLanguage}
      />

      {/* Child's Age */}
      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-4"
        placeholder="Child's Age"
        keyboardType="numeric"
        value={childAge}
        onChangeText={setChildAge}
      />

      {/* Gender */}
      <Text className="text-lg font-semibold">Gender:</Text>
      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-4"
        placeholder="Boy / Girl"
        value={gender}
        onChangeText={setGender}
      />

      {/* Story Setting */}
      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-4"
        placeholder="Where does the story take place?"
        value={storySetting}
        onChangeText={setStorySetting}
      />

      {/* Dynamic Additional Characters */}
      <Text className="text-lg font-semibold">Additional Characters:</Text>
      {characters.map((char, index) => (
        <TextInput
          key={index}
          className="border border-gray-300 rounded-lg p-3 mb-4"
          placeholder={`Character ${index + 1}`}
          value={char}
          onChangeText={(text) => updateCharacter(index, text)}
        />
      ))}

      {/* Add More Characters Button */}
      <TouchableOpacity onPress={addCharacterField} className="bg-blue-600 py-3 rounded-lg mb-4">
        <Text className="text-white text-center">+ Add Character</Text>
      </TouchableOpacity>

      {/* Generate Story Button */}
      <Button title="Generate Story" onPress={generateStory} />

      {loading && <ActivityIndicator size="large" color="blue" className="mt-5" />}
      {storyTitle ? <Text className="text-xl font-bold text-center text-purple-700 mt-5">{storyTitle}</Text> : null}
      {/* Display Generated Story */}
      {story ? <Text className="mt-5 text-lg leading-6">{story}</Text> : null}

      {/* Read Story Aloud Button */}
      {story && (
        <View className="mt-5">
          {!speaking ? (
            <Button title="🎙️ Read Story Aloud" onPress={speakStory} />
          ) : (
            <Button title="⏹️ Stop Speaking" onPress={stopSpeaking} color="red" />
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default StoryGenerator;
