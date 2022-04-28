import { configureStore } from '@reduxjs/toolkit'
import buildingsSlice from '../utils/buildingsSlice'


export default configureStore({
  reducer: {
    buildings: buildingsSlice
  }
})