/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import InmobiliariaCard from './components/InmobiliariaCard';
import {StyleSheet} from 'react-native';

function App(): JSX.Element {
  // eslint-disable-next-line prettier/prettier, no-trailing-spaces
  return ( 
    <InmobiliariaCard />
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
