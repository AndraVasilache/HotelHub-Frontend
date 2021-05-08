import React, {useState} from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordCheck:''
  });
  console.log(user)

  return (
    <View style={styles.container}>
      <TextInput
        value={user.email}
        onChangeText={(email) => setUser({...user, email: email})}
        placeholder={'Email'}
        style={styles.input}
      />

      <TextInput
        value={user.password}
        onChangeText={(password) => setUser({...user, password: password})}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />

      <TextInput
        value={user.passwordCheck}
        onChangeText={(passwordCheck) => setUser({...user, passwordCheck: passwordCheck})}
        placeholder={'Retype password'}
        secureTextEntry={true}
        style={styles.input}
      />

        <TouchableOpacity 
          //onPress={this.onLogin.bind(this)}
          style={styles.button}>
          <Text style={styles.inputText}>
            Create account
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
    width: 140,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
});

export default SignUpScreen;