/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import data from '../data/data.json';

type props = {
  id: number;
  title: string;
  ubication: string;
  rooms: number;
  bathrooms: number;
  size: number;
  price: number;
  rate: number;
};

export default function InmobiliariaCard({id}: props): JSX.Element {
  const props = data[id];

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.rateContainer}>
          <Icon name="star" size={15} color="#EEBA00" />
          <Text style={styles.rate}> {props.rate} </Text>
        </View>
        <Image
          style={styles.image}
          source={{
            uri: 'http://placekitten.com/240/240',
          }}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.ubication}>
          <Icon name="map-marker-outline" size={20} color="#200e32" />
          {props.ubication}
        </Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.rooms}>
            <Icon name="bed-king-outline" size={25} color="#999" />
            {props.rooms}
          </Text>
          <Text style={styles.bathrooms}>
            <Icon name="shower" size={25} color="#999" /> {props.bathrooms}
          </Text>
          <Text style={styles.size}>
            <Icon name="move-resize" size={25} color="#999" />
            {props.size}
            ft2
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.price}>${props.price}/m</Text>
          <View style={styles.likeContainer}>
            <Icon name="heart" size={20} color="#fff" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FDFF',
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
    overflow: 'hidden',
    width: '95%',
    height: 150,
  },
  imageContainer: {
    flex: 4,
  },
  image: {
    width: '70%',
    height: '70%',
    alignSelf: 'center',
    marginTop: '15%',
    borderRadius: 10,
  },
  infoContainer: {
    flex: 6,
    paddingBottom: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  title: {
    fontSize: 25,
    color: '#151525',
    fontWeight: '500',
    marginBottom: 5,
  },
  ubication: {
    fontSize: 15,
    color: '#737373',
    marginBottom: 5,
  },
  rooms: {
    fontSize: 16,
    color: '#151525',
  },
  bathrooms: {
    fontSize: 16,
    color: '#151525',
  },
  size: {
    fontSize: 16,
    color: '#151525',
  },
  price: {
    fontSize: 20,
    color: '#151525',
    fontWeight: '700',
    paddingTop: 4,
  },
  rateContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 90,
    left: 45,
    backgroundColor: '#FBEDB7',
    borderRadius: 50,
    padding: 5,
    zIndex: 1,
    alignItems: 'center',
  },
  rate: {
    fontSize: 15,
    color: '#7a6229',
  },
  detailsContainer: {
    flexDirection: 'row',
    gap: 30,
  },
  likeContainer: {
    backgroundColor: '#00b074',
    borderRadius: 50,
    padding: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
