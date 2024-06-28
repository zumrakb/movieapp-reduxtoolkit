import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { genreIDs } from "../helper";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false);

  const [whichGenreOption, setWhichGenreOption] = useState("Adventure");

  const navigate = useNavigate();

  //selecting any genre from Navbar genre button.
  const handleGenreChange = (e) => {
    const selectedGenre = e.target.value;
    const id = genreIDs[e.target.value];
    setWhichGenreOption(selectedGenre);
    navigate(`/genres/${id}`);
  };

  return (
    <div className="flex justify-between items-center p-4 min-w-[700px] max-w-[1300px]  m-auto ">
      <div className="flex gap-12 text-2xl justify-center text-black font-semibold">
        <h1 class="relative group overflow-hidden rounded-lg pb-3 backdrop-blur-sm cursor-pointer">
          <div class="block transition-all ease-in-out duration-500 transform translate-x-0 group-hover:translate-x-full absolute bottom-2  left-2  w-full h-[2px] bg-black "></div>
          <Link to="/">Home</Link>
        </h1>

        <div
          onMouseEnter={() => setIsShowing(true)}
          onMouseLeave={() => setIsShowing(false)}
        >
          <h1 class="relative group overflow-hidden pb-3 rounded-lg backdrop-blur-sm cursor-pointer">
            <div class="block transition-all ease-in-out duration-500 transform translate-x-0 group-hover:translate-x-full absolute bottom-2 left-2 w-full h-[2px] bg-black"></div>
            Genres
          </h1>
        </div>

        {isShowing && (
          <div
            className="absolute left-[4rem] top-[65px] z-50 bg-black text-white bg-opacity-25 backdrop-blur-sm shadow-xl rounded-lg p-3"
            onMouseEnter={() => setIsShowing(true)}
            onMouseLeave={() => setIsShowing(false)}
          >
            <select
              className="block w-full p-2 rounded-md bg-black  text-white bg-opacity-25 backdrop-blur-sm shadow-xl  focus:outline-none  focus:border-blue-300"
              value={whichGenreOption}
              onChange={handleGenreChange}
            >
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Animation">Animation</option>
              <option value="Comedy">Comedy</option>
              <option value="Crime">Crime</option>
              <option value="Documentary">Documentary</option>
              <option value="Drama">Drama</option>
              <option value="Family">Family</option>
              <option value="Fantasy">Fantasy</option>
              <option value="History">History</option>
              <option value="Horror">Horror</option>
              <option value="Music">Music</option>
              <option value="Mystery">Mystery</option>
              <option value="Sci-fi">Sci-Fi</option>
              <option value="Tv-movie">TV Movie</option>
              <option value="Thriller">Thriller</option>
              <option value="War">War</option>
              <option value="Western">Western</option>
            </select>
          </div>
        )}

        {whichGenreOption === "Adventure"
          ? console.log("selected adventure")
          : console.log("not adventure")}
      </div>
      <SearchBar />
    </div>
  );
};

export default Navbar;
