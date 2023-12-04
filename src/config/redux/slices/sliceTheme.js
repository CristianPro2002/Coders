import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    addTheme: (state, action) => {
      const {
        theme,
      } = action.payload;
      state.theme = theme;
    },
  },
});

export const { addTheme } = themeSlice.actions;
export default themeSlice.reducer;
