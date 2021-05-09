import React, { useState } from 'react';
import {
  TextInput, View, StyleSheet, TouchableOpacity, Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#white',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  inputText: {
    color: 'white',
  },
  button: {
    backgroundColor: '#e34321',
    borderRadius: 25,
    height: 50,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});

const LoginScreen = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  return (
    <View style={styles.container}>
      <TextInput
        value={user.username}
        onChangeText={(username) => setUser({ username, password: user.password })}
        placeholder="Username"
        style={styles.input}
      />
      <TextInput
        value={user.password}
        onChangeText={(password) => setUser({ username: user.username, password })}
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.inputText}>
          Log in
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
