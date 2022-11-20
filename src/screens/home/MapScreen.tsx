import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {DashboardScreenNavigationProp} from '../../types/navigation';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Config from '../../utils/Config';
import {MapStyle} from '../../mock/MapStyle';
import {Coordinates, getRegionForCoordinates, getUserLocation} from '../../utils/Helper';
import RestaurantMapListItem from '../../listitems/RestaurantMapListItem';
import {GOOGLE_MAPS_APIKEY} from '@env'
const MapScreen = ({route}: DashboardScreenNavigationProp<'MapScreen'>) => {
    const [origin, setOrigin] = useState<Coordinates>();
    const [destination, setDestination] = useState<Coordinates>();

    useEffect(()=>{
      if(route?.params?.item){
      setDestination({
        latitude: Number(route?.params?.item?.latitude),
        longitude: Number(route?.params?.item?.longitude)
      });
      getUserLocation().then(info=> {
        setOrigin({
          ...info.coords
        })
      }).catch(error=>{
        Alert.alert(error);
      });
      }
    },[route?.params?.item])
  
    return (
    <View style={styles.container}>
      {origin && destination ? (
        <MapView
          customMapStyle={MapStyle}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            ...getRegionForCoordinates([origin, destination]),
          }}>
          <MapViewDirections
            origin={origin}
            mode="DRIVING"
            strokeWidth={3}
            strokeColor={Config.Colors.primary}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
          />

          <Marker
            coordinate={destination}
            image={require('../../assets/images/shop-pin.png')}>
            <Callout>
              <RestaurantMapListItem {...route.params.item} />
            </Callout>
          </Marker>
          <Marker
            coordinate={origin}
            title={'Test Marker'}
            description={'This is a description'}
          />
        </MapView>
      ) : <Text style={styles.noData}>No restauranr Selected!</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  noData: {
    color: Config.Colors.black,
    fontSize: Config.FontsSize.md
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
