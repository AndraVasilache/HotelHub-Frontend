import React from 'react';
import { StyleSheet, ImageBackground, View, TouchableOpacity, Text} from 'react-native';

const AboutUsScreen = () => {
  return (
		<ImageBackground source={require('./../../../assets/home.jpg')} style={styles.backgroundImage}>
			
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
	},
});

export default AboutUsScreen;