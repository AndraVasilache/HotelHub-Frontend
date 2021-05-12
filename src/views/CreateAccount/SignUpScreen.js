import React, { useState, useReducer } from 'react';
import {
  View, StyleSheet, TouchableOpacity, Text,
} from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  inputText: {
    color: 'white',
  },
  button: {
    backgroundColor: '#1F3B3F',
    borderRadius: 25,
    height: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

const SignUpScreen = () => {
  const [user, setUser] = useState({
    surname: '',
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
  });

  const emailValidation = () => !user.email.includes('@');
  const passwordValidation = () => !(user.passwordCheck === user.password);

  function register() {
    const options = {
      headers: { 'Access-Control-Allow-Origin': '*' },
    };

    axios.post('https://hotelhubip.herokuapp.com/users/create', {
      user_id: 0,
      name: user.surname + user.name,
      email: user.email,
      password: useReducer.password,
      is_admin: false,
      hotel_admin: 0,
    }, options)
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View style={styles.containerView}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        extraScrollHeight={40}
      >
        <TextInput
          style={styles.input}
          label="First name"
          value={user.surname}
          onChangeText={(surname) => setUser({ ...user, surname })}
        />

        <TextInput
          style={styles.input}
          label="Last name"
          value={user.name}
          onChangeText={(name) => setUser({ ...user, name })}
        />

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

        <TextInput
          style={styles.input}
          label="Retype password"
          secureTextEntry
          value={user.passwordCheck}
          onChangeText={(passwordCheck) => setUser({ ...user, passwordCheck })}
        />
        {user.passwordCheck && passwordValidation() ? (
          <HelperText type="error" visible={passwordValidation()}>
            Passwords do not match!
          </HelperText>
        ) : null}

        <TouchableOpacity
          style={styles.button}
          onPress={() => register()}
        >
          <Text style={styles.inputText}>
            Create account
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>

    </View>
  );
};

export default SignUpScreen;
