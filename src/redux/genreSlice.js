import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  genreMovieList: [],
  loading: false,
};

export const fetchMovieID = createAsyncThunk(
  "movie/fetchMovieID",
  async (id) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzU0MTQwODA1YzE2MThiOTc2NjM2M2UxNGE4NGZhNyIsInN1YiI6IjY1Yjk4ZDc5MzM0NGM2MDE4NTkyNjZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nCXiwpd8D0rTUjypS9OOmUg2SDOAWKts5BwVQjhL5ng",
      },
      url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`,
    };

    const response = await axios(options);
    console.log(response.data.results);
    return response.data.results;
  }
);

export const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieID.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMovieID.fulfilled, (state, action) => {
      state.loading = false;
      state.genreMovieList = action.payload;
    });
    builder.addCase(fetchMovieID.rejected, (state, action) => {
      state.loading = false;
      console.error(action.error);
    });
  },
});

export default genreSlice.reducer;
