import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  details: {},
  loading: false,
};

export const fetchMovieDetails = createAsyncThunk(
  "movie/fetchMovieDetails",
  async (id) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzU0MTQwODA1YzE2MThiOTc2NjM2M2UxNGE4NGZhNyIsInN1YiI6IjY1Yjk4ZDc5MzM0NGM2MDE4NTkyNjZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nCXiwpd8D0rTUjypS9OOmUg2SDOAWKts5BwVQjhL5ng",
      },
      url: `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits&language=en-US`,
    };

    const response = await axios(options);

    return response.data;
  }
);

export const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.details = action.payload;
    });
    builder.addCase(fetchMovieDetails.rejected, (state, action) => {
      state.loading = false;
      console.error(action.error);
    });
  },
});

export default detailsSlice.reducer;
