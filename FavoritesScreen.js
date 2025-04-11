import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const favoriteMovies = [
  { id: '1', title: 'Inception', poster: 'https://path/to/inception-poster.jpg' },
  { id: '2', title: 'The Dark Knight', poster: 'https://path/to/dark-knight-poster.jpg' },
  { id: '3', title: 'Interstellar', poster: 'https://path/to/interstellar-poster.jpg' },
];

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState(favoriteMovies);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(movie => movie.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Favorites</Text>
      {favorites.length === 0 ? (
        <Text style={styles.noFavorites}>No favorite movies yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.movieCard}>
              <Image source={{ uri: item.poster }} style={styles.poster} />
              <Text style={styles.movieTitle}>{item.title}</Text>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeFavorite(item.id)}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 15,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  noFavorites: {
    color: '#ccc',
    fontSize: 18,
    textAlign: 'center',
  },
  