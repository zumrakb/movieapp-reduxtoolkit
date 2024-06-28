import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUpcomingData = createAsyncThunk(
  "movie/fetchUpcomingData",
  async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzU0MTQwODA1YzE2MThiOTc2NjM2M2UxNGE4NGZhNyIsInN1YiI6IjY1Yjk4ZDc5MzM0NGM2MDE4NTkyNjZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nCXiwpd8D0rTUjypS9OOmUg2SDOAWKts5BwVQjhL5ng",
      },
      url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    };
    const response = await axios(options);
    return response.data.results;
  }
);

export const fetchMovieData = createAsyncThunk(
  "movie/fetchMovieData",
  async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzU0MTQwODA1YzE2MThiOTc2NjM2M2UxNGE4NGZhNyIsInN1YiI6IjY1Yjk4ZDc5MzM0NGM2MDE4NTkyNjZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nCXiwpd8D0rTUjypS9OOmUg2SDOAWKts5BwVQjhL5ng",
      },
      url: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    };

    const response = await axios(options);
    return response.data.results;
  }
);

const initialState = {
  movies: [],
  upcomingMovies: [],
  movieLoading: false,
  upcomingMovieLoading: false,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieData.pending, (state) => {
      state.movieLoading = true;
    });
    builder.addCase(fetchMovieData.fulfilled, (state, action) => {
      state.movieLoading = false;
      state.movies = action.payload;
    });
    builder.addCase(fetchMovieData.rejected, (state, action) => {
      state.movieLoading = false;
      console.error(action.error);
    });
    builder.addCase(fetchUpcomingData.pending, (state) => {
      state.upcomingMovieLoading = true;
    });
    builder.addCase(fetchUpcomingData.fulfilled, (state, action) => {
      state.upcomingMovieLoading = false;
      state.upcomingMovies = action.payload;
    });
    builder.addCase(fetchUpcomingData.rejected, (state, action) => {
      state.upcomingMovieLoading = false;
      console.error(action.error);
    });
  },
});

export default movieSlice.reducer;
