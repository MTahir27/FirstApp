import React, {useContext, useState} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import CustomButton from '../../Components/CustomButton';
import TextButton from '../../Components/TextButton';
import TextField from '../../Components/TextField';
import {AuthenticationContext} from '../../Context/AuthenticationContext';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Login({navigation}) {
  const {setIsAuthenticated} = useContext(AuthenticationContext);
  const [data, setData] = useState({email: '', password: ''});
  const handleChange = props => value => {
    setData(data => ({...data, [props]: value}));
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
      <View style={styles.container}>
        <ScrollView style={{background: 'red'}}>
          <View style={styles.paddingY}>
            <TextField
              placeholder="Email"
              value={data.email}
              onChangeText={handleChange('email')}
              keyboardType="email-address"
            />
          </View>
          <View style={(styles.paddingY, styles.passwordField)}>
            <TextField
              placeholder="Password"
              value={data.password}
              onChangeText={handleChange('password')}
              secureTextEntry={true}
            />
            <TextButton
              style={styles.passwordField.icon}
              title={[<AntDesign name="eyeo" color="#000" />]}
            />
          </View>
          <View style={(styles.paddingY, {alignItems: 'flex-end'})}>
            <TextButton
              onPress={() => {
                navigation.push('ForgetPassword');
              }}
              title="Forget Password?"
            />
          </View>
          <View style={styles.paddingY}>
            <CustomButton onPress={handleSubmit} title="Login" />
          </View>
          <View style={styles.abc}>
            <Text>Don't have an Account</Text>
            <TextButton
              onPress={() => {
                navigation.navigate('Register');
              }}
              title="Register"
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageLayout: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    padding: 12,
  },
  paddingY: {
    paddingVertical: 16,
  },
  passwordField: {
    position: 'relative',
    justifyContent: 'center',
    icon: {
      position: 'absolute',
      right: 16,
    },
  },
  abc: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
