import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchedMovies, setSearchedMovies] = useState([]);

  const [inputByUser, setInputByUser] = useState("");

  // ----- calling search api ----------
  const handleOnMovieSearch = async (e) => {
    setInputByUser(e.target.value);

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzU0MTQwODA1YzE2MThiOTc2NjM2M2UxNGE4NGZhNyIsInN1YiI6IjY1Yjk4ZDc5MzM0NGM2MDE4NTkyNjZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nCXiwpd8D0rTUjypS9OOmUg2SDOAWKts5BwVQjhL5ng",
      },
      url: `https://api.themoviedb.org/3/search/movie?query=${e.target.value}&include_adult=false&language=en-US&page=1`,
    };

    const response = await axios(options);
    setSearchedMovies(response.data.results);
  };

  const clickedOnMovie = (movieID) => {
    navigate(`/movie/${movieID}`);
    setSearchedMovies([]);
    setInputByUser("");
  };

  return (
    <div className="flex justify-center items-center mb-5 mt-3 relative text-lg w-[400px]">
      <input
        onChange={handleOnMovieSearch}
        value={inputByUser}
        placeholder="Search Movies!"
        className="bg-[#d2cece] p-2 pl-4 rounded-lg outline-none border-none opacity-45 text-black placeholder:text-black w-full"
      />
      {inputByUser && (
        <div className="absolute top-10 bg-[#e8dada] backdrop-blur-xl text-black shadow-xl opacity-80 z-10 p-3 rounded w-full cursor-pointer h-[500px] overflow-y-auto">
          {searchedMovies.map((movie) => (
            <div
              key={movie.id}
              className="rounded hover:bg-[#726d6d]"
              onClick={() => clickedOnMovie(movie.id)}
            >
              <div className="flex p-2 items-center gap-3">
                <img
                  className="w-10 rounded"
                  src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
                  alt=""
                />
                <span>{movie.title}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
