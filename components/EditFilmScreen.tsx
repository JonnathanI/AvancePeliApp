import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navegation/StackNavigator';
import api from '../api';

type EditFilmScreenRouteProp = RouteProp<RootStackParamList, 'EditFilm'>;

const EditFilmScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<EditFilmScreenRouteProp>();

  const { filmId } = route.params;

  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await api.get(`/films/${filmId}`);
        const film = response.data;
        setTitle(film.title);
        setDirector(film.director);
        setTime(film.time);
      } catch (error) {
        console.error('Error fetching film:', error);
      }
    };

    fetchFilm();
  }, [filmId]);

  const handleSave = async () => {
    try {
      await api.put(`/films/${filmId}`, { title, director, time });
      navigation.goBack();
    } catch (error) {
      console.error('Error updating film:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Film</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        placeholderTextColor="#CCCCCC"
      />
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          value={time}
          onChangeText={setTime}
          placeholder="Time"
          placeholderTextColor="#CCCCCC"
        />
        <TextInput
          style={styles.input}
          value={director}
          onChangeText={setDirector}
          placeholder="Director"
          placeholderTextColor="#CCCCCC"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4C0A2A',
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#800F2F',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    color: '#FFFFFF',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#A62948',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditFilmScreen;
