
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer , createSwitchNavigator } from '@react-navigation/native';
import Main from './src/Navigation/Main';


const App = () => {

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Close Splash Screen
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>

  );
};

export default App;
