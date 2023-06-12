/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type props = {
  title: string;
  ubication: string;
  rooms: number;
  bathrooms: number;
  size: number;
  price: number;
};

export default function InmobiliariaCard(props: props): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.rateContainer}>
          <Icon name="star" size={15} color="#EEBA00" />
          <Text style={styles.rate}> 4.5 </Text>
        </View>
        <Image
          style={styles.image}
          source={{
            uri: 'http://placekitten.com/240/240',
          }}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.title}Titulo</Text>
        <Text style={styles.ubication}>
          {props.ubication}
          <Icon name="map-marker-outline" size={20} color="#200e32" />
          3517 W. Gray St. Utica
        </Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.rooms}>
            <Icon name="bed-king-outline" size={25} color="#999" /> 3
            {props.rooms}
          </Text>
          <Text style={styles.bathrooms}>
            <Icon name="shower" size={25} color="#999" />2 {props.bathrooms}
          </Text>
          <Text style={styles.size}>
            <Icon name="move-resize" size={25} color="#999" />
            {props.size}
            230 ft2
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.price}>$440{props.price}/m</Text>
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
    elevation: 5,
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
  },
  ubication: {
    fontSize: 15,
    color: '#737373',
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
    marginTop: 5,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
