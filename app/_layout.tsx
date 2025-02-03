import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import "../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
export default function RoutLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
      <Stack>
      <Stack.Screen name='index' options={{headerShown:false}} />
      <Stack.Screen name='detailsMovies/[id]'
       options={{
            headerTitle: "",
          }} />
    </Stack>
    <StatusBar style="light" />

    </SafeAreaProvider>
    </GestureHandlerRootView>
    
  )
}

