import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';


export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>De domingueo con los compas.</Text>

      <View style={styles.separator} lightColor="#eef" darkColor="rgba(255,255,255,0.1)" />   
      <Image 
        source={{ uri: "https://culturainquieta.com/images/articles/Manny_the_Cat_Takes_Selfies_for_Him_and_His_Dogs/selfie_cat_with_gopro_camera.jpg" }}
        style={styles.image}>
      </Image>
      <View style={styles.separator} lightColor="#eef" darkColor="rgba(255,255,255,0.1)" />
      <TouchableOpacity
        onPress={() => alert('Muy bien, has aprendido a pulsar un boton.')}
        style={styles.button}>
        <Text style={styles.buttonText}>Pulsame</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    width: 305,
    height: 300,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',    
  }
});