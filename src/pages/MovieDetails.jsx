import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchMovieDetails } from "../redux/detailsSlice";
import { useParams } from "react-router-dom";
import Casts from "../components/Casts";
import CastPhotos from "../components/CastPhotos";
import axios from "axios";
import Modal from "../components/Modal";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailsOfMovie = useSelector((state) => state.detailsCart.details);

  const [trailer, setTrailer] = useState();
  const [openModal, setOpenModal] = useState(false);

  async function playTrailer(id) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzU0MTQwODA1YzE2MThiOTc2NjM2M2UxNGE4NGZhNyIsInN1YiI6IjY1Yjk4ZDc5MzM0NGM2MDE4NTkyNjZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nCXiwpd8D0rTUjypS9OOmUg2SDOAWKts5BwVQjhL5ng",
      },
      url: `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    };
    const response = await axios(options);
    const trailerData = response.data.results.find((t) => t.type === "Trailer");
    setTrailer(trailerData);
    setOpenModal(true);
  }
  function closeModal() {
    setOpenModal(false);
  }

  console.log("comefrommm movie detils");
  console.log(detailsOfMovie);
  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);
  return Object.keys(detailsOfMovie).length ? (
    <div className="">
      <div className="relative text-white h-[500px] w-[1300px] m-auto my-5 ">
        <img
          alt="img"
          className="absolute w-full h-full object-cover -z-[30] rounded-xl"
          src={`https://image.tmdb.org/t/p/original${detailsOfMovie.backdrop_path}`}
        />
        <div className="flex gap-5 mb-4 absolute bottom-4 left-12">
          <button
            onClick={() => playTrailer(detailsOfMovie.id)}
            className="border rounded border-red-700 bg-red-700 p-3 hover:bg-red-800 
          hover:scale-110 transition-transform "
          >
            PLAY NOW
          </button>
          <button className="border p-3 rounded hover:bg-white hover:text-black hover:scale-110 transition-transform ">
            + Add to list
          </button>
          <button className="border p-3 rounded hover:bg-white hover:text-black hover:scale-110 transition-transform ">
            Like
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12   m-auto w-[1300px] bg-[#2b2b2b] rounded-xl text-[#d8d3d8] p-8 backdrop-blur-sm opacity-85 text-lg">
        <div className="flex flex-col gap-4 text-lg ">
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl text-white">
              <b>{detailsOfMovie.title}</b>
            </h1>
            <div className="">{detailsOfMovie.overview}</div>
          </div>

          {/*   <img
            alt="background"
            src={`https://image.tmdb.org/t/p/w500${detailsOfMovie.poster_path}`}
          ></img> */}
        </div>

        <div className="flex flex-col gap-3 justify-center">
          <div className="flex gap-3 ">
            <div>98% Match</div>
            <div>{detailsOfMovie.release_date.split("-")[0]} </div>
            <div>HD</div>
            <div className="">{detailsOfMovie?.genres[0]?.name} </div>
          </div>

          <Casts castList={detailsOfMovie} />

          <div>
            <b className="text-white">Watch in</b>{" "}
            {detailsOfMovie?.spoken_languages[0]?.name}
          </div>

          <div>
            <b className="text-white">Original language:</b>{" "}
            {detailsOfMovie.original_language}
          </div>
          <div>
            <b className="text-white">Country: </b>
            {detailsOfMovie?.production_countries[0]?.name}{" "}
          </div>
        </div>
      </div>
      <CastPhotos castList={detailsOfMovie} />
      {openModal && <Modal closeModal={closeModal} trailerData={trailer} />}
    </div>
  ) : (
    <div>loading</div>
  );
};

export default MovieDetails;
