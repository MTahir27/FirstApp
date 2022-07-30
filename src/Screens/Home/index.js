import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../../Components/CustomButton';

export default function Home({navigation}) {
  return (
    <View style={styles.layout}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint
        facilis odit voluptatem eos enim fugiat, aperiam totam sapiente corporis
        ratione architecto modi reprehenderit dicta minima voluptate ut autem
        quam.
      </Text>
      <CustomButton
        onPress={() => {
          navigation.navigate('About');
        }}
        title="About Us"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    // flex: 1,
  },
});
