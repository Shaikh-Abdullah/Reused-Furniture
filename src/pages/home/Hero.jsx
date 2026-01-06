import React, { useContext } from "react";
import bannerImg from "../../assets/banner.png";
import { ThemeContext } from "../../context/ThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Hero = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <section
      className={`relative h-screen bg-cover bg-center text-white  `}
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="relative md:pt-48 pt-28 px-4 text-center md:w-1/2 mx-auto space-y-8">
        <h1 className="text-4xl lg:text-6xl lg:leading-tight leading-snug font-medium">
          Make your interior more minimalistic & modern
        </h1>
        <p className="text-xl lg:w-1/2 mx-auto ">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
      </div>

      {/* Overlay with small bottom blur effect */}
      <div className="absolute inset-x-0 -mb-2 bottom-0 h-3/4 bg-gradient-to-t from-white via-transparent to-transparent blur-sm"></div>
      {/* dark and light mode */}
      <div className="absolute bottom-16 right-16 z-40">
        <button
          onClick={toggleTheme}
          className="focus:outline-none font-bold text-lg bg-black text-white p-5 rounded-full "
        >
          {isDarkMode ? <BsSun className="text-yellow-300" /> : <BsMoon />}
        </button>
      </div>
      <div className="fixed bottom-5 left-5 flex items-center">
        <a
          href="https://wa.me/+971569562045"
          target="_blank"
          className="text-white flex items-center justify-center w-30 h-30 bg-[#66C15F] p-3 rounded-full shadow-lg animate-bounce hover:scale-110 transition-transform"
        >
          <BsWhatsapp size={30} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
