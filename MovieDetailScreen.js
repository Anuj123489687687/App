import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const MovieDetailScreen = ({ route }) => {
  const { movieId } = route.params;
  const movie = {
    id: movieId,
    title: 'Inception',
    description: 'A mind-bending thriller directed by Christopher Nolan.',
    poster: 'https://path/to/inception-poster.jpg',
    director: 'Christopher Nolan',
    releaseDate: '2010-07-16',
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.poster }} style={styles.poster} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.description}>{movie.description}</Text>
      <Text style={styles.details}>Director: {movie.director}</Text>
      <Text style={styles.details}>Release Date: {movie.releaseDate}</Text>
      <Button title="Add to Favorites" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 20,
  },
  poster: {
    width: '100%',
    height: 250,
    borderRadius: 8,
  },
  