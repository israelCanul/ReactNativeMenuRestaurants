import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Este es mi texto de inicio de curso</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
export default App;
