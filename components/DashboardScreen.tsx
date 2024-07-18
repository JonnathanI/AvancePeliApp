import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ListRenderItem, ImageBackground, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navegation/StackNavigator';
import { FilmContext } from '../context/FilmContext';

type Film = {
  id: string;
  title: string;
  director: string;
  time: string;
};

type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

const DashboardScreen: React.FC = () => {
  const navigation = useNavigation<DashboardScreenNavigationProp>();
  const filmContext = useContext(FilmContext);

  if (!filmContext) {
    return null; // O maneja el error de contexto no definido
  }

  const { films } = filmContext;

  const renderItem: ListRenderItem<Film> = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Scenes')}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardSubtitle}>{item.director}</Text>
          <Text style={styles.cardSubtitle}>{item.time}</Text>
        </View>
        <View style={styles.cardActions}>
          <TouchableOpacity onPress={() => navigation.navigate('FilmDetails', { filmId: item.id })}>
            <MaterialIcons name="visibility" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('EditFilm', { filmId: item.id })}>
            <MaterialIcons name="edit" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="delete" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground 
      source={require('../assets/Dashboard.gif')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.header}>DASHBOARD</Text>
        <Text style={styles.subHeader}>FILMS</Text>
        <FlatList
          data={films}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
        />
        <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('CreateCharacter')}>
          <MaterialIcons name="add" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 22,
    color: '#A62948',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  card: {
    backgroundColor: 'rgba(128, 15, 47, 0.7)', // Color de fondo con opacidad
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#CCCCCC',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 120,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#800F2F',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
 
  }
});

export default DashboardScreen;
