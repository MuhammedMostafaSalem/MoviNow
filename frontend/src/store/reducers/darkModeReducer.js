import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDarkMode: JSON.parse(localStorage.getItem("isDarkMode")) || false,
}

export const darkModeReducer = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
            localStorage.setItem("isDarkMode", JSON.stringify(state.isDarkMode))
        },
    },
})

export const { toggleDarkMode } = darkModeReducer.actions

export default darkModeReducer.reducer