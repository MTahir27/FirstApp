import {View, Text, ScrollView, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

export default function Register() {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    password: '',
    confrimPassword: '',
  });
  const handleChange = event => {
    const targetField = event.currentTarget;
    // setData(data => ({...data, [type]: targetField.value}));
  };

  const handleSubmit = () => {
    alert(data);
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
          onChange={handleChange('password')}
        />
        <TextInput
          placeholder="Confirm Password"
          value={data.confrimPassword}
          onChangeText={handleChange('confirmPassword')}
        />
        <Button onPress={handleSubmit} title="Register" />
      </ScrollView>
    </View>
  );
}
