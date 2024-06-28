import BannerCarousel from "../components/BannerCarousel";
import MovieCard from "../components/MovieCard";
import React, { useEffect } from "react";
import { fetchMovieData } from "../redux/movieSlice";
import { useSelector, useDispatch } from "react-redux";

/**
 * Redux use for global state not global effect
 * useSelector use for reading global state
 * useDispatch use for updating/changing global state
 */

const Home = () => {
  const movies = useSelector((state) => state.movieCart.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieData());
  }, [dispatch]);

  return (
    <div className="bg-white p-8 ">
      <div className="min-w-[700px] max-w-[1300px]  m-auto">
        <BannerCarousel />

        <div className="grid grid-cols-3 xl:grid-cols-3 m-12 gap-y-20 h-fit ">
          {movies.map((movie) => (
            <MovieCard
              movieID={movie.id}
              key={movie.id}
              release={movie.release_date}
              title={movie.title}
              img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              backdropPath={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
