/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import Router from './src/utils/Router';

const preciousFont = require('./assets/fonts/Precious.ttf');
const playfairFont = require('./assets/fonts/PlayfairDisplay-Regular.ttf');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      fontsLoaded: false,
    };
  }

  componentDidMount() {
    this.loadFonts();
  }

  async loadFonts() {
    this.state.fontsLoaded = false;
    await Font.loadAsync({
      Precious: {
        uri: preciousFont,
        display: Font.FontDisplay.FALLBACK,
      },
      Playfair: {
        uri: playfairFont,
        display: Font.FontDisplay.FALLBACK,
      },
    });
    this.setState({ fontsLoaded: true });
  }

  render() {
    const { fontsLoaded } = this.state;
    if (fontsLoaded) {
      return (
        <PaperProvider>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </PaperProvider>
      );
    }
    return null;
  }
}
