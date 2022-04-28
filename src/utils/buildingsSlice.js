import { createSlice } from '@reduxjs/toolkit'
import building from "../resource/json/building";

var buildings = building
export const buildingsSlice = createSlice({
  name: 'geoJson',
  initialState: {
    ...buildings
  },
  reducers: {
    changeBuildings: (state, action) => {
    if(state.features[action.payload].properties.show_on_map){
      return state;
    }
    else{
      for(let i = 0 ; i < state.features.length;i++){
        if(i == action.payload){
          state.features[action.payload].properties.show_on_map = true;
         }
        else{
          state.features[i].properties.show_on_map = false;
         }
      }
      return state;
    }
    }
  }
})

// Action creators are generated for each case reducer function
export const {changeBuildings } = buildingsSlice.actions

export default buildingsSlice.reducer