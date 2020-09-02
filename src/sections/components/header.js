import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';

function Header(props) {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../../../assets/logo.png')}></Image>
          <View style={styles.children}>{props.children}</View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain',
  },
  children: {
    // backgroundColor: 'green',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Header;
