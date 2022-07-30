import {View, Text, ScrollView, TextInput, Button} from 'react-native';
import React, {useContext, useState} from 'react';
import {AuthenticationContext} from '../../Context/AuthenticationContext';
import TextField from '../../Components/TextField';
import CustomButton from '../../Components/CustomButton';

export default function Register({navigation}) {
  const {setIsAuthenticated} = useContext(AuthenticationContext);
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
    if (data.fullName && data.email && data.password && data.confrimPassword) {
      if (data.password === data.confrimPassword) {
        setIsAuthenticated(true);
        navigation.navigate('Home');
      } else {
        alert('Password Not Match');
      }
    } else {
      alert('Fill All Field');
      setData(data => ({
        ...data,
        fullName: '',
        email: '',
        password: '',
        confrimPassword: '',
      }));
    }
  };
  return (
    <View>
      <ScrollView>
        <TextField
          placeholder="Full Name"
          value={data.fullName}
          onChangeText={handleChange('fullName')}
        />
        <TextField
          placeholder="Email"
          value={data.email}
          onChangeText={handleChange('email')}
        />
        <TextField
          placeholder="Password"
          value={data.password}
          onChangeText={handleChange('password')}
        />
        <TextField
          placeholder="Confirm Password"
          value={data.confrimPassword}
          onChangeText={handleChange('confrimPassword')}
        />
        <CustomButton onPress={handleSubmit} title="Register" />
      </ScrollView>
    </View>
  );
}
