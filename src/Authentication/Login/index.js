import React, {useState} from 'react';
import {View, ScrollView, TextInput, Button} from 'react-native';

export default function Login() {
  const [data, setData] = useState({email: '', password: ''});
  const handleChange = props => event => {
    setData(data => ({...data, [props]: event}));
  };

  const handleSubmit = () => {
    console.log(data);
    setData(() => ({...data, email: '', password: ''}));
  };
  return (
    <View>
      <ScrollView>
        <TextInput
          placeholder="Enter Email"
          value={data.email}
          onChangeText={handleChange('email')}
        />
        <TextInput
          placeholder="Enter Password"
          value={data.password}
          onChangeText={handleChange('password')}
        />
        <Button onPress={handleSubmit} title="Login" />
      </ScrollView>
    </View>
  );
}
