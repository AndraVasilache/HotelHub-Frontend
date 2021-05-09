import React, { useState } from 'react';
import {
  View, StyleSheet, TouchableOpacity, Text,
} from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';

const styles = StyleSheet.create({
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
  },
  inputText: {
    color: 'white',
  },
  button: {
    backgroundColor: '#e34321',
    borderRadius: 25,
    height: 50,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
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

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        label="First name"
        value={user.surname}
        autoFocus
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
      >
        <Text style={styles.inputText}>
          Create account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
