/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import FontLoader from './src/utils/FontLoader';
import Router from './src/utils/Router';

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <FontLoader />
        <Router />
      </PaperProvider>
    );
  }
}
