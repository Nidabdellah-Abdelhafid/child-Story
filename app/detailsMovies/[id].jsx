import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  StyleSheet,
  Dimensions,
  Share,
  Platform,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome,Entypo,Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useWindowDimensions } from "react-native"; // Import this for dynamic screen width
import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from "react-native-reanimated";
import { ScrollView } from 'react-native-gesture-handler';
const { width } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';

import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

const IMG_HEIGHT = 500;
const DetailsMovies = () => {
  const { id, data } = useLocalSearchParams(); 
  const movie = JSON.parse(data);
 const scrollRef = useAnimatedRef();
 const navigation = useNavigation();

 const imageUrl = movie?.primaryImage;
  const movieTitle = movie?.primaryTitle;
  const movieDetails = `🎬 ${movieTitle}\n⭐ Rating: ${movie?.averageRating} / 10\n📅 Released: ${movie?.releaseDate}\n`;

  const shareMovie = async () => {
    try {
      const fileUri = FileSystem.cacheDirectory + "shared-movie.html";

      // HTML content for sharing (includes text & image)
      const htmlContent = `
      <html>
        <body style="font-family: Arial, sans-serif; text-align: center;">
          <h2>${movieTitle}</h2>
          <p>⭐ ${movie?.averageRating} / 10</p>
          <p>📅 Released: ${movie?.releaseDate}</p>
          <p><a href="${movie?.externalLinks[1]}">View Movie </a></p>
          <img src="${imageUrl}" style="width: 100%; max-width: 400px; height: auto;"/>
        </body>
      </html>`;

      // Save the HTML file locally
      await FileSystem.writeAsStringAsync(fileUri, htmlContent, {
        encoding: FileSystem.EncodingType.UTF8,
      });

      if (!(await Sharing.isAvailableAsync())) {
        alert("Sharing is not available on this device");
        return;
      }

      // Share the HTML file (contains text & image together)
      await Sharing.shareAsync(fileUri, {
        mimeType: "text/html",
        dialogTitle: `🎬 Share ${movieTitle}`,
      });
    } catch (error) {
      console.error("Error sharing movie:", error);
    }
  };

 useLayoutEffect(() => {
  navigation.setOptions({
    headerTitle: '',
    headerTransparent: true,

    headerBackground: () => (
      <Animated.View style={[headerAnimatedStyle, styles.header]}></Animated.View>
    ),
    headerRight: () => (
      <View style={styles.bar}>
        <TouchableOpacity style={styles.roundButton} onPress={shareMovie}>
          <Text style={{ color: 'white', marginRight: 5, fontWeight: '600' }}>Partager</Text>
          <Entypo name="share" size={24} color="white" />
        </TouchableOpacity>
      </View>
    ),
    headerLeft: () => (
      <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={25} color="white" />
      </TouchableOpacity>
    ),
  });
}, [navigation]);

const scrollOffset = useScrollViewOffset(scrollRef);

const imageAnimatedStyle = useAnimatedStyle(() => {
  return {
    transform: [
      {
        translateY: interpolate(
          scrollOffset.value,
          [-IMG_HEIGHT, 0, IMG_HEIGHT, IMG_HEIGHT],
          [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
        ),
      },
      {
        scale: interpolate(scrollOffset.value, [-IMG_HEIGHT, 0, IMG_HEIGHT], [2, 1, 1]),
      },
    ],
  };
}, []);


const headerAnimatedStyle = useAnimatedStyle(() => {
  return {
    opacity: interpolate(scrollOffset.value, [0, IMG_HEIGHT / 1.5], [0, 1]),
  };
}, []);

  return (
    <View className="flex-1 bg-black">
      <ScrollView className="flex-1 mb-10 " 
      contentContainerStyle={{ paddingBottom: 100,backgroundColor:'#000' }}
      ref={scrollRef}
      scrollEventThrottle={100}
      >
          <Animated.Image
            source={{ uri: movie?.primaryImage }}
            className="w-full h-full"
            style={[styles.image, imageAnimatedStyle]}
            resizeMode="cover"
          />
          <View style={styles.shadowOverlay}></View>
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              bottom: 0,
            }}
          />

        {/* Movie Title & Rating */}
        <View className="p-5 absulate top-[-28px] rounded-[40px] bg-black h-[620px]">
        <View className="w-full flex-col md:flex-row md:justify-between items-center mb-2">
          {/* Title - Adjust size based on screen width */}
          <Text className={`text-white font-bold ${width > 768 ? "text-4xl" : "text-2xl"}`}>
            {movie?.primaryTitle}
          </Text>

          {/* Rating Section */}
          <View className="flex-row items-center mt-2">
            <FontAwesome name="star" size={width > 768 ? 24 : 18} color="gold" />
            <Text className={`text-white ml-2 ${width > 768 ? "text-xl" : "text-lg"}`}>
              {movie?.averageRating} / 10
            </Text>
          </View>
        </View>
          

          {/* Movie Genres */}
          <View className="flex-row mt-3">
            {movie?.genres?.map((genre, index) => (
              <Text key={index} className="text-gray-400 text-sm mr-2">
                #{genre}
              </Text>
            ))}
          </View>

          {/* Movie Description */}
          <Text className="text-gray-300 mt-4 text-base leading-6">
            {movie?.description}
          </Text>

          {/* Additional Movie Details */}
          <View className="mt-5">
            <Text className="text-white text-lg font-semibold">🎬 Details</Text>
            <Text className="text-gray-400 text-sm mt-1">
              Released: {movie?.releaseDate}
            </Text>
            <Text className="text-gray-400 text-sm">
              Runtime: {movie?.runtimeMinutes} min
            </Text>
            <Text className="text-gray-400 text-sm">
              Country: {movie?.countriesOfOrigin.join(", ")}
            </Text>
            <Text className="text-gray-400 text-sm">
              Language: {movie?.spokenLanguages.join(", ")}
            </Text>
          </View>

          {/* Production Companies */}
          <View className="mt-5">
            <Text className="text-white text-lg font-semibold">🏢 Production</Text>
            {movie?.productionCompanies?.map((company, index) => (
              <Text key={index} className="text-gray-400 text-sm">
                {company.name}
              </Text>
            ))}
          </View>

          {/* External Links */}
          <View className="mt-5">
            <Text className="text-white text-lg font-semibold">🔗 External Links</Text>
            {movie?.externalLinks?.map((link, index) => (
              <TouchableOpacity key={index} onPress={() => Linking.openURL(link)}>
                <Text className="text-yellow-500 text-sm mt-1 underline">
                  {link}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsMovies;


const styles = StyleSheet.create({
  image: {
    height: IMG_HEIGHT,
    width: width,
    backgroundColor: '#000',
    opacity: 1

  },
  header: {
    backgroundColor: '#000000',
    height: 100,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#000000",
  },
  shadowOverlay: {
    ...StyleSheet.absoluteFillObject, // Cover the entire container
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adjust the opacity as needed
    borderRadius: 0,
  },
  roundButton: {
    width: 110,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#fff'
  },
})