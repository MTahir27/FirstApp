import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>CopyRight &copy; by MTDeveloper</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#76549A',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    color: '#fff',
    fontSize: 12,
  },
});
