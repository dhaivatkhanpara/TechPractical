import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantScreen from '../home/RestaurantScreen';
import MapScreen from '../home/MapScreen';
import { DashboardStackParamList } from '../../types/navigation';

const DashboardStackNav = createNativeStackNavigator<DashboardStackParamList>();

const DashboardStackNavigator = () => {
  return (
    <DashboardStackNav.Navigator screenOptions={{headerShown: false}}>
      <DashboardStackNav.Screen name="RestaurantScreen" component={RestaurantScreen} />
      <DashboardStackNav.Screen name="MapScreen" component={MapScreen} />
    </DashboardStackNav.Navigator>
  );
};

export default DashboardStackNavigator;