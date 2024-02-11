import { configureStore } from "@reduxjs/toolkit";
import movieSliceReducer from "./movieSlice";

const store = configureStore({
  reducer: {
    movieCart: movieSliceReducer,
  },
});

export default store;
