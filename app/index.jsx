import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Link, router } from "expo-router";
import { createUser } from "../lib/appwrite";
import { FontAwesome } from '@expo/vector-icons'; 
import * as Animatable from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import StoryGenerator from "./storyGenerator";
import Home from "./home";

const App = () => {
  
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
      <Home />
      </SafeAreaView>
      <StatusBar style="light" />
    </>
  );
};

export default App;
