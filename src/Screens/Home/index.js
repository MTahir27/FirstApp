import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function Home() {
  return (
    <View style={styles.layout}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint
        facilis odit voluptatem eos enim fugiat, aperiam totam sapiente corporis
        ratione architecto modi reprehenderit dicta minima voluptate ut autem
        quam.
      </Text>
      <Button>About Us</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    // flex: 1,
  },
});
