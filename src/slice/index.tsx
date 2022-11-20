import { combineReducers } from 'redux'

import restaurantsReducer from './restaurants'

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer