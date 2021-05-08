import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import { TextInput } from 'react-native-paper';

const AboutUsScreen = () => {
	const [text, setText] = React.useState('');

  return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				label="Email"
				value={text}
				underlineColor='#e34321'
				onChangeText={text => setText(text)}
    	/>

			<TextInput
				style={styles.input}
				label="Whatever"
				value={text}
				underlineColor='#e34321'
				onChangeText={text => setText(text)}
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
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
		backgroundColor: 'white'
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    marginBottom: 10,
		backgroundColor: 'white'
  },
});

export default AboutUsScreen;