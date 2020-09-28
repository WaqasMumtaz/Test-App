import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../Components/Auth/Login';
import Signup from '../../Components/Auth/Signup';

const Stack = createStackNavigator();

const Main=()=>{
    return (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
          </Stack.Navigator>
      );
}

export default Main;