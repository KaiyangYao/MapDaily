import { createSlice } from "@reduxjs/toolkit";
import building from "../resource/json/building";

var buildings = building;
const initialstate = {
  ...buildings,
  currentBuildingIndex: -1,
  showOnMap: true,
};
export const buildingsSlice = createSlice({
  name: "geoJson",
  initialState: initialstate,
  reducers: {
    changeBuildings: (state, action) => {
      if (state.features[action.payload].properties.show_on_map) {
        state.showonMap = !state.showonMap;
        return state;
      } else {
        for (let i = 0; i < state.features.length; i++) {
          if (i == action.payload) {
            state.features[action.payload].properties.show_on_map = true;
            state.currentBuildingIndex = action.payload;
          } else {
            state.features[i].properties.show_on_map = false;
          }
        }
        return state;
      }
    },

    resetBuilding(state) {
      return { ...initialstate };
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeBuildings, resetBuilding } = buildingsSlice.actions;

export default buildingsSlice.reducer;
