/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import InmobiliariaCard from './components/InmobiliariaCard';
import {SafeAreaView, StyleSheet} from 'react-native';

function App(): JSX.Element {
  // eslint-disable-next-line prettier/prettier, no-trailing-spaces
  return ( 
    <SafeAreaView style={styles.container}>
      <InmobiliariaCard id={0} />
      <InmobiliariaCard id={1} />
      <InmobiliariaCard id={2} />
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
