import React from 'react';
import { StyleSheet, ImageBackground, View, Button} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
		<ImageBackground source={require('./../../assets/home.png')} style={styles.backgroundImage}>
			<View style={styles.fixToText}>
				<Button
					title={'Sign up'}
					style={styles.button}
					color="#e34321"
				/>

        <View style={styles.space} />

				<Button
          title={'Log in'}
          onPress={() => navigation.navigate('Login')}
          style={styles.button}
          color="#e34321"
      	/>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
	button: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
    fontSize: 16
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
});

export default HomeScreen;