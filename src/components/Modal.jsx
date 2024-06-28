import React from "react";

const Modal = ({ closeModal, trailerData }) => {
  return (
    <>
      <div
        onClick={closeModal}
        className="opacity-80 z-[100] bg-black fixed top-0 left-0 w-full h-full"
      ></div>
      <div className="fixed z-[100] bg-white h-[500px] w-[800px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-xl">
        <div className="h-[50px] flex items-center justify-between px-3">
          {trailerData.name}
          <button onClick={closeModal}>X</button>
        </div>
        <div className="h-[100%] w-[100%]">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${trailerData.key}`}
            title={trailerData.name}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="rounded-b-xl"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Modal;
