import React from 'react'
import { createSlice } from '@reduxjs/toolkit';
import { getAllMovies, getMoviesPage } from '../actions/moviesAction';

const initialState = {
    movies: [],
    pageCount: 0,
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

        builder.addCase(getMoviesPage.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getMoviesPage.fulfilled, (state, action) => {
            state.loading = false;
            state.movies = action.payload;
            state.pageCount = action.payload;
        });
        builder.addCase(getMoviesPage.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default moviesReducer.reducer