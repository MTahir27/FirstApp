import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import TextField from '../../Components/TextField';
import CustomButton from '../../Components/CustomButton';

export default function ForgetPassword({navigation}) {
  const [data, setData] = useState({email: ''});
  const handleChange = prop => value => {
    setData(data => ({...data, [prop]: value}));
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
    <View style={styles.pageLayout}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.text}>
            To get password reset link enter your email address hare.
          </Text>
          <View style={styles.paddingY}>
            <TextField
              placeholder="Email"
              value={data.email}
              onChangeText={handleChange('email')}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.paddingY}>
            <CustomButton onPress={handleSubmit} title="Send" />
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
  text: {fontSize: 12},
});
