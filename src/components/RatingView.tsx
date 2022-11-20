import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RFValue} from '../utils/AppDimension';
import Config from '../utils/Config';
import Octicons from 'react-native-vector-icons/Octicons';
type RatingViewProps = {
  rating: number;
  iconSize? :number
};
const defaultRating = 3;
const RatingView = ({rating = defaultRating, iconSize = 15}: RatingViewProps) => {
  const rattings = Array.from(Array(5).keys());
  return (
    <View style={styles.row}>
      {rattings.map((item,index) => {
        return (
          <Octicons
            key={index}
            style={styles.icon}
            name={rating > index ? "star-fill" : 'star'}
            size={RFValue(iconSize)}
            color={Config.Colors.rating}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  icon: {
    marginEnd: 2,
  },
});
export default RatingView;
