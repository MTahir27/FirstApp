import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from '../Screens/Home';
import About from '../Screens/About';
import Contact from '../Screens/Contact';
import Login from '../Authentication/Login';
import Register from '../Authentication/Register';
import ForgetPassword from '../Authentication/ForgetPassword';
import {AuthenticationContext} from '../Context/AuthenticationContext';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function AppNavigation() {
  const {isAuthenticationed} = useContext(AuthenticationContext);
  return isAuthenticationed ? (
    <>
      {/* <Tab.Navigator
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
      </Tab.Navigator> */}
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerPosition: 'left',
          drawerType: 'slide',
        }}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: 'Home Screen',
            drawerIcon: ({color, size}) => (
              <AntDesign name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            drawerIcon: ({color, size}) => (
              <AntDesign name="setting" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact"
          component={Contact}
          options={{
            drawerIcon: ({color, size}) => (
              <AntDesign name="contacts" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  ) : (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    </Stack.Navigator>
  );
}
