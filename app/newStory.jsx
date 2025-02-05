import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { View, Text, TextInput, ScrollView, ActivityIndicator, TouchableOpacity } from "react-native";
import Slider from '@react-native-community/slider';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import * as SQLite from 'expo-sqlite'; 




const HF_API_KEY = "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";

const NewStory = () => {
  
  const [childName, setChildName] = useState('');
  const [storyLanguage, setStoryLanguage] = useState('English');
  const [childAge, setChildAge] = useState(4);
  const [gender, setGender] = useState('Girl');
  const [storySetting, setStorySetting] = useState("");
  const [characters, setCharacters] = useState([""]);
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [storyTitle, setStoryTitle] = useState("");
  const [database,setDatabase]= useState();

  const initial= async()=>{
    try{
        const db = await SQLite.openDatabaseAsync('stories');

        await db.execAsync(`
          PRAGMA journal_mode = WAL;
          CREATE TABLE IF NOT EXISTS stories (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT, language TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP);
          `
        );
        setDatabase(db);
    }catch(err){
      console.log(err)
    }
    

  }

  
  useEffect(() => {
    initial();
  }, []);

  // ✅ Save story to SQLite
  const saveStoryToDB = async (title, content,language) => {
     try{
      
      const result = await database.runAsync('INSERT INTO stories (title, content,language, created_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP)', title,content,language);
      
    }catch(err){
      console.log(err)
    }
    
  };

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
    const prompt = `Write a detailed and immersive bedtime story for a ${childAge}-year-old ${gender} named ${childName}, 
                    The story takes place in ${storySetting}, a land filled with adventure, magic, and wonder, 
                    Additional characters include: ${characterList},
                    The story should be written in ${storyLanguage},
                    The story should be rich in descriptions, dialogues, and emotions, making it feel magical and real,
                    The story should be at least 600 words long and provide a creative title before the story starts.
                    `;
  
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct",
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${HF_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ "inputs": prompt }),
        }
      );
  
      const data = await response.json();
  
      if (response.ok && data && data[0] && data[0].generated_text) {
        let generatedText = data[0].generated_text.trim();
  
        // ✅ Remove any part of the prompt appearing in the response
        if (generatedText.includes(prompt)) {
          generatedText = generatedText.replace(prompt, "").trim();
        }
  
        // ✅ Ensure only the title and story are extracted properly
        const lines = generatedText.split("\n").filter(line => line.trim() !== "");
        const title = lines[0]; // First line as title
        const storyContent = lines.slice(1).join("\n"); // Remaining lines as story
  
        setStoryTitle(title);
        setStory(storyContent);
  
        // ✅ Save only the title and cleaned story in SQLite
        saveStoryToDB(title, storyContent, storyLanguage);
  
        router.push("/listStories");
  
        // ✅ Reset input fields
        setChildName('');
        setStoryLanguage('English');
        setChildAge(4);
        setGender('Girl');
        setStorySetting("");
        setCharacters([""]);
  
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


  return (
    <View className="flex-1">
         <LinearGradient colors={['#170f48', '#1c1549']} className="flex-1">
      <ScrollView contentContainerStyle={{ padding: 20 }} className="px-1">
        
        {/* Child's Name & Story Language */}
        <View className="flex-row justify-between">
          <View className="w-[48%]">
            <Text className="text-white mb-1 font-bold">Child's name:</Text>
            <TextInput 
              className="border border-yellow-500 text-white rounded-md p-3" 
              placeholder="Enter name" 
              placeholderTextColor="#999"
              value={childName} 
              onChangeText={setChildName} 
            />
          </View>
          <View className="w-[48%]">
            <Text className="text-white mb-1 font-bold">Story language:</Text>
            <TextInput 
              className="border border-yellow-500 text-white rounded-md p-3" 
              placeholder="English/French" 
              placeholderTextColor="#999"
              value={storyLanguage} 
              onChangeText={setStoryLanguage} 
            />
          </View>
        </View>

        {/* Child's Age */}
        <Text className="text-white mt-5 font-bold">Child's age: {childAge} years</Text>
        <Slider 
          minimumValue={2} 
          maximumValue={10} 
          step={1} 
          value={childAge} 
          onValueChange={setChildAge} 
          minimumTrackTintColor="#facc15" 
          thumbTintColor="yellow"
          style={{ width: '100%', height: 40 }}
        />

        {/* Gender Selection */}
        <Text className="text-white mt-5 font-bold">Gender:</Text>
        <View className="flex-row mt-2">
          {['Boy', 'Girl'].map((option) => (
            <TouchableOpacity 
              key={option} 
              className={`px-4 py-2 rounded-full mx-1 ${
                gender === option ? 'bg-yellow-500' : 'bg-transparent border border-yellow-400'
              }`}
              onPress={() => setGender(option)}
            >
              <Text className={`text-white ${gender === option ? 'font-bold' : ''}`}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Story Setting */}
        <Text className="text-white mt-5 font-bold">Where does the story play?</Text>
        <TextInput 
          className="border border-yellow-500 text-white rounded-md p-3 mt-2" 
          placeholder="Enter location" 
          placeholderTextColor="#999"
          value={storySetting} 
          onChangeText={setStorySetting} 
        />

        {/* Additional Characters */}
        <Text className="text-white mt-5 font-bold">Additional characters:</Text>
        {characters.map((char, index) => (
          <View key={index} className="flex-row items-center mt-2">
            <TextInput 
              className="border border-yellow-500 text-white rounded-md p-3 flex-1" 
              placeholder={`Character ${index + 1}`} 
              placeholderTextColor="#999"
              value={char} 
              onChangeText={(text) => updateCharacter(index, text)} 
            />
            {characters.length > 1 && (
              <TouchableOpacity onPress={() => setCharacters(characters.filter((_, i) => i !== index))}>
                {/* <Text className="text-white text-lg ml-3">➖</Text> */}
                <AntDesign name="minuscircle" size={22} color="white" className="text-white text-lg ml-3"/>
              </TouchableOpacity>
            )}
          </View>
        ))}

        {/* Add Character Button */}
        <TouchableOpacity onPress={addCharacterField} className="bg-transparent border border-yellow-400 py-2 px-4 rounded-md mt-4 flex-row items-center justify-center">
          <Text className="text-yellow-400">+ Add character</Text>
        </TouchableOpacity>

        {/* Dream Up Story Button */}
        <TouchableOpacity className="bg-yellow-500 py-4 rounded-full mt-6 flex-row items-center justify-center" onPress={()=>{generateStory();}}>
          <Text className="text-white font-bold text-lg">Dream Up Story</Text>
          <Text className="ml-2">✨</Text>
        </TouchableOpacity>
        {loading && <ActivityIndicator size="large" color="#facc15" className="mt-5" />}
              {/* {storyTitle ? <Text className="text-xl font-bold text-center text-purple-700 mt-5">{storyTitle}</Text> : null}
             
              {story ? <Text className="mt-5 text-lg leading-6">{story}</Text> : null}

              {story && (
                <View className="mt-5">
                  {!speaking ? (
                    <Button title="🎙️ Read Story Aloud" onPress={speakStory} />
                  ) : (
                    <Button title="⏹️ Stop Speaking" onPress={stopSpeaking} color="red" />
                  )}
                </View>
              )} */}
      </ScrollView>
    </LinearGradient>
      
    </View>
  )
}

export default NewStory