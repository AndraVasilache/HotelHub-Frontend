import React from 'react';
import { StyleSheet, ImageBackground, View, TouchableOpacity, Text} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
		<ImageBackground source={require('./../../assets/home.png')} style={styles.backgroundImage}>
			<View style={styles.fixToText}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('CreateAccount')}
          style={styles.button}>
          <Text style={styles.inputText}>
            Sign up
          </Text>
        </TouchableOpacity>

				<TouchableOpacity 
          onPress={() => navigation.navigate('Login')}
          style={styles.button}>
          <Text style={styles.inputText}>
            Log in
          </Text>
        </TouchableOpacity>
    	</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
	},
	fixToText: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    color:"white"
  },
  button:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    width: 300,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:10
  },
});

export default HomeScreen;