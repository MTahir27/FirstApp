import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

export default function ForgetPassword() {
  const [data, setData] = useState({email: ''});
  const handleChange = prop => event => {
    setData(data => ({...data, [prop]: event}));
  };
  const handleSubmit = () => {
    console.log('Data', data);
  };
  return (
    <View>
      <ScrollView>
        <Text style={styles.text}>
          To get password reset link enter your email address hare.
        </Text>
        <TextInput
          placeholder="Email"
          value={data.email}
          onChangeText={handleChange('email')}
        />
        <Button onPress={handleSubmit} title="Send" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {fontSize: 12},
});
