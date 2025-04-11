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

