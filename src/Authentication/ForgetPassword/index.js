import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

export default function ForgetPassword({navigation}) {
  const [data, setData] = useState({email: ''});
  const handleChange = prop => event => {
    setData(data => ({...data, [prop]: event}));
  };
  const handleSubmit = () => {
    if (data.email) {
      navigation.navigate('Login');
    } else {
      alert('Fill Email Field');
    }
    setData(() => ({...data, email: ''}));
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
