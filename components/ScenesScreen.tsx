// src/components/ScenesScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScenesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Scenes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ScenesScreen;
