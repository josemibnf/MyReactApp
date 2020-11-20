import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';

import * as ImagePicker from 'expo-image-picker';

export default function TabTwoScreen() {

  // Hook for take images from local.
  const [selectedImage, setSelectedImage] = React.useState({});

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ 'localUri' : pickerResult.uri });
  }

  if ( 'localUri' in  selectedImage ){
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage['localUri'] }}
          style={styles.thumbnail}
        />
      </View>
    );
    }
  
  else{
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Aqui con la parienta</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Image 
          source={{ uri: "https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/40485073_1097988717035650_8968149321891446784_n.jpg?_nc_cat=111&ccb=2&_nc_sid=8024bb&_nc_ohc=PymzbM9fe8IAX-iAcp7&_nc_ht=scontent-mad1-1.xx&oh=923781ec2941fe3b1a89e5e965552a2a&oe=5FDF03B2" }}
          style={styles.image}>
        </Image>
        <View style={styles.separator} lightColor="#eef" darkColor="rgba(255,255,255,0.1)" />
        <TouchableOpacity
          onPress={openImagePickerAsync}
          style={styles.button}>
          <Text style={styles.buttonText}>ESTO SON TUS FOTOS...</Text>
        </TouchableOpacity>
      </View>
    );
  }
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    width: 305,
    height: 159,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',    
  },
  thumbnail: {}
});
