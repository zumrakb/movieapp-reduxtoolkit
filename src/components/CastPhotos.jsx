import React, { Fragment, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import noImage from "../assets/nophoto.jpg";
const CastPhotos = ({ castList }) => {
  const [showAll, setShowAll] = useState(false);

  const castCount = 12;
  return (
    <div className="flex overflow-x-auto w-[1300px] m-auto gap-5 py-4">
      <div className=" flex gap-3">
        {castList.credits.cast
          .slice(0, showAll ? castList.credits.cast.length : castCount)
          .map((cast, index) => (
            <div className="w-52 flex flex-col items-center gap-2">
              <img
                key={index}
                className="w-52 rounded-xl h-full object-cover"
                alt="castphoto"
                src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                onError={(event) => (event.target.src = noImage)}
              />
              <span>{cast.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CastPhotos;
