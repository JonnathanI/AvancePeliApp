import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, Platform } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navegation/StackNavigator';
import { FilmContext } from '../context/FilmContext';

type FilmDetailsScreenRouteProp = RouteProp<RootStackParamList, 'FilmDetails'>;

const FilmDetailsScreen: React.FC = () => {
  const route = useRoute<FilmDetailsScreenRouteProp>();
  const navigation = useNavigation();
  const filmId = route.params.filmId;
  const filmContext = useContext(FilmContext);

  if (!filmContext) {
    return null; // O maneja el error de contexto no definido
  }

  const { films } = filmContext;
  const film = films.find(film => film.id === filmId);

  if (!film) {
    return <Text>Film not found</Text>; // O maneja el error de film no encontrado
  }

  return (
    <ImageBackground 
      source={require('../assets/Dashboard.gif')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{film.title}</Text>
        <Text style={styles.subtitle}>Director: {film.director}</Text>
        <Text style={styles.subtitle}>Time: {film.time}</Text>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#CCCCCC',
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});

export default FilmDetailsScreen;
