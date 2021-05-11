import React, { useState } from 'react';
import {
  View, StyleSheet, TouchableOpacity, Text,
} from 'react-native';
import { TextInput, HelperText, Avatar } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const defaultAvatar = require('../../../assets/defaultAvatar.png');

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    fontFamily: 'Playfair',
  },
  inputText: {
    color: 'white',
    fontFamily: 'Playfair',
  },
  button: {
    backgroundColor: '#1F3B3F',
    borderRadius: 25,
    height: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    fontSize: 30,
  },
  pictureStyle: {
    backgroundColor: 'white',
    borderRadius: 0,
    borderColor: 'transparent',
  },
});

const SignUpScreen = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const emailValidation = () => !user.email.includes('@');

  return (
    <View style={styles.containerView}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        extraScrollHeight={40}
      >

        <Avatar.Image size={100} source={defaultAvatar} style={styles.pictureStyle} />

        <TextInput
          style={styles.input}
          label="Email"
          value={user.email}
          onChangeText={(email) => setUser({ ...user, email })}
        />
        {user.email && emailValidation() ? (
          <HelperText type="error" visible={emailValidation()}>
            Email address is invalid!
          </HelperText>
        ) : null}

        <TextInput
          style={styles.input}
          label="Password"
          secureTextEntry
          value={user.password}
          onChangeText={(password) => setUser({ ...user, password })}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.inputText}>
            Log in
          </Text>
        </TouchableOpacity>

      </KeyboardAwareScrollView>

    </View>
  );
};

export default SignUpScreen;
