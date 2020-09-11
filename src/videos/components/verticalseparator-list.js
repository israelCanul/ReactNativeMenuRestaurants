import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function VerticalSeparator() {
  return (
    <View style={[estilos.separator, {borderTopColor: '#eaeaea'}]}>
      {/* <Text>Este es mi separador</Text> */}
    </View>
  );
}
const estilos = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
    marginVertical: 10,
  },
});

export default VerticalSeparator;
