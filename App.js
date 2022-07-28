import React from 'react';
import Header from './src/Components/Header';
import Footer from './src/Components/Footer';
import Routes from './src/Routes';
import {View} from 'react-native';
export default function App() {
  return (
    <View>
      <Header />
      <View>
        <Routes />
      </View>
      <Footer />
    </View>
  );
}
