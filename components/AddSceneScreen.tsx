import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navegation/StackNavigator';

type AddSceneScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddScene'>;

const AddSceneScreen: React.FC = () => {
  const navigation = useNavigation<AddSceneScreenNavigationProp>();
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');
  const [stock, setStock] = useState('');

  const handleAddScene = () => {
    // Implementa la lógica para agregar una nueva escena
    console.log('New scene added:', { description, cost, stock });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />
      <Text style={styles.label}>Cost</Text>
      <TextInput
        style={styles.input}
        value={cost}
        onChangeText={setCost}
      />
      <Text style={styles.label}>Stock</Text>
      <TextInput
        style={styles.input}
        value={stock}
        onChangeText={setStock}
      />
      <Button title="Add Scene" onPress={handleAddScene} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default AddSceneScreen;
