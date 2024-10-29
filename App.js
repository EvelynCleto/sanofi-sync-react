import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';


const Stack = createStackNavigator();

export default function App() {
  console.log("App.js carregado"); // Log para verificar se o App está sendo carregado corretamente

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Sanofi Sync" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
