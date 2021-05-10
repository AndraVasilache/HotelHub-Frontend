/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import * as Font from 'expo-font';
import Router from './src/utils/Router';

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      Montserrat: require('./assets/fonts/Precious.ttf'),

      // Any string can be used as the fontFamily name. Here we use an object to provide more control
      'Precious': {
        uri: require('./assets/fonts/Precious.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <PaperProvider>
          <Router />
        </PaperProvider>
      );
    } else {
      return null;
    }
  }
}
