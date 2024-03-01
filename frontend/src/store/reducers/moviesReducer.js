import React from 'react'
import { createSlice } from '@reduxjs/toolkit';
import { getAllMovies } from '../actions/moviesAction';

const initialState = {
    movies: [],
    loading: false,
    error: null,
}

const moviesReducer = createSlice({
    name: 'movies',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllMovies.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.movies = action.payload;
        });
        builder.addCase(getAllMovies.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default moviesReducer.reducer