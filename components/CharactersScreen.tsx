import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ListRenderItem } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navegation/StackNavigator';


type Characters = {
    id: string;
    director: string;
    description: string;
    cost: string;
    stock: string;
  };

  const characters:Characters[]=[
    {id: '1', director:'Director' ,description:'Character ', cost:'Cost 1',stock:'Stock 1'},
    {id: '2',director:'Director' ,description:'Character', cost:'Cost 2',stock:'Stock 2'},
    {id: '3', director:'Director',description:'Character', cost:'Cost 3',stock:'Stock 3'},
  ]

  type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

  const DashboardCharacter: React.FC =()=>{
    const navigation = useNavigation<DashboardScreenNavigationProp>();

    const renderItem: ListRenderItem<Characters> = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Scenes')}>
          <View style={styles.card}>
            <View>
              <Text style={styles.cardTitle}>{item.description}</Text>
              <Text style={styles.cardSubtitle}>{item.director}</Text>
              <Text style={styles.cardSubtitle}>{item.description}</Text>
            </View>
            <View style={styles.cardActions}>
              <TouchableOpacity>
                <MaterialIcons name="edit" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons name="delete" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      );

      return(

        <View style={styles.container}>
        <Text style={styles.header}>Scene 1</Text>
        <Text style={styles.subHeader}>CHARACTER</Text>
        <FlatList
          data={characters}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
        />
        <TouchableOpacity style={styles.fab}>
          <MaterialIcons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    );

  }

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

  export default DashboardCharacter;