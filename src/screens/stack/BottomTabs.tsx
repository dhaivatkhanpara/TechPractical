import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RestaurantScreen from '../home/RestaurantScreen';
import MapScreen from '../home/MapScreen';
import {DashboardStackParamList} from '../../types/navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Config from '../../utils/Config';
import {RFPercentage} from '../../utils/AppDimension';
import {StyleSheet, Text} from 'react-native';

const Tab = createBottomTabNavigator<DashboardStackParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: props => {
          return <Text style={styles.header}>{props.options.title}</Text>;
        },
        tabBarActiveTintColor: Config.Colors.primary,
        tabBarLabelStyle: {
          marginBottom: RFPercentage(0.5),
        },
      }}>
      <Tab.Screen
        name="RestaurantScreen"
        component={RestaurantScreen}
        options={{
          title: 'Restaurant List',
          tabBarIcon({focused}) {
            return (
              <MaterialIcons
                name="restaurant-menu"
                size={20}
                color={focused ? Config.Colors.primary : Config.Colors.black}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: 'Map View',
          tabBarIcon({focused}) {
            return (
              <MaterialIcons
                name="map"
                size={20}
                color={focused ? Config.Colors.primary : Config.Colors.black}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    color: Config.Colors.white,
    textAlign: 'center',
    paddingVertical: RFPercentage(2),
    backgroundColor: Config.Colors.primary,
    fontSize: Config.FontsSize.sm,
    fontWeight: 'bold',
  },
});

export default BottomTabs;
