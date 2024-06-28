import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieID } from "../redux/movieSlice";

const Genres = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieID());
  }, [dispatch]);
  return (
    <>
      <h1 class="relative group overflow-hidden  p-3 rounded-lg backdrop-blur-sm cursor-pointer">
        <button class="  block transition-all ease-in-out duration-500 transform translate-x-0 group-hover:translate-x-full absolute bottom-2  left-2  w-full h-[2px] bg-black"></button>
        Genres
      </h1>
      <div className="absolute left-[520px] top-[80px] z-50 grid-cols-3 grid bg-black text-white bg-opacity-25 backdrop-blur-sm shadow-xl rounded-lg p-3 gap-3 ">
        <button className="hover:underline">Action</button>
        <button className="hover:underline">Adventure</button>
        <button className="hover:underline"> Animation</button>
        <button className="hover:underline">Comedy</button>
        <button className="hover:underline">Crime</button>
        <button className="hover:underline">Documentary</button>
        <button className="hover:underline">Drama</button>
        <button className="hover:underline">Family</button>
        <button className="hover:underline">Fantasy</button>
        <button className="hover:underline">History</button>
        <button className="hover:underline">Horror</button>
        <button className="hover:underline">Music</button>
        <button className="hover:underline">Mystery</button>
        <button className="hover:underline">Sci-Fi</button>
        <button className="hover:underline">TV Movie</button>
        <button className="hover:underline">Thriller</button>
        <button className="hover:underline">War</button>
        <button className="hover:underline">Western</button>
      </div>
    </>
  );
};

export default Genres;
