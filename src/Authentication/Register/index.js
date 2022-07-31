import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
import {AuthenticationContext} from '../../Context/AuthenticationContext';
import TextField from '../../Components/TextField';
import CustomButton from '../../Components/CustomButton';
import TextButton from '../../Components/TextButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Register({navigation}) {
  const {setIsAuthenticated} = useContext(AuthenticationContext);
  const [data, setData] = useState({
    fullName: '',
    email: '',
    password: '',
    confrimPassword: '',
  });
  const handleChange = props => value => {
    setData(data => ({...data, [props]: value}));
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
    <View style={styles.pageLayout}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.paddingY}>
            <TextField
              placeholder="Full Name"
              value={data.fullName}
              onChangeText={handleChange('fullName')}
            />
          </View>
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
              title={[<AntDesign key="1" name="eyeo" color="#000" />]}
            />
          </View>
          <View style={(styles.paddingY, styles.passwordField)}>
            <TextField
              placeholder="Confirm Password"
              value={data.confrimPassword}
              onChangeText={handleChange('confrimPassword')}
              secureTextEntry={true}
            />
            <TextButton
              style={styles.passwordField.icon}
              title={[<AntDesign key="1" name="eyeo" color="#000" />]}
            />
          </View>
          <View style={styles.paddingY}>
            <CustomButton onPress={handleSubmit} title="Register" />
          </View>
          <View style={styles.abc}>
            <Text style={{marginRight: 16}}>Already have an Account</Text>
            <TextButton
              onPress={() => {
                navigation.navigate('Login');
              }}
              title="Login"
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
