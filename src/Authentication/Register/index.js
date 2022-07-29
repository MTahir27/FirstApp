import {View, Text, ScrollView, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

export default function Register() {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    password: '',
    confrimPassword: '',
  });
  const handleChange = props => event => {
    setData(data => ({...data, [props]: event}));
  };

  const handleSubmit = () => {
    console.log(data);
  };
  return (
    <View>
      <ScrollView>
        <TextInput
          placeholder="Full Name"
          value={data.fullName}
          onChangeText={handleChange('fullName')}
        />
        <TextInput
          placeholder="Email"
          value={data.email}
          onChangeText={handleChange('email')}
        />
        <TextInput
          placeholder="Password"
          value={data.password}
          onChangeText={handleChange('password')}
        />
        <TextInput
          placeholder="Confirm Password"
          value={data.confrimPassword}
          onChangeText={handleChange('confrimPassword')}
        />
        <Button onPress={handleSubmit} title="Register" />
      </ScrollView>
    </View>
  );
}
