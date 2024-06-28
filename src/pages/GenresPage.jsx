import React, { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieID } from "../redux/genreSlice";
import { useParams } from "react-router-dom";
const GenresPage = () => {
  const genreMovies = useSelector((state) => state.genreCart.genreMovieList);
  const dispatch = useDispatch();

  // Access the id in the URL
  const { id } = useParams();

  // with id you have call the api
  // the response show the part

  //api with movie ID
  useEffect(() => {
    dispatch(fetchMovieID(id));
  }, [dispatch, id]);

  return (
    <div className="min-w-[700px] max-w-[1300px]  mx-auto mt-10 mb-10 grid grid-cols-3  gap-y-24 h-fit  ">
      {genreMovies.map((movie) => (
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
  );
};

export default GenresPage;
