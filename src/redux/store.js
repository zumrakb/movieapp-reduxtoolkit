import { configureStore } from "@reduxjs/toolkit";
import movieSliceReducer from "./movieSlice";
import genreSliceReducer from "./genreSlice";
import detailsSliceReducer from "./detailsSlice";
const store = configureStore({
  reducer: {
    movieCart: movieSliceReducer,
    genreCart: genreSliceReducer,
    detailsCart: detailsSliceReducer,
  },
});

export default store;
