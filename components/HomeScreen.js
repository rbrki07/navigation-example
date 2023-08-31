// @ts-check
import React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home-Screen</Text>
      <Button onPress={() => navigation.navigate('Detail', { id: 42 })} title={'Go to Detail-Screen'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { HomeScreen }