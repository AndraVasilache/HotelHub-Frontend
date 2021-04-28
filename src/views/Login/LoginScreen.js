import React from 'react';
import { Button, TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

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

        <TouchableOpacity 
          //onPress={this.onLogin.bind(this)}
          style={styles.button}>
          <Text style={styles.inputText}>
            Log in
          </Text>
        </TouchableOpacity>
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
  },
  inputText: {
    color:"white"
  },
  button:{
    width:"80%",
    backgroundColor:"#e34321",
    borderRadius:25,
    height:50,
    width: 100,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
});

export default LoginScreen;