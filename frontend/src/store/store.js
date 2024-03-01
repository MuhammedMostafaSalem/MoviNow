import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./reducers/darkModeReducer";
import moviesReducer from "./reducers/moviesReducer";
import languageReducer from "./reducers/languageReducer";

export const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
        movies: moviesReducer,
        lang: languageReducer,
    },
    devTools: true,
})