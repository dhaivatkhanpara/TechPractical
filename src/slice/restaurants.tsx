import { API_URL } from '@env';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurant } from '../types/api'

interface RestaurantsState {
  restaurants: Restaurant[]
  loading: boolean;
  hasErrors: boolean;
}

export const initialState = {
  loading: false,
  hasErrors: false,
  restaurants: [],
} as RestaurantsState;

// A slice for restaurants with our three reducers
const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    getRestaurants: state => {
      state.loading = true
    },
    getRestaurantsSuccess: (state, action: PayloadAction<Restaurant[]>) => {
      state.restaurants = action.payload;
      state.loading = false
      state.hasErrors = false
    },
    getRestaurantsFailure: state => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

// Three actions generated from the slice
export const { getRestaurants, getRestaurantsSuccess, getRestaurantsFailure } = restaurantsSlice.actions

// A selector
export const restaurnrsSelector = state => state.restaurants

// The reducer
export default restaurantsSlice.reducer

// Asynchronous thunk action
export function fetchRestaurants() {
  return async dispatch => {
    dispatch(getRestaurants())

    try {
      const response = await fetch(API_URL)
      const data = await response.json();
      dispatch(getRestaurantsSuccess(data?.data))
    } catch (error) {
      dispatch(getRestaurantsFailure())
    }
  }
}