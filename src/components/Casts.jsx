import React, { useState } from "react";

const Casts = ({ castList }) => {
  const [showAll, setShowAll] = useState(false);
  const initialItemCount = 5;

  return (
    <div className="flex flex-cols">
      <div className="flex gap-2">
        <b className="text-white">Cast:</b>
        {castList.credits.cast
          .slice(0, showAll ? castList.credits.cast.length : initialItemCount)
          .map((cast, index) => (
            <div key={index}>{cast.name},</div>
          ))}
      </div>
    </div>
  );
};

export default Casts;
