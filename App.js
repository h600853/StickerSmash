import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import IconButton from './components/IconButton';
import CircleButton from './components/CircleButton';
import EmojiPicker from './components/EmojiPicker';
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';

const placeholderImage = require('./assets/background-image.png');
export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setSelectedEmoji] = useState(false);

  const ImagePickerAsync = async () => {
  let res = await ImagePicker.launchImageLibraryAsync({allowsEditing: true, quality: 1}); 
    if(!res.canceled) {
      setSelectedImage(res.assets[0].uri); 
      
    } else {
      alert('You did not select an image.')
    }
}
const onReset = () => {
setShowAppOptions(false);
setSelectedEmoji(false); 
}
const onAddSticker = () => {
setIsModalVisible(true); 
};
const onModalClose = () => {
setIsModalVisible(false); 
}
const onSaveImageAsync = async () => {
};

  return (
    <View style={styles.container}>
      <ImageViewer placeholderImage={placeholderImage} selectedImage={selectedImage} />
      {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      {showAppOptions ? ( 
      <View style={styles.optionsContainer}>
        <View style = {styles.optionsRow}>
        <IconButton icon="refresh" label="Reset" onPress={onReset} />
        <CircleButton onPress={onAddSticker} />
        <IconButton icon="save-alt" label={'Save'} onPress={onSaveImageAsync} />
        </View>
      </View>  ) 
      :(
        <View style={styles.footerContainer}>
        <Button label={'Choose a foto'} theme="primary" onPress={ImagePickerAsync} />
        <Button label={'Use this photo'} onPress={() => setShowAppOptions(true)} />
      </View>
      )}
        <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setSelectedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
}); 


