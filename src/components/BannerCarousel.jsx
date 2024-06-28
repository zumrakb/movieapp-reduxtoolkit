import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchUpcomingData } from "../redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import MovieSwiper from "./MovieSwiper";
import Modal from "./Modal";
import axios from "axios";
function BannerCarousel() {
  const upcomingMovies = useSelector((state) => state.movieCart.upcomingMovies);
  const dispatch = useDispatch();
  const [trailer, setTrailer] = useState();
  const [openModal, setOpenModal] = useState(false);
  async function clickToPlay(id) {
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

    // here
    // we will call the api for trailer
    // we will set the data to state
    setOpenModal(true);
  }
  function closeModal() {
    setOpenModal(false);
  }

  useEffect(() => {
    dispatch(fetchUpcomingData());
  }, []);

  return (
    <div className="">
      <Swiper
        /*  loop={true} */
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        /*  autoplay={{
          delay: 1200,
        }} */
        className=" rounded-xl "
      >
        {upcomingMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieSwiper
              movieId={movie.id}
              title={movie.title}
              overview={movie.overview}
              backdropImage={movie.backdrop_path}
              releaseYear={movie.release_date.split("-")[0]}
              clickToPlay={clickToPlay}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900"></div>
      {openModal && <Modal closeModal={closeModal} trailerData={trailer} />}
    </div>
  );
}

export default BannerCarousel;
