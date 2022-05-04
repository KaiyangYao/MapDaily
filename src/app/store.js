import { configureStore } from '@reduxjs/toolkit'
import buildingsReducer from '../utils/buildingsSlice'
import restaurantReducer  from '../utils/restaurantSlice'

export default configureStore({
  reducer :{
    restaurants: restaurantReducer,
    buildings: buildingsReducer
  }
})