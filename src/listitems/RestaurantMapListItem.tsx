import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import RatingView from '../components/RatingView';
import {Restaurant} from '../types/api';
import Config from '../utils/Config';

const RestaurantMapListItem = (props: Restaurant) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri: props.images[0].url}}/>
        <View style={styles.main}>
            <Text style={styles.title}>{props.title}</Text>
            <RatingView iconSize={10} rating={props.rating}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Config.Colors.white,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    alignItems: 'center'
  },
  title: {
    fontSize: Config.FontsSize.xsm,
    color: Config.Colors.black,
    marginBottom: RFPercentage(1)
  },
  main: {
    marginStart: RFPercentage(3)
  },
  image: {
    height: RFPercentage(4),
    width: RFPercentage(4),
    backgroundColor: 'red',
    borderRadius: 100,
  },
  mapContainer: {
    padding: RFPercentage(1),
    borderRadius: 4,
    backgroundColor: Config.Colors.primary,
  }
});

export default RestaurantMapListItem;
