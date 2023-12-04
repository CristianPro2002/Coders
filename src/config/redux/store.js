import { configureStore } from "@reduxjs/toolkit";
import placeReducer from "./slices/slicePlace";
import themeReducer from "./slices/sliceTheme"

export const store = configureStore({
    reducer: {
        place: placeReducer,
        theme: themeReducer
    }
});