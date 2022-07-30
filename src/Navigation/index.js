import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import About from '../Screens/About';
import Contact from '../Screens/Contact';
import Login from '../Authentication/Login';
import Register from '../Authentication/Register';
import ForgetPassword from '../Authentication/ForgetPassword';
import {AuthenticationContext} from '../Context/AuthenticationContext';

const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  const {isAuthenticationed} = useContext(AuthenticationContext);
  return isAuthenticationed ? (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    </Stack.Navigator>
  );
}
