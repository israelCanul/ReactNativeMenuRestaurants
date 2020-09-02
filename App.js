import React from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';

class App extends React.Component {
  render() {
    return (
      <Home>
        <Header>
          <Text>eee</Text>
        </Header>
        <Text>Este es mi texto</Text>
      </Home>
    );
  }
}

export default App;
