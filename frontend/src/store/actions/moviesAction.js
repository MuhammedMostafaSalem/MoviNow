import { createAsyncThunk } from "@reduxjs/toolkit";
import {useGetDataToken} from "../../hook/useGetDataToken";
import { ApiKey } from "../../config/configToken";

export const getAllMovies = createAsyncThunk('movies/getMovies', async (language) => {
    try {
        const response = await useGetDataToken(`/movie/popular?api_key=${ApiKey}&language=${language}`);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error; // Re-throw for error handling in the reducer
    }
});

export const getMoviesPage = createAsyncThunk('movies/getMoviesPage', async ({ language, page }) => {
    try {
        const response = await useGetDataToken(`/movie/popular?api_key=${ApiKey}&language=${language}&page=${page}`);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error; // Re-throw for error handling in the reducer
    }
});