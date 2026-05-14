import React, { useEffect, useState } from "react";
import backgroundImage from "../assets/shakti.jpeg";
import { useNavigate } from "react-router-dom";

const text = "THE LEGEND OF SHAKTI ....";

const SecondPage = () => {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let isDeleting = false;

    const interval = setInterval(() => {
      if (!isDeleting) {
        setDisplayedText(text.slice(0, index + 1));
        index++;

        // Start deleting after full text appears
        if (index === text.length) {
          isDeleting = true;
        }
      } else {
        setDisplayedText(text.slice(0, index - 1));
        index--;

        // Restart typing
        if (index === 0) {
          isDeleting = false;
        }
      }
    }, isDeleting ? 60 : 120);

    return () => clearInterval(interval);
  }, []);

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
          scale-105
        "
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      {/* Main Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>

      {/* Cinematic Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-950/20 to-black/80"></div>

      {/* Soft Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">

        {/* Heading */}
        <h1
          className="
            text-white
            text-4xl
            md:text-7xl
            tracking-[6px]
            drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]
          "
          style={{
            fontFamily: "'Cause', cursive",
            fontWeight: 400,
          }}
        >
          {displayedText}
          <span className="animate-pulse">|</span>
        </h1>

        {/* Curious Button */}
        <button
            onClick={() => navigate("/third")}
          className="
            mt-14
            px-10
            py-4
            rounded-full

            text-white
            text-lg
            md:text-xl
            tracking-wide

            bg-white/10
            backdrop-blur-md

            border
            border-pink-200/20

            shadow-[0_0_25px_rgba(255,255,255,0.08)]

            hover:bg-pink-200/10
            hover:border-pink-100/30
            hover:scale-105

            transition-all
            duration-500
          "
          style={{
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Curious? ✨
        </button>

      </div>
    </div>
  );
};

export default SecondPage;