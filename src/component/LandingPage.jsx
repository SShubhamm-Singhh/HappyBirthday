import React from "react";
import shinchan from "../assets/shinchan.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Image */}
      <div
        className="
          absolute 
          inset-0 
          bg-cover 
          bg-center 
          bg-no-repeat
          opacity-90
        "
        style={{
          backgroundImage: `url(${shinchan})`,
        }}
      ></div>

      {/* Smooth Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>

      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        {/* Heading */}
        <h1
          className="
            text-white
            text-7xl
            md:text-[120px]
            leading-tight
            drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]
          "
          style={{
            fontFamily: "'Cause', cursive",
            fontWeight: 400,
          }}
        >
          Happy Birthday
        </h1>

        {/* Subtitle */}
        <p
          className="
            mt-8
            text-pink-100
            text-lg
            md:text-2xl
            max-w-2xl
            leading-relaxed
            tracking-wide
            drop-shadow-lg
          "
        >
          A magical celebration filled with love,
          laughter and unforgettable memories ✨
        </p>

        {/* Decorative Line */}
        <div className="mt-10 w-52 h-[2px] bg-white/40 rounded-full"></div>

        {/* Button */}
        <button
            onClick={() => navigate("/second")}
          className="
            mt-12
            px-10
            py-4
            rounded-full
            text-white
            text-lg
            tracking-wide
            backdrop-blur-md
            bg-white/10
            border
            border-white/20
            shadow-lg
            hover:bg-white/15
            hover:scale-105
            transition-all
            duration-500
          "
          style={{
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Lets Go ✨
        </button>
      </div>
    </div>
  );
};

export default LandingPage;