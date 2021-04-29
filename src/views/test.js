import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Form, FormItem } from 'react-native-form-component';


const Test = ({ navigation }) => {
  const [user, setEmail, setPassword] = useState({email:'', password:''})
  console.log(user)
  return (
    <View style={styles.container}>
    <Form 
      onButtonPress={() => console.warn('do something')}
      buttonStyle={styles.button}
      textStyle={styles.buttonText}>

      <FormItem
        label="Email"
        style={styles.input}
        value={user.email}
        onChangeText={(email) => setEmail(email)}
      />

      <FormItem
        label="Password"
        style={styles.input}
        value={user.password}
        onChangeText={(password) => setPassword(password)}
      />

    </Form>
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
  buttonText: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  input: {
    width: 200,
    height: 44,
    padding: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 30,
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

export default Test;