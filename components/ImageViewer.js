import { StyleSheet } from "react-native-web";
import { View, Image } from "react-native";
export default function ImageViewer ({placeholderImage, selectedImage}) {
  const imageSource = selectedImage ? {uri: selectedImage} : placeholderImage;
 
 
    return (
        <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
        </View>
    );
}
const styles = StyleSheet.create({
    imageContainer: {
      flex: 1,
      paddingTop: 58,
    },
    image: {
      width: 320,
      height: 440,
      borderRadius: 18,
    },
  });
  