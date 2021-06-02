import React, { useState } from 'react';
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
  containerViewInner: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  containerKeyboardAwareScrollView: {
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 10,
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
    backgroundColor: '#5c0099',
    borderRadius: 25,
    height: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    fontFamily: 'Playfair',
  },
});

const SignUpScreen = ({ navigation }) => {
  const [badSignUp, setBadSignUp] = useState(false);

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
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    };

    axios.post('https://hotelhubip.herokuapp.com/users/create', {
      name: `${user.surname} ${user.name}`,
      email: user.email,
      password: user.password,
      admin: false,
      hotel_admin: '',
    }, options)
      .then((response) => {
        console.log(response);
        if (response.data) {
          navigation.navigate('Login');
        } else {
          setBadSignUp(true);
        }
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View style={styles.containerView}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.containerKeyboardAwareScrollView}
        extraHeight={40}
      >
        <View style={styles.containerViewInner}>
          <TextInput
            style={styles.input}
            placeholder="First name"
            value={user.surname}
            onChangeText={(surname) => setUser({ ...user, surname })}
          />

          <TextInput
            style={styles.input}
            placeholder="Last name"
            value={user.name}
            onChangeText={(name) => setUser({ ...user, name })}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
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
            placeholder="Password"
            secureTextEntry
            value={user.password}
            onChangeText={(password) => setUser({ ...user, password })}
          />

          <TextInput
            style={styles.input}
            placeholder="Retype password"
            secureTextEntry
            value={user.passwordCheck}
            onChangeText={(passwordCheck) => setUser({ ...user, passwordCheck })}
          />
          {user.passwordCheck && passwordValidation() ? (
            <HelperText type="error" visible={passwordValidation()}>
              Passwords do not match!
            </HelperText>
          ) : null}

          <HelperText type="error" visible={badSignUp}>
            Email already in use!
          </HelperText>

          <TouchableOpacity
            style={styles.button}
            onPress={() => register()}
          >
            <Text style={styles.inputText}>
              Create account
            </Text>
          </TouchableOpacity>

        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUpScreen;
