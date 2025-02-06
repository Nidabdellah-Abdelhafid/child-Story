import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router, Slot, Stack } from 'expo-router'
import "../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import Ionicons from '@expo/vector-icons/Ionicons';
export default function RoutLayout() {

  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
      <Stack>
      <Stack.Screen name='index' options={{headerShown:false}} />
      <Stack.Screen name='listStories' 
      options={{
            headerTitle: "My Stories",
            headerBackground: () => (
              <View style={{backgroundColor: '#170f48',
                height: 100,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderColor: "#170f48",}}></View>
            ),
            headerTintColor: '#eab308',
            headerLeft: () => (
              <TouchableOpacity style={{ marginRight: 70 }} onPress={() => router.push("/")} className='flex-row justify-center items-center'>
                <Ionicons name="chevron-back-sharp" size={24} color="#eab308" />
                <Text className='text-yellow-500'>Home</Text>
              </TouchableOpacity>
            ),
        
          }} />
      <Stack.Screen name='newStory' options={{
            headerTitle: "Define your story",
            headerBackground: () => (
              <View style={{backgroundColor: '#170f48',
                height: 100,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderColor: "#170f48",}}></View>
            ),
            headerTintColor: '#eab308',
            headerLeft: () => (
              <TouchableOpacity style={{ marginRight: 65 }} onPress={() => router.push("/")} className='flex-row justify-center items-center'>
                <Ionicons name="chevron-back-sharp" size={24} color="#eab308" />
                <Text className='text-yellow-500'>Home</Text>
              </TouchableOpacity>
            ),
          }} />
      <Stack.Screen name='detailStory/[id]'
          options={{
            headerTitle: "Read story",
            headerBackground: () => (
              <View style={{
                backgroundColor: '#170f48',
                height: 100
              }}></View>
            ),
            headerTintColor: '#eab308',
          }}
          
       />
    </Stack>
    <StatusBar style="light" />
    </SafeAreaProvider>
    </GestureHandlerRootView>
    
  )
}

