import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {RatingView} from '../components';
import {Restaurant} from '../types/api';
import Config from '../utils/Config';
type RestaurantListItemProps = {
  onPress?: ()=> void;
}
const RestaurantListItem = (props: Restaurant & RestaurantListItemProps) => {
  return (
    <TouchableOpacity onPress={props?.onPress} style={styles.container}>
        <Image style={styles.image} source={{uri: props.images[0].url}}/>
        <View style={styles.main}>
            <Text style={styles.title}>{props.title}</Text>
            <RatingView rating={props.rating}/>
        </View>
        <View style={styles.mapContainer}>
            <Image resizeMode='contain' style={styles.mapIcon} source={require('../assets/images/map.png')}/>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Config.Colors.white,
    marginVertical: RFPercentage(0.7),
    padding: RFPercentage(2),
    shadTouchableOpacityowColor: Config.Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    alignItems: 'center'
  },
  title: {
    fontSize: Config.FontsSize.sm,
    color: Config.Colors.black,
    marginBottom: RFPercentage(1)
  },
  main: {
    flex: 1,
    marginStart: RFPercentage(3)
  },
  image: {
    height: RFPercentage(7.5),
    width: RFPercentage(7.5),
    borderRadius: 5,
    backgroundColor: Config.Colors.primary
  },
  mapIcon: {
    height: RFPercentage(2.5),
    width: RFPercentage(2.5),
  },
  mapContainer: {
    padding: RFPercentage(1),
    borderRadius: 4,
    backgroundColor: Config.Colors.primary,
  }
});

export default RestaurantListItem;
