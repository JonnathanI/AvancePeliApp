import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navegation/StackNavigator';
import api from '../api';

type CreateCharacterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreateCharacter'>;

const CreateCharacterScreen: React.FC = () => {
  const navigation = useNavigation<CreateCharacterScreenNavigationProp>();
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [duration, setDuration] = useState('');

  const handleCreateCharacter = async () => {
    try {
      await api.post('/film', { title, director, duration: parseInt(duration) }); // Asegúrate de que 'duration' sea un número
      navigation.goBack();
    } catch (error) {
      console.error('Error creating film:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>FILMS</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="title"
          placeholderTextColor="#FFFFFF"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="duration"
          placeholderTextColor="#FFFFFF"
          value={duration}
          onChangeText={setDuration}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="director"
          placeholderTextColor="#FFFFFF"
          value={director}
          onChangeText={setDirector}
        />
        <TouchableOpacity style={styles.button} onPress={handleCreateCharacter}>
          <Text style={styles.buttonText}>Create Film</Text> {/* Cambiado a 'Create Film' */}
        </TouchableOpacity>
      </View>
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
    textAlign: 'center',
    marginBottom: 40,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#800F2F',
    color: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#A62948',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateCharacterScreen;
