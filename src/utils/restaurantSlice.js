import { createSlice } from '@reduxjs/toolkit'
import restaurant from "../resource/json/restaurant";

var restaurants = restaurant

const initialstate = {
    ...restaurants,
    currentBuildingIndex : -1,
}

export const resturantSlice = createSlice({
    name: 'restuarant',
    initialState: initialstate,
    reducers: {  
    resetRestaurant(state) {
        return { ...initialstate }
    },

    changeHilightOnMap(state,action){
        state.currentBuildingIndex = action.payload
        state[action.payload].hilightonmap = !state[action.payload].hilightonmap
        return state;
    }
    }
})

export const {
    resetRestaurant,
    chagneShowOnMap,
    changeHilightOnMap
   } = resturantSlice.actions
  
export default resturantSlice.reducer