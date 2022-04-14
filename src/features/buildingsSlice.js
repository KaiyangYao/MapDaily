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
        state.features[action.payload].properties.show_on_map = !state.features[action.payload].properties.show_on_map;
        return state;
    }
  }
})

// Action creators are generated for each case reducer function
export const {changeBuildings } = buildingsSlice.actions

export default buildingsSlice.reducer