import { CompositeNavigationProp, CompositeScreenProps, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import type { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Coordinates } from "../utils/Helper";
import { Restaurant } from "./api";

type AppStackParamList = {
    SignInScreen: undefined;
    DashboardScreen: undefined;
    //Other screens
};

type DashboardStackParamList = {
    MapScreen: {
      item: Restaurant;
    };
    RestaurantScreen: undefined;
    //Other screens
};

type SignInScreenProps = CompositeScreenProps<
  NativeStackScreenProps<AppStackParamList, 'SignInScreen'>
>;
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

export type DashboardScreenNavigationProp<T extends keyof DashboardStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<DashboardStackParamList, T>,
    RootStackScreenProps<keyof AppStackParamList>
  >;

export {
    AppStackParamList,
    SignInScreenProps,
    DashboardStackParamList,
    DashboardScreenNavigationProp
}  