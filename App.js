
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/Navigation/Main';
// Provider bind react with redux ;
import { Provider } from 'react-redux';
import store from './src/Components/Redux/store'; 
import MyCarousel from './src/3D Slider/Carousel';


const App = () => {

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Close Splash Screen
    SplashScreen.hide();
  });

  return (
    <Provider store={store}>
    <NavigationContainer>
      {/* <Main /> */}
      <MyCarousel />
    </NavigationContainer>
    </Provider>
  );
};

export default App;
