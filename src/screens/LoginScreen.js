import React from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        //TODO
        //value={this.state.username}
        //onChangeText={(username) => this.setState({ username })}
        placeholder={'Username'}
        style={styles.input}
      />
      <TextInput
        //TODO
        //value={this.state.password}
        //onChangeText={(password) => this.setState({ password })}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      
      <Button
        title={'Login'}
        style={styles.button}
        color="#e34321"
        //onPress={this.onLogin.bind(this)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  }
});

export default LoginScreen;