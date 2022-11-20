import React from 'react';
import {SignInScreen} from '../index';
import {AppStackParamList} from '../../types/navigation';
import { useAuth } from '../../context/AuthContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';

const AppStack = () => {
  const Stack = createNativeStackNavigator<AppStackParamList>();
  const {isLoggedIn} = useAuth()!;

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        // Screens for logged in users
        <Stack.Group>
          <Stack.Screen name="DashboardScreen" component={BottomTabs} />     
        </Stack.Group>
      ) : (
        // Auth screens
        <Stack.Group>
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default AppStack;
