import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

const movies = [
  { id: '1', title: 'Inception' },
  { id: '2', title: 'The Dark Knight' },
  { id: '3', title: 'Interstellar' },
  { id: '4', title: 'Avatar' },
  { id: '5', title: 'The Matrix' },
  { id: '6', title: 'Titanic' },
];

const SearchScreen = () => {
  const [query, setQuery] = useState('');

  const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for movies..."
        placeholderTextColor="#ccc"
        value={query}
        onChangeText={setQuery}
      />
      <FlatList
        data={filteredMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.movieCard}>
            <Text style={styles.movieTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};













































