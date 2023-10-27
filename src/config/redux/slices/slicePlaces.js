import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    addPlaces: (state, action) => {
        state.push(action.payload);
    },
  },
});

export const { addPlaces } = placesSlice.actions;
export default placesSlice.reducer;
