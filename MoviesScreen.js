import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';

const movies = [
  { id: '1', title: 'Inception', poster: 'https://path/to/inception-poster.jpg', description: 'A mind-bending thriller.' },
  { id: '2', title: 'The Dark Knight', poster: 'https://path/to/dark-knight-poster.jpg', description: 'A dark and thrilling Batman story.' },
  { id: '3', title: 'Interstellar', poster: 'https://path/to/interstellar-poster.jpg', description: 'A sci-fi epic exploring space.' },
  { id: '4', title: 'Avatar', poster: 'https://path/to/avatar-poster.jpg', description: 'A visual masterpiece in the world of Pandora.' },
];

const MoviesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.movieCard}
            onPress={() => navigation.navigate('MovieDetail', { movieId: item.id })}
          >
            <Image source={{ uri: item.poster }} style={styles.poster} />
            <Text style={styles.movieTitle}>{item.title}</Text>
            <Text style={styles.movieDescription}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  movieCard: {
    backgroundColor: '#333',
    margin: 15,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  