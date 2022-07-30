import React from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../../Components/CustomButton';

export default function About({navigation}) {
  return (
    <View>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        laborum amet tenetur aut, officia quas velit nihil veritatis quia a
        aspernatur unde aperiam hic perspiciatis facere quaerat cum blanditiis
        dolorum.
      </Text>
      <CustomButton
        onPress={() => {
          navigation.navigate('Contact');
        }}
        title="Contact Us"
      />
      <CustomButton
        onPress={() => {
          navigation.navigate('Home');
        }}
        title="Back to Home"
      />
    </View>
  );
}
