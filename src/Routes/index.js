import React from 'react';
import {View} from 'react-native';
import Home from '../Screens/Home';
import About from '../Screens/About';
import Contact from '../Screens/Contact';

export default function Routes() {
  return (
    <View>
      <Home />
      <Contact />
      <About />
    </View>
  );
}
