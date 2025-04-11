import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <ImageBackground source={{ uri: 'https://path/to/your/background-image.jpg' }} style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.title}>🎬 Welcome to MovieFlix!</Text>
        <Text style={styles.subtitle}>Browse trending movies now and explore the best of cinema.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Watching</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#ccc',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FF4500',
    padding: 15,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
