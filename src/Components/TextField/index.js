import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default function TextField(props) {
  return <TextInput {...props} style={styles.input} />;
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#dee2e6',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    color: '#888888',
  },
});
