import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, Text, StyleSheet, Button} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    // this.props.navigation.setOptions({ title: 'Updated!' })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          chale borre todwqeqw
          <Icon name="bars" size={30} color="#900" />
        </Text>
      </View>
    );
  }
  onBuffer(e) {
    console.log('on buffer');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
