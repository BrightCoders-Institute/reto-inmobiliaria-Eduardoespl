import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import InmobiliariaCard from './InmobiliariaCard';
import data from '../data/data.json';

export default function VerticalList(): JSX.Element {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <InmobiliariaCard {...item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
