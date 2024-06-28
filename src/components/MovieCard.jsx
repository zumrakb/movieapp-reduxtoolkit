import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ img, title, release, backdropPath, movieID }) => {
  const navigate = useNavigate();
  function handleOnClick() {
    navigate(`/movie/${movieID}`);
  }
  return (
    <div
      className="h-[570px] bg-[#794444] bg-opacity-75 z-30 m-3   rounded-lg  relative"
      onClick={handleOnClick}
    >
      <img alt="img" src={backdropPath} className="blur-2xl absolute -z-[30]" />

      <div className="flex gap-[65px] justify-between  ml-4 mt-2 mr-4">
        <div className="text-base  text-left text-white   ">
          <div className="font-semibold">{title}</div>
          <div>{release}</div>
        </div>
        <div className="text-right flex text-white gap-1 ">
          ✨ <span>4,5</span>
        </div>
      </div>

      <div className="m-4 ">
        <img
          className="h-[100%] w-[100%] object-cover rounded-lg  transition-transform hover:scale-95"
          alt="imag"
          src={img}
        />
      </div>
    </div>
  );
};

export default MovieCard;
