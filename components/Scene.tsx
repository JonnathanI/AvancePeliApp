import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ListRenderItem } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navegation/StackNavigator';

type Scene = {
  id: string;
  description: string;
  cost: string;
  stock: string;
};

const initialScenes: Scene[] = [
  { id: '1', description: 'Scene 1', cost: 'Cost 1', stock: 'Stock 1' },
  { id: '2', description: 'Scene 2', cost: 'Cost 2', stock: 'Stock 2' },
  { id: '3', description: 'Scene 3', cost: 'Cost 3', stock: 'Stock 3' },
];

type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

const DashboardScene: React.FC = () => {
  const navigation = useNavigation<DashboardScreenNavigationProp>();
  const [scenes, setScenes] = useState<Scene[]>(initialScenes);

  const addScene = () => {
    const newScene = {
      id: (scenes.length + 1).toString(),
      description: `Scene ${scenes.length + 1}`,
      cost: `Cost ${scenes.length + 1}`,
      stock: `Stock ${scenes.length + 1}`,
    };
    setScenes([...scenes, newScene]);
  };

  const editScene = (id: string) => {
    // Implementa la lógica para editar la escena con el id especificado
    console.log(`Edit scene with id: ${id}`);
  };

  const deleteScene = (id: string) => {
    setScenes(scenes.filter(scene => scene.id !== id));
  };

  const renderItem: ListRenderItem<Scene> = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Characters')}>
      <View style={styles.card}>
        <View>
          <Text style={styles.cardTitle}>{item.description}</Text>
          <Text style={styles.cardSubtitle}>{item.cost}</Text>
          <Text style={styles.cardSubtitle}>{item.stock}</Text>
        </View>
        <View style={styles.cardActions}>
          <TouchableOpacity onPress={() => editScene(item.id)}>
            <MaterialIcons name="edit" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteScene(item.id)}>
            <MaterialIcons name="delete" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>FILM 1</Text>
      <Text style={styles.subHeader}>SCENES</Text>
      <FlatList
        data={scenes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.fab} onPress={addScene}>
        <MaterialIcons name="add" size={24} color="white" />
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
  },
  subHeader: {
    fontSize: 20,
    color: '#A62948',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 80,
  },
  card: {
    backgroundColor: '#800F2F',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#CCCCCC',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 50,
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
});

export default DashboardScene;
