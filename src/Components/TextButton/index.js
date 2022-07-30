import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function TextButton(props) {
  return (
    <TouchableOpacity {...props}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#2196F3',
  },
});
