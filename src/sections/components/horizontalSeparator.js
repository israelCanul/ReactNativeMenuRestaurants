import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

function HorizontalSeparator() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 2,
  },
});
export default HorizontalSeparator;
