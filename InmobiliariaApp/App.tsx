/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import VerticalList from './components/verticalList';

function App(): JSX.Element {
  // eslint-disable-next-line prettier/prettier, no-trailing-spaces
  return ( 
    <SafeAreaView style={styles.container}>
      <VerticalList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
