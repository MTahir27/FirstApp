import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
import Header from './src/Components/Header';
import Footer from './src/Components/Footer';
import AppNavigation from './src/Navigation';
import AuthenticationContextProvider from './src/Context/AuthenticationContext';
export default function App() {
  return (
    <AuthenticationContextProvider>
      <NavigationContainer>
        <View style={styles.pageLayout}>
          <AppNavigation />
        </View>
      </NavigationContainer>
    </AuthenticationContextProvider>
  );
}

const styles = StyleSheet.create({
  pageLayout: {
    flex: 1,
  },
  container: {
    padding: 12,
    flex: 1,
    backgroundColor: '#fff',
  },
});
