// @ts-check
import React from "react";
import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './components/HomeScreen';
import { DetailScreen } from './components/DetailScreen';

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#D9D9D9', // Used to tint various elements.
    card: '#284B63', // The background color of card-like elements, such as headers, tab bars etc.
    text: '#FFFFFF' // The text color of various elements.
  }
}

const NativeStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={customTheme}>
      <NativeStack.Navigator initialRouteName={'Home'} screenOptions={{ headerTitleStyle: { fontWeight: '300' } }}>
        <NativeStack.Screen name={'Home'} component={HomeScreen} options={{ title: 'Home-Screen' }}/>
        <NativeStack.Screen name={'Detail'} component={DetailScreen} options={{ title: 'Detail-Screen' }}/>
      </NativeStack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}