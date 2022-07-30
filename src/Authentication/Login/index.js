import React, {useContext, useState} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import CustomButton from '../../Components/CustomButton';
import TextField from '../../Components/TextField';
import {AuthenticationContext} from '../../Context/AuthenticationContext';

export default function Login({navigation}) {
  const {setIsAuthenticated} = useContext(AuthenticationContext);
  const [data, setData] = useState({email: '', password: ''});
  const handleChange = props => event => {
    setData(data => ({...data, [props]: event}));
  };

  const handleSubmit = () => {
    if (data.email && data.password) {
      setIsAuthenticated(true);
      navigation.navigate('Home');
    } else {
      alert('Fill All Field');
    }
    setData(() => ({...data, email: '', password: ''}));
  };
  return (
    <View style={styles.pageLayout}>
      <ScrollView style={{flex: 1}}>
        <View>
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
          <CustomButton
            onPress={() => {
              navigation.navigate('ForgetPassword');
            }}
            title="ForgetPassword"
          />
          <CustomButton onPress={handleSubmit} title="Login" />
          <Text>Don't have an Account</Text>
          <CustomButton
            onPress={() => {
              navigation.navigate('Register');
            }}
            title="Register"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pageLayout: {
    flex: 1,
  },
});
