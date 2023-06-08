import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

type props = {
    title: string,
    ubication: string,
    rooms: number,
    bathrooms: number,
    size: number,
    price: number;
}

export default function InmobiliariaCard(props: props): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          style={styles.image}
          source={{
            uri: 'http://placekitten.com/250/250',
          }} 
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.ubication}>{props.ubication}</Text>
        <Text style={styles.rooms}>{props.rooms} habitaciones</Text>
        <Text style={styles.bathrooms}>{props.bathrooms} baños</Text>
        <Text style={styles.size}>{props.size} ft2</Text>
        <Text style={styles.price}>${props.price}/m</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 5,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ubication: {
    fontSize: 16,
    color: '#666',
  },
  rooms: {
    fontSize: 16,
    color: '#666',
  },
  bathrooms: {
    fontSize: 16,
    color: '#666',
  },
  size: {
    fontSize: 16,
    color: '#666',
  },
  price: {
    fontSize: 16,
    color: '#666',
  },
});
