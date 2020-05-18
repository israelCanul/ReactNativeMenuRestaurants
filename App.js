import React from 'react';
import Home from './src/App';
import {
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              title: 'My whome'
              , headerRight: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#fff"
                />
              )
            }}
            name="Perrito"
            component={Home} />
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
};




export default App;
