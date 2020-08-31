import React, {Component} from 'react';
import Screen from './Screen';

export const ProfileScreen = ({navigation}) => (
  <Screen navigation={navigation} name="Profile" />
);
export const HomeScreen = ({navigation}) => (
  <Screen navigation={navigation} name="Home" />
);
export const ActivityScreen = ({navigation}) => (
  <Screen navigation={navigation} name="Activity" />
);
export const ListScreen = ({navigation}) => (
  <Screen navigation={navigation} name="List" />
);
export const MessageScreen = ({navigation}) => (
  <Screen navigation={navigation} name="Message" />
);
export const ResportScreen = ({navigation}) => (
  <Screen navigation={navigation} name="Resport" />
);
