import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/sliceUser";
import placesReducer from "./slices/slicePlaces";

export const store = configureStore({
    reducer: {
        user: userReducer,
        places: placesReducer,
    }
});