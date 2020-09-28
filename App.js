
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/Navigation/Main';

const App = () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>

  );
};

export default App;
