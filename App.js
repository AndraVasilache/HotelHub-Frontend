import React from 'react';
import Router from "./src/utils/Router";
import { Provider as PaperProvider } from 'react-native-paper';

export default class App extends React.Component {
  render() {
      return (
        <PaperProvider>
          <Router/>
        </PaperProvider>
    );
  }
}
