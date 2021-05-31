import React, { useState } from 'react';
import {
  StyleSheet, View, Button, Platform,
} from 'react-native';
import { Overlay } from 'react-native-elements';
import Modal from 'modal-react-native-web';
import CreateRoom from './admin/Rooms/CreateRoom';

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Playfair',
    paddingBottom: 10,
  },
});

const Rooms = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Button title="Open Overlay" onPress={toggleOverlay} />
      {
        Platform.OS === 'android'
          ? (
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
              <CreateRoom />
            </Overlay>
          ) : (
            <Overlay
              isVisible={visible}
              ModalComponent={Modal}
              onBackdropPress={toggleOverlay}
              ariaHideApp={false}
            >
              <CreateRoom />
            </Overlay>
          )
      }
    </View>
  );
};

export default Rooms;
