import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import RestaurantListItem from '../../listitems/RestaurantListItem';
import {getRestaurant, storeRestaurant} from '../../store/RestaurantStore';
import {Restaurant} from '../../types/api';
import {DashboardScreenNavigationProp} from '../../types/navigation';
import Config from '../../utils/Config';
import {fetchRestaurants, restaurnrsSelector} from '../../slice/restaurants';
import {useDispatch, useSelector} from 'react-redux';

const RestaurantScreen = (
  props: DashboardScreenNavigationProp<'RestaurantScreen'>,
) => {
  const [data, setData] = useState<Restaurant[]>([]);
  const navigation =
    useNavigation<
      DashboardScreenNavigationProp<'RestaurantScreen'>['navigation']
    >();
  const dispatch = useDispatch();
  const {restaurants, loading, hasErrors} = useSelector(restaurnrsSelector);

  useEffect(() => {
    if (restaurants.length) {
      setData(restaurants);
      storeRestaurant(restaurants).then(res => {});
    }
  }, [restaurants.length]);

  useEffect(() => {
    getRestaurant().then(res => {
      if (!res.length) {
        // Do a api call if no data exist.
        dispatch(fetchRestaurants());
      }
      // Set data if exist.
      setData(res);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={styles.flatlist}
        ListHeaderComponent={
          loading ? <ActivityIndicator size={'large'} /> : null
        }
        renderItem={({item}) => (
          <RestaurantListItem
            {...item}
            onPress={() => {
              navigation.navigate('MapScreen', {
                item: item,
              });
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Config.Colors.screenBg,
  },
  flatlist: {
    paddingHorizontal: RFPercentage(2),
    marginTop: RFPercentage(2),
    paddingBottom: RFPercentage(4),
  },
});

export default RestaurantScreen;
