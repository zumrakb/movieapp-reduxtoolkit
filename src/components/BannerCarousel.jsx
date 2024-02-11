import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchUpcomingData } from "../redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import MovieSwiper from "./MovieSwiper";

function BannerCarousel() {
  const upcomingMovies = useSelector((state) => state.movieCart.upcomingMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUpcomingData());
  }, []);

  return (
    <div className="">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 1200,
        }}
        className=" rounded-xl "
      >
        {upcomingMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieSwiper
              title={movie.title}
              overview={movie.overview}
              backdropImage={movie.backdrop_path}
              releaseYear={movie.release_date.split("-")[0]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900"></div>
    </div>
  );
}

export default BannerCarousel;
