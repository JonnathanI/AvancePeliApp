// src/App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navegation/StackNavigator';
import { FilmProvider } from './context/FilmContext';

const App: React.FC = () => {
  return (
    <FilmProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </FilmProvider>
  );
};

export default App;
