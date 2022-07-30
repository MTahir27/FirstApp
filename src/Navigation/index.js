import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../Screens/Home';
import About from '../Screens/About';
import Contact from '../Screens/Contact';
import Login from '../Authentication/Login';
import Register from '../Authentication/Register';
import ForgetPassword from '../Authentication/ForgetPassword';
import {AuthenticationContext} from '../Context/AuthenticationContext';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

export default function AppNavigation() {
  const {isAuthenticationed} = useContext(AuthenticationContext);
  return isAuthenticationed ? (
    <>
      <Tab.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#2196F3'},
          headerTitleAlign: 'center',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <AntDesign name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({color, size}) => (
              <AntDesign name="setting" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarIcon: ({color, size}) => (
              <AntDesign name="contacts" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
      {/* <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator> */}
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator> */}
    </>
  ) : (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    </Stack.Navigator>
  );
}
