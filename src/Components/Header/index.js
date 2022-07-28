import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#76549A',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
});
