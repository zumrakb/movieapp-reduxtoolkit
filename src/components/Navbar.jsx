import React from "react";

const Navbar = () => {
  return (
    <div className="flex gap-12 text-2xl  mt-7 justify-center text-black font-semibold w-[100%]  ">
      <h1 class="relative group overflow-hidden  p-3 rounded-lg backdrop-blur-sm cursor-pointer">
        <span class="block transition-all ease-in-out duration-500 transform translate-x-0 group-hover:translate-x-full absolute bottom-2  left-2  w-full h-[2px] bg-black"></span>
        Movies
      </h1>
      <h1 class="relative group overflow-hidden  p-3 rounded-lg backdrop-blur-sm cursor-pointer">
        <span class="block transition-all ease-in-out duration-500 transform translate-x-0 group-hover:translate-x-full absolute bottom-2  left-2  w-full h-[2px] bg-black"></span>
        Genres
      </h1>
      <h1 class="relative group overflow-hidden  p-3 rounded-lg backdrop-blur-sm cursor-pointer">
        <span class="block transition-all ease-in-out duration-500 transform translate-x-0 group-hover:translate-x-full absolute bottom-2  left-2  w-full h-[2px] bg-black"></span>
        Blog
      </h1>
    </div>
  );
};

export default Navbar;
