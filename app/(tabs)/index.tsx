import { StyleSheet, View } from 'react-native';
import ImageViewer from '../../app-example/components/ImageViewer';
import Button from '../../app-example/components/Button'
import { green } from 'react-native-reanimated/lib/typescript/Colors';
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';

const PlaceholderImage = require('../../assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined)

  async function pickImageAsync() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri)
    } else {
      alert('Bruh you did not select any image')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
      </View>
       <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo"  onPress={pickImageAsync}/>
        <Button theme="primary" label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(32, 40, 49, 1)',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center',
  }
});




