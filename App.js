import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Header from './src/Components/Header';
import Footer from './src/Components/Footer';
import Routes from './src/Routes';
export default function App() {
  return (
    <View style={styles.pageLayout}>
      <Header />
      <View style={styles.container}>
        <Routes />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  pageLayout: {
    flex: 1,
  },
  container: {
    padding: 12,
    flex: 1,
  },
});
