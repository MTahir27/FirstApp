import React from 'react';
import {View, Text, Button} from 'react-native';
import CustomButton from '../../Components/CustomButton';

export default function Contact({navigation}) {
  return (
    <View>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere earum
        fugiat nisi nesciunt at saepe reiciendis quos obcaecati, veniam fugit
        voluptates repellendus eaque soluta quae necessitatibus, accusantium,
        quas libero maiores!
      </Text>
      <CustomButton
        onPress={() => {
          navigation.navigate('Home');
        }}
        title="Go to Home"
      />
      <CustomButton
        onPress={() => {
          navigation.navigate('About');
        }}
        title="About Us"
      />
    </View>
  );
}
