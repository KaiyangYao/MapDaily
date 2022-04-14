import { configureStore } from '@reduxjs/toolkit'
import buildingsSlice from '../features/buildingsSlice'


export default configureStore({
  reducer: {
    buildings: buildingsSlice
  }
})