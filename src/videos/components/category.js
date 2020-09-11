import React from 'react';
import {StyleSheet, Text, ImageBackground, Platform} from 'react-native';

function Category(props) {
  return (
    <ImageBackground
      source={{uri: props.background_image}}
      style={styles.container}>
      <Text style={styles.genre}>{props.genres[0]}</Text>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  genre: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,0.75)',
    textShadowOffset: {width: 1, height: 1},

    ...Platform.select({
      ios: {
        textShadowRadius: 0,
      },
      android: {
        textShadowRadius: 1,
      },
    }),
  },
});

export default Category;
