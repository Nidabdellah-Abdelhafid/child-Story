import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import { Feather, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import * as SQLite from "expo-sqlite";

const Home = () => {
  const [lenghtStory, setLenghtStory] = useState(0);
  
  useEffect(()=>{
    getLenght();
  })

  const getLenght = async () => {
    try {
      const db = await SQLite.openDatabaseAsync("stories");
      const result = await db.getAllAsync("SELECT count(*) as lenght FROM stories");
      
      if(result[0].lenght){
        setLenghtStory(result[0]?.lenght);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
        <LinearGradient colors={['#170f48', '#1c1549']} className="flex-1 items-center justify-center">
      
      {/* Illustration */}
      <Image  source={require('../assets/images/home-l.jpg')} className="w-[260px] h-[400px] rounded-t-[100px] shadow-xl shadow-black/50 " resizeMode="contain" />

      {/* Title */}
      <View className="items-center justify-center">
        <Text className="text-5xl font-bold text-center text-yellow-500 mt-4">Bedtime Stories</Text>

      {/* Description */}
      <Text className="text-center text-gray-200 text-sm px-16 mt-2 font-bold">
      💫 "Spark your child's imagination with magical and unique bedtime stories, crafted just for them and their favorite characters. Every night brings a new adventure to dream about!" 🌙✨
      </Text>

      {/* Create Story Button */}
      <TouchableOpacity 
        className="bg-yellow-500 px-14 py-6 rounded-full mt-8 flex-row items-center"
        onPress={() => router.push('/newStory')}
      >
        <Text className="text-white text-3xl font-bold">Create Story</Text>
        <SimpleLineIcons className="ml-2" name="magic-wand" size={26} color="yellow" />
      </TouchableOpacity>

      {/* View Previous Stories */}
      <TouchableOpacity className="mt-4 flex-row items-center"  onPress={() => router.push('/listStories')}>
        <Text className="text-white text-sm font-700">View previous stories</Text>
        <Feather name="arrow-right" size={20} color="white" />
      </TouchableOpacity>

      {/* Story Count & Emoji */}
      <View className="flex-row items-center mt-5">
        <Text className="text-white text-xl font-bold">{lenghtStory}</Text>
        <FontAwesome5 className="ml-2" name="cookie-bite" size={18} color="white" />
      </View>
      </View>
      
      
    </LinearGradient>
    
    <StatusBar style="light" />
      </>
  )
}

export default Home