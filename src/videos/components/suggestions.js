import React, {Component} from 'react';
import SuggestionList from '../containers/suggestions-lists';
import {View, Image, Text, StyleSheet} from 'react-native';

function Suggestion(props) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          style={styles.cover}
          source={{uri: props.medium_cover_image}}></Image>
        <View style={styles.genre}>
          <Text style={styles.genreText}>{props.genres[0]}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.year}>{props.year}</Text>
        <Text style={styles.stars}>{props.rating}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  cover: {
    width: 100,
    height: 150,
    resizeMode: 'contain',
  },
  left: {},
  genre: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  genreText: {
    color: 'white',
    backgroundColor: 'black',
    fontSize: 11,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    padding: 5,
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: '#44546b',

    flexShrink: 1,
    flexWrap: 'wrap',
  },
  year: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  stars: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
export default Suggestion;
