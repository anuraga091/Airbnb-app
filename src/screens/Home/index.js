import { ImageBackground,Dimensions, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = () => {

  const handlePress = () => {
    console.log("I was pressed")
  }
  const handleSearch = () => {
    console.log("you have pressed search button")
  }
  return (
    <View>
      <Pressable style={styles.searchButton} onPress={handleSearch}><Fontisto name="search" size={25} color={"#f15454"} /><Text style={styles.searchButtonText}>Where are you going</Text></Pressable>
      <ImageBackground source={require("../../assets/images/wallpaper.jpg")} style={styles.image}>
      <Text style={styles.title}>Go Near</Text>
      <Pressable style={styles.button} onPress={handlePress}><Text style={styles.buttonText}>Explore nearby place</Text></Pressable>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25

  },
  button: {
    backgroundColor: "#fff",
    width: 200,
    marginLeft: 25,
    marginTop: 25,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold"
  },
  searchButton: {
    backgroundColor: "#fff",
    width: Dimensions.get('screen').width - 20,
    marginLeft: 10,
    height: 40,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    top: 30,
    zIndex: 100,

  },
  searchButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10
  }
}) 