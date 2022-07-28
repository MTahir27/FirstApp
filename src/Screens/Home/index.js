import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Home() {
  return (
    <View style={styles.layout}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    // flex: 1,
  },
});
