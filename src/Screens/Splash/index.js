import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Splash() {
  return (
    <View style={styles.pageLayout}>
      <Text>Splash Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pageLayout: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
