import React from "react";

const MovieSwiper = ({ title, releaseYear, overview, backdropImage }) => {
  return (
    <div className="relative bg-black bg-opacity-55 h-[500px] flex items-center">
      <img
        className="absolute w-full h-full object-cover -z-[30]"
        src={`https://image.tmdb.org/t/p/original${backdropImage}`}
      />
      <div className=" text-white text-left grid gap-7 w-[50%] ml-[100px] ">
        <div className="mt-6 mb-4">
          <h3 className="text-5xl ">{title}</h3>
        </div>
        <div className="flex gap-6 items-center text-center text-xl w-[65%]">
          <div className=" w-fit">{releaseYear}</div>
          <div className="border w-fit pl-3 pr-3 rounded">+12</div>
        </div>
        <div className="text-left">{overview}</div>
        <div className="flex gap-5 mb-4">
          <button
            className="border rounded border-red-700 bg-red-700 p-3 hover:bg-red-800 
          hover:scale-110 transition-transform "
          >
            PLAY NOW
          </button>
          <button className="border p-3 rounded hover:bg-white hover:text-black hover:scale-110 transition-transform ">
            + Add to list
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieSwiper;
