import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {RNCamera} from 'react-native-camera';

const LoaderView = () => {
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <ActivityIndicator />
  </View>;
};
export default function App() {
  const [image, setImage] = useState(null);

  const takePicture = async (camera) => {
    try {
      const options = {quality: 0.9, base64: false};
      const data = await camera.takePictureAsync(options);
      setImage(data.uri);
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <View>
      <Text>Camera App</Text>
    </View>
  );
}
