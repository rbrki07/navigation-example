// @ts-check
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DetailScreen = ({ route, navigation }) => {
  const { id } = route.params;
  console.log('Received parameter "id" with value', id);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => console.log('on press')}>
          <Text style={styles.icon}>{'ⓘ'}</Text>
        </TouchableOpacity>
      )
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text>Detail-Screen</Text>
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
  icon: { 
    color: '#fff', fontSize: 20 
  }
});

export { DetailScreen }