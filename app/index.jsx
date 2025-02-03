import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Link, router } from "expo-router";
import { createUser } from "../lib/appwrite";
import { FontAwesome } from '@expo/vector-icons'; 
import * as Animatable from "react-native-animatable";

const App = () => {
  const [data, setData] = useState([{
    id: "tt0111161",
    url: "https://www.imdb.com/title/tt0111161/",
    primaryTitle: "The Shawshank Redemption",
    originalTitle: "The Shawshank Redemption",
    type: "movie",
    description:
      "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
    contentRating: "R",
    startYear: 1994,
    endYear: null,
    releaseDate: "1994-10-14",
    interests: ["Epic", "Period Drama", "Prison Drama", "Drama"],
    countriesOfOrigin: ["US"],
    externalLinks: [
      "https://www.facebook.com/shawshankredemptionfilm/",
      "https://www.warnerbros.com/movies/shawshank-redemption",
    ],
    spokenLanguages: ["en"],
    filmingLocations: [
      "Mansfield Reformatory - 100 Reformatory Road, Mansfield, Ohio, USA",
    ],
    productionCompanies: [
      {
        id: "co0040620",
        name: "Castle Rock Entertainment",
      },
    ],
    budget: 25000000,
    grossWorldwide: 29332133,
    genres: ["Drama"],
    isAdult: false,
    runtimeMinutes: 142,
    averageRating: 9.3,
    numVotes: 2999222,
  },
  {
    id: "tt0068646",
    url: "https://www.imdb.com/title/tt0068646/",
    primaryTitle: "The Godfather",
    originalTitle: "The Godfather",
    type: "movie",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg",
    contentRating: "R",
    startYear: 1972,
    endYear: null,
    releaseDate: "1972-03-24",
    interests: ["Epic", "Gangster", "Tragedy", "Crime", "Drama"],
    countriesOfOrigin: ["US"],
    externalLinks: [
      "https://www.facebook.com/thegodfather/",
      "https://www.instagram.com/thegodfathermovie/",
    ],
    spokenLanguages: ["en", "it", "la"],
    filmingLocations: ["Forza d\u0027Agr\u00f2, Messina, Sicily, Italy"],
    productionCompanies: [
      {
        id: "co0023400",
        name: "Paramount Pictures",
      },
      {
        id: "co0921482",
        name: "Albert S. Ruddy Productions",
      },
      {
        id: "co0255097",
        name: "Alfran Productions",
      },
    ],
    budget: 6000000,
    grossWorldwide: 250342198,
    genres: ["Crime", "Drama"],
    isAdult: false,
    runtimeMinutes: 175,
    averageRating: 9.2,
    numVotes: 2093305,
  },
  {
    id: "tt0468569",
    url: "https://www.imdb.com/title/tt0468569/",
    primaryTitle: "The Dark Knight",
    originalTitle: "The Dark Knight",
    type: "movie",
    description:
      "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    contentRating: "PG-13",
    startYear: 2008,
    endYear: null,
    releaseDate: "2008-07-18",
    interests: [
      "Action Epic",
      "Epic",
      "Superhero",
      "Action",
      "Crime",
      "Drama",
      "Thriller",
    ],
    countriesOfOrigin: ["US", "GB"],
    externalLinks: [
      "https://www.facebook.com/darkknighttrilogy/",
      "https://www.warnerbros.co.uk/movies/dark-knight",
    ],
    spokenLanguages: ["en"],
    filmingLocations: ["Chicago, Illinois, USA"],
    productionCompanies: [
      {
        id: "co0002663",
        name: "Warner Bros.",
      },
      {
        id: "co0159111",
        name: "Legendary Entertainment",
      },
      {
        id: "co0147954",
        name: "Syncopy",
      },
    ],
    budget: 185000000,
    grossWorldwide: 1009053678,
    genres: ["Action", "Crime", "Drama"],
    isAdult: false,
    runtimeMinutes: 152,
    averageRating: 9,
    numVotes: 2978151,
  },
  {
    id: "tt0071562",
    url: "https://www.imdb.com/title/tt0071562/",
    primaryTitle: "The Godfather Part II",
    originalTitle: "The Godfather Part II",
    type: "movie",
    description:
      "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BNzc1OWY5MjktZDllMi00ZDEzLWEwMGItYjk1YmRhYjBjNTVlXkEyXkFqcGc@._V1_.jpg",
    contentRating: "R",
    startYear: 1974,
    endYear: null,
    releaseDate: "1974-12-18",
    interests: ["Epic", "Gangster", "Tragedy", "Crime", "Drama"],
    countriesOfOrigin: ["US"],
    externalLinks: [
      "https://www.facebook.com/thegodfather/",
      "https://twitter.com/godfathermovie",
    ],
    spokenLanguages: ["en", "it", "es", "la"],
    filmingLocations: [
      "Kaiser Estate, 4000 W Lake Blvd, Homewood, Lake Tahoe, California, USA",
    ],
    productionCompanies: [
      {
        id: "co0023400",
        name: "Paramount Pictures",
      },
      {
        id: "co0099634",
        name: "The Coppola Company",
      },
      {
        id: "co0020958",
        name: "American Zoetrope",
      },
    ],
    budget: 13000000,
    grossWorldwide: 47964222,
    genres: ["Crime", "Drama"],
    isAdult: false,
    runtimeMinutes: 202,
    averageRating: 9,
    numVotes: 1411230,
  },
  {
    id: "tt0050083",
    url: "https://www.imdb.com/title/tt0050083/",
    primaryTitle: "12 Angry Men",
    originalTitle: "12 Angry Men",
    type: "movie",
    description:
      "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BYjE4NzdmOTYtYjc5Yi00YzBiLWEzNDEtNTgxZGQ2MWVkN2NiXkEyXkFqcGc@._V1_.jpg",
    contentRating: "Approved",
    startYear: 1957,
    endYear: null,
    releaseDate: "1957-04-10",
    interests: ["Legal Drama", "Psychological Drama", "Crime", "Drama"],
    countriesOfOrigin: ["US"],
    externalLinks: null,
    spokenLanguages: ["en"],
    filmingLocations: [
      "New York County Courthouse - 60 Centre Street, New York City, New York, USA",
    ],
    productionCompanies: [
      {
        id: "co0032902",
        name: "Orion-Nova Productions",
      },
    ],
    budget: 350000,
    grossWorldwide: 2945,
    genres: ["Crime", "Drama"],
    isAdult: false,
    runtimeMinutes: 96,
    averageRating: 9,
    numVotes: 908335,
  },
  {
    id: "tt0167260",
    url: "https://www.imdb.com/title/tt0167260/",
    primaryTitle: "The Lord of the Rings: The Return of the King",
    originalTitle: "The Lord of the Rings: The Return of the King",
    type: "movie",
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron\u0027s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_.jpg",
    contentRating: "PG-13",
    startYear: 2003,
    endYear: null,
    releaseDate: "2003-12-17",
    interests: [
      "Adventure Epic",
      "Epic",
      "Fantasy Epic",
      "Mountain Adventure",
      "Quest",
      "Sword \u0026 Sorcery",
      "Tragedy",
      "Adventure",
      "Drama",
      "Fantasy",
    ],
    countriesOfOrigin: ["NZ", "US"],
    externalLinks: [
      "https://www.facebook.com/lordoftheringstrilogy",
      "http://www.lordoftherings.net/",
    ],
    spokenLanguages: ["en"],
    filmingLocations: ["Hinuera Valley, Matamata, Waikato, New Zealand"],
    productionCompanies: [
      {
        id: "co0046718",
        name: "New Line Cinema",
      },
      {
        id: "co0046203",
        name: "WingNut Films",
      },
      {
        id: "co0061706",
        name: "The Saul Zaentz Company",
      },
    ],
    budget: 94000000,
    grossWorldwide: 1138263151,
    genres: ["Adventure", "Drama", "Fantasy"],
    isAdult: false,
    runtimeMinutes: 201,
    averageRating: 9,
    numVotes: 2052176,
  },
  {
    id: "tt0108052",
    url: "https://www.imdb.com/title/tt0108052/",
    primaryTitle: "Schindler\u0027s List",
    originalTitle: "Schindler\u0027s List",
    type: "movie",
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_.jpg",
    contentRating: "R",
    startYear: 1993,
    endYear: null,
    releaseDate: "1994-02-04",
    interests: [
      "Docudrama",
      "Epic",
      "Historical Epic",
      "Period Drama",
      "Prison Drama",
      "Biography",
      "Drama",
      "History",
    ],
    countriesOfOrigin: ["US"],
    externalLinks: [
      "https://www.facebook.com/SchindlersListMovie/",
      "https://www.uphe.com/movies/schindlers-list",
    ],
    spokenLanguages: ["en", "he", "de", "pl", "la"],
    filmingLocations: [
      "Auschwitz-Birkenau Concentration Camp, Oswiecim, Malopolskie, Poland",
    ],
    productionCompanies: [
      {
        id: "co0005073",
        name: "Universal Pictures",
      },
      {
        id: "co0009119",
        name: "Amblin Entertainment",
      },
    ],
    budget: 22000000,
    grossWorldwide: 322161245,
    genres: ["Biography", "Drama", "History"],
    isAdult: false,
    runtimeMinutes: 195,
    averageRating: 9,
    numVotes: 1503022,
  },
  {
    id: "tt0110912",
    url: "https://www.imdb.com/title/tt0110912/",
    primaryTitle: "Pulp Fiction",
    originalTitle: "Pulp Fiction",
    type: "movie",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_.jpg",
    contentRating: "R",
    startYear: 1994,
    endYear: null,
    releaseDate: "1994-10-14",
    interests: ["Dark Comedy", "Drug Crime", "Gangster", "Crime", "Drama"],
    countriesOfOrigin: ["US"],
    externalLinks: [
      "http://www.facebook.com/PulpFiction",
      "http://www.miramax.com/movie/pulp-fiction",
    ],
    spokenLanguages: ["en", "es", "fr"],
    filmingLocations: ["1435 Flower Street, Glendale, California, USA"],
    productionCompanies: [
      {
        id: "co0022594",
        name: "Miramax",
      },
      {
        id: "co0019267",
        name: "A Band Apart",
      },
      {
        id: "co0010434",
        name: "Jersey Films",
      },
    ],
    budget: 8000000,
    grossWorldwide: 213928762,
    genres: ["Crime", "Drama"],
    isAdult: false,
    runtimeMinutes: 154,
    averageRating: 8.9,
    numVotes: 2300266,
  },
  {
    id: "tt0120737",
    url: "https://www.imdb.com/title/tt0120737/",
    primaryTitle: "The Lord of the Rings: The Fellowship of the Ring",
    originalTitle: "The Lord of the Rings: The Fellowship of the Ring",
    type: "movie",
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_.jpg",
    contentRating: "PG-13",
    startYear: 2001,
    endYear: null,
    releaseDate: "2001-12-19",
    interests: [
      "Adventure Epic",
      "Epic",
      "Fantasy Epic",
      "Quest",
      "Sword \u0026 Sorcery",
      "Adventure",
      "Drama",
      "Fantasy",
    ],
    countriesOfOrigin: ["NZ", "US", "GB"],
    externalLinks: [
      "https://www.facebook.com/lordoftheringstrilogy",
      "https://www.warnerbros.com/movies/lord-rings-fellowship-ring",
    ],
    spokenLanguages: ["en"],
    filmingLocations: ["Wellington, New Zealand"],
    productionCompanies: [
      {
        id: "co0046718",
        name: "New Line Cinema",
      },
      {
        id: "co0046203",
        name: "WingNut Films",
      },
      {
        id: "co0614377",
        name: "Marzano Films",
      },
    ],
    budget: 93000000,
    grossWorldwide: 888159923,
    genres: ["Adventure", "Drama", "Fantasy"],
    isAdult: false,
    runtimeMinutes: 178,
    averageRating: 8.9,
    numVotes: 2081389,
  },
  {
    id: "tt0060196",
    url: "https://www.imdb.com/title/tt0060196/",
    primaryTitle: "The Good, the Bad and the Ugly",
    originalTitle: "Il buono, il brutto, il cattivo",
    type: "movie",
    description:
      "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BMWM5ZjQxM2YtNDlmYi00ZDNhLWI4MWUtN2VkYjBlMTY1ZTkwXkEyXkFqcGc@._V1_.jpg",
    contentRating: "R",
    startYear: 1966,
    endYear: null,
    releaseDate: "1967-12-29",
    interests: [
      "Adventure Epic",
      "Desert Adventure",
      "Epic",
      "Period Drama",
      "Quest",
      "Spaghetti Western",
      "Western Epic",
      "Adventure",
      "Drama",
      "Western",
    ],
    countriesOfOrigin: ["IT", "ES", "US"],
    externalLinks: null,
    spokenLanguages: ["it", "en"],
    filmingLocations: ["Carazo, Burgos, Castilla y Le\u00f3n, Spain"],
    productionCompanies: [
      {
        id: "co0013844",
        name: "Produzioni Europee Associate (PEA)",
      },
      {
        id: "co0046114",
        name: "Arturo Gonz\u00e1lez Producciones Cinematogr\u00e1ficas",
      },
      {
        id: "co0002257",
        name: "Constantin Film",
      },
    ],
    budget: 1200000,
    grossWorldwide: 25264999,
    genres: ["Adventure", "Drama", "Western"],
    isAdult: false,
    runtimeMinutes: 178,
    averageRating: 8.8,
    numVotes: 841930,
  },
  {
    id: "tt0109830",
    url: "https://www.imdb.com/title/tt0109830/",
    primaryTitle: "Forrest Gump",
    originalTitle: "Forrest Gump",
    type: "movie",
    description:
      "The history of the United States from the 1950s to the \u002770s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_.jpg",
    contentRating: "PG-13",
    startYear: 1994,
    endYear: null,
    releaseDate: "1994-07-06",
    interests: ["Epic", "Drama", "Romance"],
    countriesOfOrigin: ["US"],
    externalLinks: [
      "https://www.facebook.com/ForrestGump",
      "https://www.instagram.com/forrestgumpfilm/",
    ],
    spokenLanguages: ["en"],
    filmingLocations: ["Chippewa Square, Savannah, Georgia, USA"],
    productionCompanies: [
      {
        id: "co0023400",
        name: "Paramount Pictures",
      },
      {
        id: "co0024369",
        name: "The Steve Tisch Company",
      },
      {
        id: "co0004317",
        name: "Wendy Finerman Productions",
      },
    ],
    budget: 55000000,
    grossWorldwide: 678226465,
    genres: ["Drama", "Romance"],
    isAdult: false,
    runtimeMinutes: 142,
    averageRating: 8.8,
    numVotes: 2346490,
  },
  {
    id: "tt0167261",
    url: "https://www.imdb.com/title/tt0167261/",
    primaryTitle: "The Lord of the Rings: The Two Towers",
    originalTitle: "The Lord of the Rings: The Two Towers",
    type: "movie",
    description:
      "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\u0027s new ally, Saruman, and his hordes of Isengard.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BMGQxMDdiOWUtYjc1Ni00YzM1LWE2NjMtZTg3Y2JkMjEzMTJjXkEyXkFqcGc@._V1_.jpg",
    contentRating: "PG-13",
    startYear: 2002,
    endYear: null,
    releaseDate: "2002-12-18",
    interests: [
      "Adventure Epic",
      "Dark Fantasy",
      "Epic",
      "Fantasy Epic",
      "Quest",
      "Sword \u0026 Sorcery",
      "Adventure",
      "Drama",
      "Fantasy",
    ],
    countriesOfOrigin: ["NZ", "US"],
    externalLinks: [
      "http://www.lordoftherings.net/",
      "https://www.facebook.com/lordoftheringstrilogy",
    ],
    spokenLanguages: ["en"],
    filmingLocations: ["Hinuera Valley, Matamata, Waikato, New Zealand"],
    productionCompanies: [
      {
        id: "co0046718",
        name: "New Line Cinema",
      },
      {
        id: "co0046203",
        name: "WingNut Films",
      },
      {
        id: "co0061706",
        name: "The Saul Zaentz Company",
      },
    ],
    budget: 94000000,
    grossWorldwide: 938242927,
    genres: ["Adventure", "Drama", "Fantasy"],
    isAdult: false,
    runtimeMinutes: 179,
    averageRating: 8.8,
    numVotes: 1850236,
  },
  {
    id: "tt0137523",
    url: "https://www.imdb.com/title/tt0137523/",
    primaryTitle: "Fight Club",
    originalTitle: "Fight Club",
    type: "movie",
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg",
    contentRating: "R",
    startYear: 1999,
    endYear: null,
    releaseDate: "1999-10-15",
    interests: ["Psychological Drama", "Workplace Drama", "Drama"],
    countriesOfOrigin: ["DE", "US"],
    externalLinks: [
      "https://www.facebook.com/FightClub",
      "https://www.foxmovies.com/movies/fight-club",
    ],
    spokenLanguages: ["en"],
    filmingLocations: [
      "240 North Neptune Avenue, Los Angeles, California, USA",
    ],
    productionCompanies: [
      {
        id: "co0017497",
        name: "Fox 2000 Pictures",
      },
      {
        id: "co0007127",
        name: "New Regency Productions",
      },
      {
        id: "co0038102",
        name: "Linson Films",
      },
    ],
    budget: 63000000,
    grossWorldwide: 101321009,
    genres: ["Drama"],
    isAdult: false,
    runtimeMinutes: 139,
    averageRating: 8.8,
    numVotes: 2425294,
  },
  {
    id: "tt1375666",
    url: "https://www.imdb.com/title/tt1375666/",
    primaryTitle: "Inception",
    originalTitle: "Inception",
    type: "movie",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    contentRating: "PG-13",
    startYear: 2010,
    endYear: null,
    releaseDate: "2010-07-16",
    interests: [
      "Action Epic",
      "Adventure Epic",
      "Psychological Thriller",
      "Sci-Fi Epic",
      "Action",
      "Adventure",
      "Sci-Fi",
      "Thriller",
    ],
    countriesOfOrigin: ["US", "GB"],
    externalLinks: [
      "http://wwws.warnerbros.co.jp/inception/",
      "http://inceptionmovie.warnerbros.com/",
    ],
    spokenLanguages: ["en", "ja", "fr"],
    filmingLocations: [
      "Fortress Mountain, Kananaskis Country, Alberta, Canada",
    ],
    productionCompanies: [
      {
        id: "co0002663",
        name: "Warner Bros.",
      },
      {
        id: "co0159111",
        name: "Legendary Entertainment",
      },
      {
        id: "co0147954",
        name: "Syncopy",
      },
    ],
    budget: 160000000,
    grossWorldwide: 839030630,
    genres: ["Action", "Adventure", "Sci-Fi"],
    isAdult: false,
    runtimeMinutes: 148,
    averageRating: 8.8,
    numVotes: 2645835,
  },
  {
    id: "tt0080684",
    url: "https://www.imdb.com/title/tt0080684/",
    primaryTitle: "Star Wars: Episode V - The Empire Strikes Back",
    originalTitle: "Star Wars: Episode V - The Empire Strikes Back",
    type: "movie",
    description:
      "After the Empire overpowers the Rebel Alliance, Luke Skywalker begins his Jedi training with Yoda. At the same time, Darth Vader and bounty hunter Boba Fett pursue his friends across the galaxy.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_.jpg",
    contentRating: "PG",
    startYear: 1980,
    endYear: null,
    releaseDate: "1980-06-18",
    interests: [
      "Action Epic",
      "Adventure Epic",
      "Dark Fantasy",
      "Fantasy Epic",
      "Quest",
      "Sci-Fi Epic",
      "Space Sci-Fi",
      "Sword \u0026 Sorcery",
      "Action",
      "Adventure",
    ],
    countriesOfOrigin: ["US"],
    externalLinks: [
      "https://www.lucasfilm.com/productions/episode-v/",
      "https://www.starwars.com/films/star-wars-episode-v-the-empire-strikes-back",
    ],
    spokenLanguages: ["en"],
    filmingLocations: ["Hardangerj\u00f8kulen Glacier, Finse, Norway"],
    productionCompanies: [
      {
        id: "co0071326",
        name: "Lucasfilm",
      },
    ],
    budget: 18000000,
    grossWorldwide: 550016086,
    genres: ["Action", "Adventure", "Fantasy"],
    isAdult: false,
    runtimeMinutes: 124,
    averageRating: 8.7,
    numVotes: 1423965,
  },
  {
    id: "tt0133093",
    url: "https://www.imdb.com/title/tt0133093/",
    primaryTitle: "The Matrix",
    originalTitle: "The Matrix",
    type: "movie",
    description:
      "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
    contentRating: "R",
    startYear: 1999,
    endYear: null,
    releaseDate: "1999-03-31",
    interests: [
      "Action Epic",
      "Artificial Intelligence",
      "Cyberpunk",
      "Dystopian Sci-Fi",
      "Gun Fu",
      "Martial Arts",
      "Sci-Fi Epic",
      "Action",
      "Sci-Fi",
    ],
    countriesOfOrigin: ["US", "AU"],
    externalLinks: [
      "https://play.hbomax.com/feature/urn:hbo:feature:GXdu2VgPdq5uAuwEAADak",
      "https://www.facebook.com/TheMatrixMovie/",
    ],
    spokenLanguages: ["en"],
    filmingLocations: ["Nashville, Tennessee, USA"],
    productionCompanies: [
      {
        id: "co0002663",
        name: "Warner Bros.",
      },
      {
        id: "co0108864",
        name: "Village Roadshow Pictures",
      },
      {
        id: "co0060075",
        name: "Groucho Film Partnership",
      },
    ],
    budget: 63000000,
    grossWorldwide: 467840449,
    genres: ["Action", "Sci-Fi"],
    isAdult: false,
    runtimeMinutes: 136,
    averageRating: 8.7,
    numVotes: 2127748,
  },
  {
    id: "tt0099685",
    url: "https://www.imdb.com/title/tt0099685/",
    primaryTitle: "Goodfellas",
    originalTitle: "Goodfellas",
    type: "movie",
    description:
      "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_.jpg",
    contentRating: "R",
    startYear: 1990,
    endYear: null,
    releaseDate: "1990-09-21",
    interests: [
      "Docudrama",
      "Gangster",
      "True Crime",
      "Biography",
      "Crime",
      "Drama",
    ],
    countriesOfOrigin: ["US"],
    externalLinks: [
      "https://archive.org/embed/goodfellas.-1990.1080p.-blu-ray.x-264-yts.-am",
    ],
    spokenLanguages: ["en", "it", "he", "yi"],
    filmingLocations: [
      "The Oriental Manor, 1818 86th St, Brooklyn, New York City, New York, USA",
    ],
    productionCompanies: [
      {
        id: "co0002663",
        name: "Warner Bros.",
      },
    ],
    budget: 25000000,
    grossWorldwide: 47055110,
    genres: ["Biography", "Crime", "Drama"],
    isAdult: false,
    runtimeMinutes: 145,
    averageRating: 8.7,
    numVotes: 1306309,
  },
  {
    id: "tt0073486",
    url: "https://www.imdb.com/title/tt0073486/",
    primaryTitle: "One Flew Over the Cuckoo\u0027s Nest",
    originalTitle: "One Flew Over the Cuckoo\u0027s Nest",
    type: "movie",
    description:
      "In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BYjBkMjgzMzYtNzRiMS00NDc3LWE4YTUtZjYxYjZhNjNhYzhhXkEyXkFqcGc@._V1_.jpg",
    contentRating: "R",
    startYear: 1975,
    endYear: null,
    releaseDate: "1975-11-19",
    interests: ["Medical Drama", "Psychological Drama", "Drama"],
    countriesOfOrigin: ["US"],
    externalLinks: null,
    spokenLanguages: ["en"],
    filmingLocations: [
      "Oregon State Mental Hospital - 2600 Center Street NE, Salem, Oregon, USA",
    ],
    productionCompanies: [
      {
        id: "co0066949",
        name: "Fantasy Films",
      },
      {
        id: "co0046377",
        name: "N.V. Zvaluw",
      },
    ],
    budget: 3000000,
    grossWorldwide: 109115366,
    genres: ["Drama"],
    isAdult: false,
    runtimeMinutes: 133,
    averageRating: 8.7,
    numVotes: 1105140,
  },
  {
    id: "tt0816692",
    url: "https://www.imdb.com/title/tt0816692/",
    primaryTitle: "Interstellar",
    originalTitle: "Interstellar",
    type: "movie",
    description:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
    contentRating: "PG-13",
    startYear: 2014,
    endYear: null,
    releaseDate: "2014-11-07",
    interests: [
      "Adventure Epic",
      "Epic",
      "Quest",
      "Sci-Fi Epic",
      "Space Sci-Fi",
      "Adventure",
      "Drama",
      "Sci-Fi",
    ],
    countriesOfOrigin: ["US", "GB", "CA"],
    externalLinks: [
      "https://www.facebook.com/Interstellar",
      "https://twitter.com/Interstellar",
    ],
    spokenLanguages: ["en"],
    filmingLocations: ["Iceland"],
    productionCompanies: [
      {
        id: "co0023400",
        name: "Paramount Pictures",
      },
      {
        id: "co0002663",
        name: "Warner Bros.",
      },
      {
        id: "co0159111",
        name: "Legendary Entertainment",
      },
    ],
    budget: 165000000,
    grossWorldwide: 732121575,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    isAdult: false,
    runtimeMinutes: 169,
    averageRating: 8.7,
    numVotes: 2269500,
  },
  {
    id: "tt0114369",
    url: "https://www.imdb.com/title/tt0114369/",
    primaryTitle: "Se7en",
    originalTitle: "Se7en",
    type: "movie",
    description:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_.jpg",
    contentRating: "R",
    startYear: 1995,
    endYear: null,
    releaseDate: "1995-09-22",
    interests: [
      "Cop Drama",
      "Hard-boiled Detective",
      "Legal Drama",
      "Police Procedural",
      "Psychological Thriller",
      "Serial Killer",
      "Crime",
      "Drama",
      "Mystery",
      "Thriller",
    ],
    countriesOfOrigin: ["US"],
    externalLinks: ["http://www.facebook.com/Se7en.Film"],
    spokenLanguages: ["en"],
    filmingLocations: [
      "Pacific Electric Building, Los Angeles, California, USA",
    ],
    productionCompanies: [
      {
        id: "co0027715",
        name: "Arnold Kopelson Productions",
      },
      {
        id: "co0078943",
        name: "Cecchi Gori Pictures",
      },
      {
        id: "co0043545",
        name: "Juno Pix",
      },
    ],
    budget: 33000000,
    grossWorldwide: 327333559,
    genres: ["Crime", "Drama", "Mystery"],
    isAdult: false,
    runtimeMinutes: 127,
    averageRating: 8.6,
    numVotes: 1878375,
  },
  {
    id: "tt0038650",
    url: "https://www.imdb.com/title/tt0038650/",
    primaryTitle: "It\u0027s a Wonderful Life",
    originalTitle: "It\u0027s a Wonderful Life",
    type: "movie",
    description:
      "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BMDM4OWFhYjEtNTE5Yy00NjcyLTg5N2UtZDQwNDZlYjlmNDU5XkEyXkFqcGc@._V1_.jpg",
    contentRating: "PG",
    startYear: 1946,
    endYear: null,
    releaseDate: "1947-01-07",
    interests: [
      "Feel-Good Romance",
      "Holiday Family",
      "Holiday Romance",
      "Psychological Drama",
      "Drama",
      "Family",
      "Fantasy",
      "Holiday",
      "Romance",
    ],
    countriesOfOrigin: ["US"],
    externalLinks: ["https://www.facebook.com/ItsAWonderfulLifeMovie"],
    spokenLanguages: ["en", "fr"],
    filmingLocations: [
      "4587 Viro Road, La Ca\u00f1ada Flintridge, California, USA",
    ],
    productionCompanies: [
      {
        id: "co0196361",
        name: "Liberty Films (II)",
      },
    ],
    budget: 3180000,
    grossWorldwide: 9767242,
    genres: ["Drama", "Family", "Fantasy"],
    isAdult: false,
    runtimeMinutes: 130,
    averageRating: 8.6,
    numVotes: 522408,
  },
  {
    id: "tt0047478",
    url: "https://www.imdb.com/title/tt0047478/",
    primaryTitle: "Seven Samurai",
    originalTitle: "Shichinin no samurai",
    type: "movie",
    description:
      "Farmers from a village exploited by bandits hire a veteran samurai for protection, and he gathers six other samurai to join him.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BZjliMWExOTMtZDQ3ZS00NWU3LWIyN2EtMjllNzk3ZTNlYzg4XkEyXkFqcGc@._V1_.jpg",
    contentRating: "Not Rated",
    startYear: 1954,
    endYear: null,
    releaseDate: "1956-11-19",
    interests: ["Action Epic", "Epic", "Period Drama", "Drama"],
    countriesOfOrigin: ["JP"],
    externalLinks: null,
    spokenLanguages: ["ja"],
    filmingLocations: ["Izu Peninsula, Shizuoka, Japan"],
    productionCompanies: [
      {
        id: "co0002219",
        name: "Toho",
      },
    ],
    budget: 125000000,
    grossWorldwide: 1065287,
    genres: ["Action", "Drama"],
    isAdult: false,
    runtimeMinutes: 207,
    averageRating: 8.6,
    numVotes: 379666,
  },
  {
    id: "tt0102926",
    url: "https://www.imdb.com/title/tt0102926/",
    primaryTitle: "The Silence of the Lambs",
    originalTitle: "The Silence of the Lambs",
    type: "movie",
    description:
      "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_.jpg",
    contentRating: "R",
    startYear: 1991,
    endYear: null,
    releaseDate: "1991-02-14",
    interests: [
      "Police Procedural",
      "Psychological Drama",
      "Psychological Thriller",
      "Serial Killer",
      "Crime",
      "Drama",
      "Thriller",
    ],
    countriesOfOrigin: ["US"],
    externalLinks: ["https://www.facebook.com/TheSilenceOfTheLambsMovie/"],
    spokenLanguages: ["en", "la"],
    filmingLocations: [
      "Bimini Airport, South Bimini Island, Bimini Islands, Bahamas",
    ],
    productionCompanies: [
      {
        id: "co0165563",
        name: "Strong Heart/Demme Production",
      },
      {
        id: "co0001995",
        name: "Orion Pictures",
      },
    ],
    budget: 19000000,
    grossWorldwide: 272742922,
    genres: ["Crime", "Drama", "Thriller"],
    isAdult: false,
    runtimeMinutes: 118,
    averageRating: 8.6,
    numVotes: 1610099,
  },
  {
    id: "tt0120815",
    url: "https://www.imdb.com/title/tt0120815/",
    primaryTitle: "Saving Private Ryan",
    originalTitle: "Saving Private Ryan",
    type: "movie",
    description:
      "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BZGZhZGQ1ZWUtZTZjYS00MDJhLWFkYjctN2ZlYjE5NWYwZDM2XkEyXkFqcGc@._V1_.jpg",
    contentRating: "R",
    startYear: 1998,
    endYear: null,
    releaseDate: "1998-07-24",
    interests: ["Epic", "War Epic", "Drama", "War"],
    countriesOfOrigin: ["US"],
    externalLinks: [
      "https://www.facebook.com/SavingPrivateRyanMovie/",
      "https://twitter.com/SavingPFCRyan",
    ],
    spokenLanguages: ["en", "fr", "de", "cs"],
    filmingLocations: [
      "Curracloe Beach, Ballinesker, County Wexford, Ireland",
    ],
    productionCompanies: [
      {
        id: "co0819670",
        name: "Dreamworks Pictures",
      },
      {
        id: "co0023400",
        name: "Paramount Pictures",
      },
      {
        id: "co0009119",
        name: "Amblin Entertainment",
      },
    ],
    budget: 70000000,
    grossWorldwide: 482351251,
    genres: ["Drama", "War"],
    isAdult: false,
    runtimeMinutes: 169,
    averageRating: 8.6,
    numVotes: 1549576,
  },
  {
    id: "tt0317248",
    url: "https://www.imdb.com/title/tt0317248/",
    primaryTitle: "City of God",
    originalTitle: "Cidade de Deus",
    type: "movie",
    description:
      "In the slums of Rio, two kids\u0027 paths diverge as one struggles to become a photographer and the other a kingpin.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BYjY4NGI5OTUtY2ZlZS00Zjk4LTk5N2MtN2JmYWVjNGNmMGRlXkEyXkFqcGc@._V1_.jpg",
    contentRating: "R",
    startYear: 2002,
    endYear: null,
    releaseDate: "2004-02-13",
    interests: ["Caper", "Coming-of-Age", "Gangster", "Crime", "Drama"],
    countriesOfOrigin: ["BR", "FR"],
    externalLinks: [
      "https://www.facebook.com/CityofGod",
      "http://www.miramax.com/movie/city-of-god",
    ],
    spokenLanguages: ["pt"],
    filmingLocations: ["Rio de Janeiro, Rio de Janeiro, Brazil"],
    productionCompanies: [
      {
        id: "co0069394",
        name: "O2 Filmes",
      },
      {
        id: "co0018942",
        name: "VideoFilmes",
      },
      {
        id: "co0026273",
        name: "Globo Filmes",
      },
    ],
    budget: 3300000,
    grossWorldwide: 30680793,
    genres: ["Crime", "Drama"],
    isAdult: false,
    runtimeMinutes: 130,
    averageRating: 8.6,
    numVotes: 827533,
  },
  {
    id: "tt0120689",
    url: "https://www.imdb.com/title/tt0120689/",
    primaryTitle: "The Green Mile",
    originalTitle: "The Green Mile",
    type: "movie",
    description:
      "Paul Edgecomb, the head guard of a prison, meets an inmate, John Coffey, a black man who is accused of murdering two girls. His life changes drastically when he discovers that John has a special gift.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_.jpg",
    contentRating: "R",
    startYear: 1999,
    endYear: null,
    releaseDate: "1999-12-10",
    interests: [
      "Period Drama",
      "Prison Drama",
      "Supernatural Fantasy",
      "Tragedy",
      "Crime",
      "Drama",
      "Fantasy",
      "Mystery",
    ],
    countriesOfOrigin: ["US"],
    externalLinks: [
      "https://www.facebook.com/TheGreenMileOfficial",
      "http://www.thegreenmile.com/",
    ],
    spokenLanguages: ["en", "fr"],
    filmingLocations: [
      "Tennessee State Penitentiary, Nashville, Tennessee, USA",
    ],
    productionCompanies: [
      {
        id: "co0040620",
        name: "Castle Rock Entertainment",
      },
      {
        id: "co0029398",
        name: "Darkwoods Productions",
      },
      {
        id: "co0002663",
        name: "Warner Bros.",
      },
    ],
    budget: 60000000,
    grossWorldwide: 286801374,
    genres: ["Crime", "Drama", "Fantasy"],
    isAdult: false,
    runtimeMinutes: 189,
    averageRating: 8.6,
    numVotes: 1464415,
  },
  {
    id: "tt0118799",
    url: "https://www.imdb.com/title/tt0118799/",
    primaryTitle: "Life Is Beautiful",
    originalTitle: "La vita \u00e8 bella",
    type: "movie",
    description:
      "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BZTBhOGYzZjQtYzE0Mi00MGIwLWE0MWYtNzMxNTM2OTFkM2NjXkEyXkFqcGc@._V1_.jpg",
    contentRating: "PG-13",
    startYear: 1997,
    endYear: null,
    releaseDate: "1997-12-20",
    interests: [
      "Period Drama",
      "Tragedy",
      "Tragic Romance",
      "Comedy",
      "Drama",
      "Romance",
      "War",
    ],
    countriesOfOrigin: ["IT"],
    externalLinks: [
      "https://www.miramax.com/movie/life-is-beautiful-la-vita-e-bella/",
      "http://www.facebook.com/LifeisBeautifulMovie",
    ],
    spokenLanguages: ["it", "de", "en"],
    filmingLocations: ["Arezzo, Tuscany, Italy"],
    productionCompanies: [
      {
        id: "co0030298",
        name: "Melampo Cinematografica",
      },
      {
        id: "co0037028",
        name: "Cecchi Gori Group Tiger Cinematografica",
      },
    ],
    budget: 20000000,
    grossWorldwide: 230099013,
    genres: ["Comedy", "Drama", "Romance"],
    isAdult: false,
    runtimeMinutes: 116,
    averageRating: 8.6,
    numVotes: 767891,
  },
  {
    id: "tt0103064",
    url: "https://www.imdb.com/title/tt0103064/",
    primaryTitle: "Terminator 2: Judgment Day",
    originalTitle: "Terminator 2: Judgment Day",
    type: "movie",
    description:
      "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son John from an even more advanced and powerful cyborg.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BNGMyMGNkMDUtMjc2Ni00NWFlLTgyODEtZTY2MzBiZTg0OWZiXkEyXkFqcGc@._V1_.jpg",
    contentRating: "R",
    startYear: 1991,
    endYear: null,
    releaseDate: "1991-07-03",
    interests: [
      "Action Epic",
      "Artificial Intelligence",
      "Cyberpunk",
      "Dystopian Sci-Fi",
      "Sci-Fi Epic",
      "Time Travel",
      "Action",
      "Adventure",
      "Sci-Fi",
    ],
    countriesOfOrigin: ["US", "FR"],
    externalLinks: [
      "https://www.facebook.com/terminator2",
      "http://www.terminator2-3d.de/",
    ],
    spokenLanguages: ["en", "es"],
    filmingLocations: [
      "Bayside Parkway \u0026 Gateway Boulevard, Fremont, California, USA",
    ],
    productionCompanies: [
      {
        id: "co0094459",
        name: "Carolco Pictures",
      },
      {
        id: "co0092551",
        name: "Pacific Western",
      },
      {
        id: "co0038663",
        name: "Lightstorm Entertainment",
      },
    ],
    budget: 102000000,
    grossWorldwide: 517778573,
    genres: ["Action", "Adventure", "Sci-Fi"],
    isAdult: false,
    runtimeMinutes: 137,
    averageRating: 8.6,
    numVotes: 1216973,
  },
  {
    id: "tt0076759",
    url: "https://www.imdb.com/title/tt0076759/",
    primaryTitle: "Star Wars: Episode IV - A New Hope",
    originalTitle: "Star Wars",
    type: "movie",
    description:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire\u0027s world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_.jpg",
    contentRating: "PG",
    startYear: 1977,
    endYear: null,
    releaseDate: "1977-05-25",
    interests: [
      "Action Epic",
      "Adventure Epic",
      "Fantasy Epic",
      "Quest",
      "Sci-Fi Epic",
      "Space Sci-Fi",
      "Sword \u0026 Sorcery",
      "Action",
      "Adventure",
      "Fantasy",
    ],
    countriesOfOrigin: ["US"],
    externalLinks: [
      "https://www.hotstar.com/id/movies/star-wars-a-new-hope/1260016021",
      "https://www.lucasfilm.com/productions/episode-iv/",
    ],
    spokenLanguages: ["en"],
    filmingLocations: ["Tikal National Park, Guatemala"],
    productionCompanies: [
      {
        id: "co0071326",
        name: "Lucasfilm",
      },
      {
        id: "co0000756",
        name: "Twentieth Century Fox",
      },
    ],
    budget: 11000000,
    grossWorldwide: 775398507,
    genres: ["Action", "Adventure", "Fantasy"],
    isAdult: false,
    runtimeMinutes: 121,
    averageRating: 8.6,
    numVotes: 1491997,
  },
  {
    id: "tt0088763",
    url: "https://www.imdb.com/title/tt0088763/",
    primaryTitle: "Back to the Future",
    originalTitle: "Back to the Future",
    type: "movie",
    description:
      "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BZmM3ZjE0NzctNjBiOC00MDZmLTgzMTUtNGVlOWFlOTNiZDJiXkEyXkFqcGc@._V1_.jpg",
    contentRating: "PG",
    startYear: 1985,
    endYear: null,
    releaseDate: "1985-07-03",
    interests: [
      "High-Concept Comedy",
      "Teen Adventure",
      "Teen Comedy",
      "Time Travel",
      "Urban Adventure",
      "Adventure",
      "Comedy",
      "Sci-Fi",
    ],
    countriesOfOrigin: ["US"],
    externalLinks: [
      "https://www.facebook.com/BTTF",
      "http://www.backtothefuture.com/",
    ],
    spokenLanguages: ["en"],
    filmingLocations: [
      "Whittier High School - 12417 E. Philadelphia Street, Whittier, California, USA",
    ],
    productionCompanies: [
      {
        id: "co0005073",
        name: "Universal Pictures",
      },
      {
        id: "co0009119",
        name: "Amblin Entertainment",
      },
      {
        id: "co0010110",
        name: "U-Drive Productions",
      },
    ],
    budget: 19000000,
    grossWorldwide: 384577472,
    genres: ["Adventure", "Comedy", "Sci-Fi"],
    isAdult: false,
    runtimeMinutes: 116,
    averageRating: 8.5,
    numVotes: 1358608,
  },
  {
    id: "tt0245429",
    url: "https://www.imdb.com/title/tt0245429/",
    primaryTitle: "Spirited Away",
    originalTitle: "Sen to Chihiro no kamikakushi",
    type: "movie",
    description:
      "During her family\u0027s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, and where humans are changed into beasts.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_.jpg",
    contentRating: "PG",
    startYear: 2001,
    endYear: null,
    releaseDate: "2003-03-28",
    interests: [
      "Anime",
      "Coming-of-Age",
      "Fairy Tale",
      "Hand-Drawn Animation",
      "Quest",
      "Supernatural Fantasy",
      "Adventure",
      "Animation",
      "Family",
      "Fantasy",
    ],
    countriesOfOrigin: ["JP", "US"],
    externalLinks: [
      "http://movies.disney.com/spirited-away",
      "http://disney.go.com/disneyvideos/animatedfilms/miyazaki/more_miyazaki.html",
    ],
    spokenLanguages: ["ja", "en"],
    filmingLocations: null,
    productionCompanies: [
      {
        id: "co0016626",
        name: "Tokuma Shoten",
      },
      {
        id: "co0048420",
        name: "Studio Ghibli",
      },
      {
        id: "co0003850",
        name: "Nippon Television Network (NTV)",
      },
    ],
    budget: 19000000,
    grossWorldwide: 358110581,
    genres: ["Adventure", "Animation", "Family"],
    isAdult: false,
    runtimeMinutes: 124,
    averageRating: 8.6,
    numVotes: 893104,
  },
  {
    id: "tt0253474",
    url: "https://www.imdb.com/title/tt0253474/",
    primaryTitle: "The Pianist",
    originalTitle: "The Pianist",
    type: "movie",
    description:
      "During WWII, acclaimed Polish musician Wladyslaw faces various struggles as he loses contact with his family. As the situation worsens, he hides in the ruins of Warsaw in order to survive.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BMjEwNmEwYjgtNTk3ZC00NjljLTg5ZDctZTY3ZGQwZjRkZmQxXkEyXkFqcGc@._V1_.jpg",
    contentRating: "R",
    startYear: 2002,
    endYear: null,
    releaseDate: "2003-03-28",
    interests: [
      "Docudrama",
      "Epic",
      "Period Drama",
      "Tragedy",
      "War Epic",
      "Biography",
      "Drama",
      "Music",
      "War",
    ],
    countriesOfOrigin: ["FR", "PL", "DE", "GB", "US"],
    externalLinks: [
      "https://www.focusfeatures.com/the_pianist",
      "https://www.facebook.com/The-Pianist-302717273113887/",
    ],
    spokenLanguages: ["en", "de", "ru"],
    filmingLocations: [
      "Instalator\u00f3w, Ochota, Warsaw, Mazowieckie, Poland",
    ],
    productionCompanies: [
      {
        id: "co0024473",
        name: "R.P. Productions",
      },
      {
        id: "co0030304",
        name: "Heritage Films",
      },
      {
        id: "co0053177",
        name: "Studio Babelsberg",
      },
    ],
    budget: 35000000,
    grossWorldwide: 120098945,
    genres: ["Biography", "Drama", "Music"],
    isAdult: false,
    runtimeMinutes: 150,
    averageRating: 8.5,
    numVotes: 952989,
  },
  {
    id: "tt0172495",
    url: "https://www.imdb.com/title/tt0172495/",
    primaryTitle: "Gladiator",
    originalTitle: "Gladiator",
    type: "movie",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_.jpg",
    contentRating: "R",
    startYear: 2000,
    endYear: null,
    releaseDate: "2000-05-05",
    interests: [
      "Action Epic",
      "Adventure Epic",
      "Epic",
      "Period Drama",
      "Sword \u0026 Sandal",
      "Action",
      "Adventure",
      "Drama",
    ],
    countriesOfOrigin: ["US", "GB", "MT", "MA"],
    externalLinks: ["https://www.facebook.com/GladiatorMovie/"],
    spokenLanguages: ["en"],
    filmingLocations: ["Ouarzazate, Morocco"],
    productionCompanies: [
      {
        id: "co0819670",
        name: "Dreamworks Pictures",
      },
      {
        id: "co0005073",
        name: "Universal Pictures",
      },
      {
        id: "co0074212",
        name: "Scott Free Productions",
      },
    ],
    budget: 103000000,
    grossWorldwide: 465516248,
    genres: ["Action", "Adventure", "Drama"],
    isAdult: false,
    runtimeMinutes: 155,
    averageRating: 8.5,
    numVotes: 1727020,
  },
  {
    id: "tt6751668",
    url: "https://www.imdb.com/title/tt6751668/",
    primaryTitle: "Parasite",
    originalTitle: "Gisaengchung",
    type: "movie",
    description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg",
    contentRating: "R",
    startYear: 2019,
    endYear: null,
    releaseDate: "2019-11-08",
    interests: [
      "Dark Comedy",
      "Korean Drama",
      "Psychological Thriller",
      "Tragedy",
      "Drama",
      "Thriller",
    ],
    countriesOfOrigin: ["KR"],
    externalLinks: [
      "https://www.barunsonena.com/en/contents/10",
      "https://www.cjenm.com/en/featured-contents/parasite/",
    ],
    spokenLanguages: ["ko", "en"],
    filmingLocations: [
      "Jahamun-ro, Buam-dong, Jongno-gu, Seoul, South Korea",
    ],
    productionCompanies: [
      {
        id: "co0043365",
        name: "CJ Entertainment",
      },
      {
        id: "co0197091",
        name: "Barunson E\u0026A",
      },
    ],
    budget: 11400000,
    grossWorldwide: 262129969,
    genres: ["Drama", "Thriller"],
    isAdult: false,
    runtimeMinutes: 132,
    averageRating: 8.5,
    numVotes: 1030204,
  },
  {
    id: "tt0054215",
    url: "https://www.imdb.com/title/tt0054215/",
    primaryTitle: "Psycho",
    originalTitle: "Psycho",
    type: "movie",
    description:
      "A secretary on the run for embezzlement takes refuge at a secluded California motel owned by a repressed man and his overbearing mother.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BYjZhMzFiZjItODA3ZC00MmRhLWIzMGYtMmVjOWUwYTA3MTRjXkEyXkFqcGc@._V1_.jpg",
    contentRating: "R",
    startYear: 1960,
    endYear: null,
    releaseDate: "1960-09-08",
    interests: [
      "Psychological Horror",
      "Psychological Thriller",
      "Slasher Horror",
      "Suspense Mystery",
      "Horror",
      "Mystery",
      "Thriller",
    ],
    countriesOfOrigin: ["US"],
    externalLinks: null,
    spokenLanguages: ["en"],
    filmingLocations: [
      "Psycho House and Bates Motel, Backlot Universal Studios, Universal City, California, USA",
    ],
    productionCompanies: [
      {
        id: "co0137799",
        name: "Alfred J. Hitchcock Productions",
      },
      {
        id: "co0137800",
        name: "Shamley Productions",
      },
    ],
    budget: 806947,
    grossWorldwide: 32066765,
    genres: ["Horror", "Mystery", "Thriller"],
    isAdult: false,
    runtimeMinutes: 109,
    averageRating: 8.5,
    numVotes: 744032,
  },
  {
    id: "tt0110357",
    url: "https://www.imdb.com/title/tt0110357/",
    primaryTitle: "The Lion King",
    originalTitle: "The Lion King",
    type: "movie",
    description:
      "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BZGRiZDZhZjItM2M3ZC00Y2IyLTk3Y2MtMWY5YjliNDFkZTJlXkEyXkFqcGc@._V1_.jpg",
    contentRating: "G",
    startYear: 1994,
    endYear: null,
    releaseDate: "1994-06-24",
    interests: [
      "Animal Adventure",
      "Coming-of-Age",
      "Hand-Drawn Animation",
      "Jungle Adventure",
      "Adventure",
      "Animation",
      "Drama",
      "Family",
      "Fantasy",
      "Musical",
    ],
    countriesOfOrigin: ["US"],
    externalLinks: [
      "https://www.facebook.com/DisneyTheLionKing",
      "http://movies.disney.com/the-lion-king",
    ],
    spokenLanguages: ["en", "sw", "xh", "zu"],
    filmingLocations: [
      "Walt Disney Animation Studios - 2100 Riverside Drive, Burbank, California, USA",
    ],
    productionCompanies: [
      {
        id: "co0008970",
        name: "Walt Disney Pictures",
      },
      {
        id: "co0074039",
        name: "Walt Disney Animation Studios",
      },
      {
        id: "co0075995",
        name: "Walt Disney Feature Animation",
      },
    ],
    budget: 45000000,
    grossWorldwide: 981708285,
    genres: ["Adventure", "Animation", "Drama"],
    isAdult: false,
    runtimeMinutes: 88,
    averageRating: 8.5,
    numVotes: 1187215,
  },
  {
    id: "tt0095327",
    url: "https://www.imdb.com/title/tt0095327/",
    primaryTitle: "Grave of the Fireflies",
    originalTitle: "Hotaru no haka",
    type: "movie",
    description:
      "A young boy and his little sister struggle to survive in Japan during World War II.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BNTY5MmE2OGMtN2IxNC00MDY4LTkwMGEtZDUzOTYyNWE0ZTNjXkEyXkFqcGc@._V1_.jpg",
    contentRating: "Not Rated",
    startYear: 1988,
    endYear: null,
    releaseDate: "1989-07-26",
    interests: [
      "Adult Animation",
      "Anime",
      "Hand-Drawn Animation",
      "Period Drama",
      "Animation",
      "Drama",
      "War",
    ],
    countriesOfOrigin: ["JP", "US"],
    externalLinks: null,
    spokenLanguages: ["ja"],
    filmingLocations: null,
    productionCompanies: [
      {
        id: "co0057589",
        name: "Shinchosha",
      },
      {
        id: "co0048420",
        name: "Studio Ghibli",
      },
    ],
    budget: 3700000,
    grossWorldwide: 801143,
    genres: ["Animation", "Drama", "War"],
    isAdult: false,
    runtimeMinutes: 88,
    averageRating: 8.5,
    numVotes: 337762,
  },
  {
    id: "tt0407887",
    url: "https://www.imdb.com/title/tt0407887/",
    primaryTitle: "The Departed",
    originalTitle: "The Departed",
    type: "movie",
    description:
      "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg",
    contentRating: "R",
    startYear: 2006,
    endYear: null,
    releaseDate: "2006-10-06",
    interests: [
      "Cop Drama",
      "Epic",
      "Gangster",
      "Crime",
      "Drama",
      "Thriller",
    ],
    countriesOfOrigin: ["US", "HK"],
    externalLinks: null,
    spokenLanguages: ["en"],
    filmingLocations: [
      "SUNY Maritime College, Bronx, New York City, New York, USA",
    ],
    productionCompanies: [
      {
        id: "co0002663",
        name: "Warner Bros.",
      },
      {
        id: "co0136967",
        name: "Plan B Entertainment",
      },
      {
        id: "co0011877",
        name: "Initial Entertainment Group (IEG)",
      },
    ],
    budget: 90000000,
    grossWorldwide: 291481358,
    genres: ["Crime", "Drama", "Thriller"],
    isAdult: false,
    runtimeMinutes: 151,
    averageRating: 8.5,
    numVotes: 1469255,
  },
  {
    id: "tt2582802",
    url: "https://www.imdb.com/title/tt2582802/",
    primaryTitle: "Whiplash",
    originalTitle: "Whiplash",
    type: "movie",
    description:
      "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\u0027s potential.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BMmNkODhkYjctMDMyOC00ZTNjLTkwZTItM2ExMTAxMGU1ZGQ1XkEyXkFqcGc@._V1_.jpg",
    contentRating: "R",
    startYear: 2014,
    endYear: null,
    releaseDate: "2014-10-15",
    interests: ["Psychological Drama", "Drama", "Music"],
    countriesOfOrigin: ["US"],
    externalLinks: [
      "http://sonyclassics.com/whiplash/",
      "http://www.advitamdistribution.com/whiplash/",
    ],
    spokenLanguages: ["en"],
    filmingLocations: ["Santa Clarita, California, USA"],
    productionCompanies: [
      {
        id: "co0135575",
        name: "Bold Films",
      },
      {
        id: "co0098315",
        name: "Blumhouse Productions",
      },
      {
        id: "co0280848",
        name: "Right of Way Films",
      },
    ],
    budget: 3300000,
    grossWorldwide: 50360880,
    genres: ["Drama", "Music"],
    isAdult: false,
    runtimeMinutes: 106,
    averageRating: 8.5,
    numVotes: 1049956,
  },
  {
    id: "tt0120586",
    url: "https://www.imdb.com/title/tt0120586/",
    primaryTitle: "American History X",
    originalTitle: "American History X",
    type: "movie",
    description:
      "Living a life marked by violence, neo-Nazi Derek finally goes to prison after killing two black youths. Upon his release, Derek vows to change; he hopes to prevent his brother, Danny, who idolizes Derek, from following in his footsteps.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BMzhiOTQ0NDItOTg0Zi00OGVmLWE0OGEtMTI4NDM0NWMxZWU4XkEyXkFqcGc@._V1_.jpg",
    contentRating: "R",
    startYear: 1998,
    endYear: null,
    releaseDate: "1998-11-20",
    interests: ["Prison Drama", "Tragedy", "Crime", "Drama"],
    countriesOfOrigin: ["US"],
    externalLinks: [
      "https://www.facebook.com/americanhistoryxmovie/",
      "https://www.warnerbros.com/movies/american-history-x",
    ],
    spokenLanguages: ["en"],
    filmingLocations: [
      "Venice High School - 13000 Venice Boulevard, Venice, Los Angeles, California, USA",
    ],
    productionCompanies: [
      {
        id: "co0046718",
        name: "New Line Cinema",
      },
      {
        id: "co0074787",
        name: "Savoy Pictures",
      },
      {
        id: "co0023612",
        name: "The Turman-Morrissey Company",
      },
    ],
    budget: 20000000,
    grossWorldwide: 23875714,
    genres: ["Crime", "Drama"],
    isAdult: false,
    runtimeMinutes: 119,
    averageRating: 8.5,
    numVotes: 1219294,
  },
  {
    id: "tt0056058",
    url: "https://www.imdb.com/title/tt0056058/",
    primaryTitle: "Harakiri",
    originalTitle: "Seppuku",
    type: "movie",
    description:
      "When a ronin requesting seppuku at a feudal lord\u0027s palace is told of the brutal suicide of another ronin who previously visited, he reveals how their pasts are intertwined - and in doing so challenges the clan\u0027s integrity.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BZThiZjU5ZDQtZDI4Mi00ZGYyLTkzOTktYmIzZTFlZTkxYzg5XkEyXkFqcGc@._V1_.jpg",
    contentRating: "Not Rated",
    startYear: 1962,
    endYear: null,
    releaseDate: "1964-08-04",
    interests: ["Period Drama", "Drama", "Mystery"],
    countriesOfOrigin: ["JP"],
    externalLinks: null,
    spokenLanguages: ["ja"],
    filmingLocations: ["Kyoto, Kyoto, Japan"],
    productionCompanies: [
      {
        id: "co0007001",
        name: "Shochiku",
      },
    ],
    budget: null,
    grossWorldwide: 15222,
    genres: ["Drama", "Mystery"],
    isAdult: false,
    runtimeMinutes: 133,
    averageRating: 8.6,
    numVotes: 77015,
  },
  {
    id: "tt0482571",
    url: "https://www.imdb.com/title/tt0482571/",
    primaryTitle: "The Prestige",
    originalTitle: "The Prestige",
    type: "movie",
    description:
      "Rival 19th-century magicians engage in a bitter battle for trade secrets.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg",
    contentRating: "PG-13",
    startYear: 2006,
    endYear: null,
    releaseDate: "2006-10-20",
    interests: [
      "Period Drama",
      "Steampunk",
      "Tragedy",
      "Drama",
      "Mystery",
      "Sci-Fi",
      "Thriller",
    ],
    countriesOfOrigin: ["GB", "US"],
    externalLinks: null,
    spokenLanguages: ["en"],
    filmingLocations: [
      "Durango and Silverton Narrow Gauge Railroad, Colorado, USA",
    ],
    productionCompanies: [
      {
        id: "co0049348",
        name: "Touchstone Pictures",
      },
      {
        id: "co0002663",
        name: "Warner Bros.",
      },
      {
        id: "co0129644",
        name: "Newmarket Films",
      },
    ],
    budget: 40000000,
    grossWorldwide: 109676311,
    genres: ["Drama", "Mystery", "Sci-Fi"],
    isAdult: false,
    runtimeMinutes: 130,
    averageRating: 8.5,
    numVotes: 1494064,
  },
  {
    id: "tt0110413",
    url: "https://www.imdb.com/title/tt0110413/",
    primaryTitle: "L\u00e9on: The Professional",
    originalTitle: "L\u00e9on",
    type: "movie",
    description:
      "12-year-old Mathilda is reluctantly taken in by L\u00e9on, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his prot\u00e9g\u00e9e and learns the assassin\u0027s trade.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BNGRkYTNhOWQtYmI0Ni00MjZhLWJmMzAtMTA2Mjg4NGNiNDU0XkEyXkFqcGc@._V1_.jpg",
    contentRating: "R",
    startYear: 1994,
    endYear: null,
    releaseDate: "1994-11-18",
    interests: [
      "Gangster",
      "One-Person Army Action",
      "Action",
      "Crime",
      "Drama",
      "Thriller",
    ],
    countriesOfOrigin: ["FR", "US"],
    externalLinks: ["https://leon.officialwebsite.art/"],
    spokenLanguages: ["en", "it", "fr"],
    filmingLocations: ["Paris, France"],
    productionCompanies: [
      {
        id: "co0050868",
        name: "Columbia Pictures",
      },
      {
        id: "co0172053",
        name: "Gaumont",
      },
      {
        id: "co0008826",
        name: "Les Films du Dauphin",
      },
    ],
    budget: 16000000,
    grossWorldwide: 20278356,
    genres: ["Action", "Crime", "Drama"],
    isAdult: false,
    runtimeMinutes: 110,
    averageRating: 8.5,
    numVotes: 1288381,
  },
  {
    id: "tt9362722",
    url: "https://www.imdb.com/title/tt9362722/",
    primaryTitle: "Spider-Man: Across the Spider-Verse",
    originalTitle: "Spider-Man: Across the Spider-Verse",
    type: "movie",
    description:
      "Miles Morales catapults across the multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_.jpg",
    contentRating: "PG",
    startYear: 2023,
    endYear: null,
    releaseDate: "2023-06-02",
    interests: [
      "Computer Animation",
      "Superhero",
      "Supernatural Fantasy",
      "Teen Adventure",
      "Urban Adventure",
      "Action",
      "Adventure",
      "Animation",
      "Family",
      "Fantasy",
    ],
    countriesOfOrigin: ["US"],
    externalLinks: ["https://www.acrossthespiderverse.movie/"],
    spokenLanguages: ["en"],
    filmingLocations: null,
    productionCompanies: [
      {
        id: "co0050868",
        name: "Columbia Pictures",
      },
      {
        id: "co0047120",
        name: "Marvel Entertainment",
      },
      {
        id: "co0180492",
        name: "Avi Arad Productions",
      },
    ],
    budget: 150000000,
    grossWorldwide: 690824738,
    genres: ["Action", "Adventure", "Animation"],
    isAdult: false,
    runtimeMinutes: 140,
    averageRating: 8.5,
    numVotes: 433920,
  },
  {
    id: "tt0034583",
    url: "https://www.imdb.com/title/tt0034583/",
    primaryTitle: "Casablanca",
    originalTitle: "Casablanca",
    type: "movie",
    description:
      "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BNWEzN2U1YTYtYTQyMS00NTVkLWE2NGQtZWFlMmM0MDNjMmRiXkEyXkFqcGc@._V1_.jpg",
    contentRating: "PG",
    startYear: 1942,
    endYear: null,
    releaseDate: "1943-01-23",
    interests: ["Drama", "Romance", "War"],
    countriesOfOrigin: ["US"],
    externalLinks: ["https://www.facebook.com/CasablancaTheMovie"],
    spokenLanguages: ["en", "fr", "de", "it", "ru"],
    filmingLocations: [
      "Waterman Drive, Van Nuys, Los Angeles, California, USA",
    ],
    productionCompanies: [
      {
        id: "co0002663",
        name: "Warner Bros.",
      },
    ],
    budget: 950000,
    grossWorldwide: 4720495,
    genres: ["Drama", "Romance", "War"],
    isAdult: false,
    runtimeMinutes: 102,
    averageRating: 8.5,
    numVotes: 624890,
  },
  {
    id: "tt0114814",
    url: "https://www.imdb.com/title/tt0114814/",
    primaryTitle: "The Usual Suspects",
    originalTitle: "The Usual Suspects",
    type: "movie",
    description:
      "The sole survivor of a pier shoot-out tells the story of how a notorious criminal influenced the events that began with five criminals meeting in a seemingly random police lineup.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BOTE5MDUxZDUtZWZmZC00NDVmLWFhOGQtNWI2YTc4NzY3MGQ0XkEyXkFqcGc@._V1_.jpg",
    contentRating: "R",
    startYear: 1995,
    endYear: null,
    releaseDate: "1995-08-16",
    interests: [
      "Gangster",
      "Heist",
      "Psychological Drama",
      "Psychological Thriller",
      "Suspense Mystery",
      "Whodunnit",
      "Crime",
      "Drama",
      "Mystery",
      "Thriller",
    ],
    countriesOfOrigin: ["US", "DE"],
    externalLinks: ["https://www.facebook.com/usualsuspectsmovie/"],
    spokenLanguages: ["en", "hu", "es", "fr"],
    filmingLocations: [
      "Korean Friendship Bell, Angel\u0027s Gate Park - 3601 Gaffey Street, San Pedro, Los Angeles, California, USA",
    ],
    productionCompanies: [
      {
        id: "co0106129",
        name: "PolyGram Filmed Entertainment",
      },
      {
        id: "co0033402",
        name: "Spelling Films International",
      },
      {
        id: "co0082030",
        name: "Blue Parrot",
      },
    ],
    budget: 6000000,
    grossWorldwide: 23341568,
    genres: ["Crime", "Drama", "Mystery"],
    isAdult: false,
    runtimeMinutes: 106,
    averageRating: 8.5,
    numVotes: 1177341,
  },
  {
    id: "tt1675434",
    url: "https://www.imdb.com/title/tt1675434/",
    primaryTitle: "The Intouchables",
    originalTitle: "Intouchables",
    type: "movie",
    description:
      "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_.jpg",
    contentRating: "R",
    startYear: 2011,
    endYear: null,
    releaseDate: "2011-11-02",
    interests: ["Docudrama", "Comedy", "Drama"],
    countriesOfOrigin: ["FR"],
    externalLinks: [
      "https://www.facebook.com/theintouchables",
      "https://myflixer.life/",
    ],
    spokenLanguages: ["fr", "en"],
    filmingLocations: ["Cabourg, Calvados, France"],
    productionCompanies: [
      {
        id: "co0093197",
        name: "Quad",
      },
      {
        id: "co0387248",
        name: "Ten Films",
      },
      {
        id: "co0028557",
        name: "Canal+",
      },
    ],
    budget: 9500000,
    grossWorldwide: 426590315,
    genres: ["Comedy", "Drama"],
    isAdult: false,
    runtimeMinutes: 112,
    averageRating: 8.5,
    numVotes: 964743,
  },
  {
    id: "tt0095765",
    url: "https://www.imdb.com/title/tt0095765/",
    primaryTitle: "Cinema Paradiso",
    originalTitle: "Nuovo Cinema Paradiso",
    type: "movie",
    description:
      "Salvatore, a famous film director, returns to his hometown for the funeral of the local theater\u0027s film projectionist, Alfredo. He reminisces about his life as a young boy falling in love with cinema.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BMTljNzc4YWEtYTZlMS00ODMyLWIwMTAtNWQxY2VkMDEwYTk5XkEyXkFqcGc@._V1_.jpg",
    contentRating: "PG",
    startYear: 1988,
    endYear: null,
    releaseDate: "1990-02-23",
    interests: ["Coming-of-Age", "Drama", "Romance"],
    countriesOfOrigin: ["IT", "FR"],
    externalLinks: [
      "https://www.facebook.com/CinemaParadisoMovie",
      "http://www.miramax.com/movie/cinema-paradiso",
    ],
    spokenLanguages: ["it"],
    filmingLocations: ["Cefal\u00f9, Palermo, Sicily, Italy"],
    productionCompanies: [
      {
        id: "co0013358",
        name: "Cristaldifilm",
      },
      {
        id: "co0042444",
        name: "Les Films Ariane",
      },
      {
        id: "co0009359",
        name: "Rai 3",
      },
    ],
    budget: 5000000,
    grossWorldwide: 13020497,
    genres: ["Drama", "Romance"],
    isAdult: false,
    runtimeMinutes: 174,
    averageRating: 8.5,
    numVotes: 296730,
  }]);

  const [activeItem, setActiveItem] = useState(data[1]);
  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0]);
    }
  };
  const smt = () => {
    createUser();
  };

  const zoomIn = {
    0: {
      scale: 0.9,
    },
    1: {
      scale: 1.2,
    },
  };

  const zoomOut = {
    0: {
      scale: 1.2,
    },
    1: {
      scale: 0.9,
    },
  };

  const VideoItem = ({ activeItem, item }) => {
    return (
      <Animatable.View
        animation={activeItem.key === item.id ? zoomIn : zoomOut}
        duration={500}
        className="justify-center items-center ml-10 "
        key={item.id}
      >
        
          <ImageBackground
          source={{
            uri: item?.primaryImage ? item?.primaryImage : data[0].primaryImage,
          }}
          className="w-72 h-96 rounded-[30px] overflow-hidden shadow-lg shadow-black/40 border-2 border-white"
          resizeMode="cover"
        />
        <View className="text-start w-72 mt-2 flex bg-black/20 rounded-lg p-2">
        <View className="w-full flex-row justify-between mb-2 ">
                <Text className="text-end justify-end text-white text-sm">
                {item?.genres.map((i, index) => (
                  <Text key={index} className="text-white">{i}, </Text>
                ))}
            </Text>
        <Text className="text-white"><FontAwesome name="star" size={12} color="gold" /> {item?.averageRating}/10</Text>
        
        </View>
        <Text className="text-white mb-2 text-xl font-bold">{item?.primaryTitle}</Text>
        <View className="h-[120px] w-full ">
            <ScrollView>
            <Text  className="text-white text-sm">{item?.description}</Text>
        </ScrollView>
        </View>
        <View className="text-center items-center justify-center">
        <TouchableOpacity  onPress={() => {
           router.push({
            pathname: "/detailsMovies/[id]",
            params: { id: item.id, data: JSON.stringify(item) }, // Pass the item data
          });
        }} 
         className="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><Text className="text-center">View more</Text></TouchableOpacity>
        </View>
        </View>
        
      </Animatable.View>
    );
  };

  return (
    <>
      <ImageBackground
        source={{ uri: activeItem?.item?.primaryImage }}
        className="flex-1 justify-center items-center brightness-50"
      >
        <View className="absolute top-0 left-0 w-full h-full bg-black/70" />
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <VideoItem activeItem={activeItem} item={item} />
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 70,
          }}
          contentOffset={{ x: 160 }}
          horizontal
        //   className={`bg-[${activeItem.primaryImage}]`}
        
        />
      </ImageBackground>
      {/* <Text className="text-6xl">index</Text>
      <TouchableOpacity onPress={() => smt()}>
        <Text>Click </Text>
      </TouchableOpacity>
      <Link href="/profile" style={{ color: "blue" }}>
        Go profile
      </Link> */}
      <StatusBar style="light" />
    </>
  );
};

export default App;
