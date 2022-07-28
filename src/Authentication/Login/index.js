import React, {useState} from 'react';
import {View, ScrollView, TextInput, Button} from 'react-native';

export default function Login() {
  const [data, setData] = useState({email: '', password: ''});
  const handleChange = (type, event) => {
    const targetField = event.Target;
    setData(data => ({...data, [type]: targetField.value}));
  };

  const handleSubmit = () => {
    alert(data);
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
        <Button onPress={handleSubmit}>Login</Button>
      </ScrollView>
    </View>
  );
}
