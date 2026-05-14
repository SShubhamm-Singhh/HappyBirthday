import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import shivaImage from "../assets/shiva.png";
import golgappaImage from "../assets/golgappa.png";
import shaktiCartoon from "../assets/shakti-cartoon.jpeg";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ThirdPage = () => {
  const sectionsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          x: 250,
          scale: 0.92,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 2,
          ease: "power4.out",

          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 45%",
            scrub: 1.2,
          },
        },
      );
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#120f1d] via-[#1d1633] to-[#2b1f3f]"></div>

      {/* Glow Effects */}
      <div className="fixed top-[-120px] left-[-120px] w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="fixed bottom-[-150px] right-[-100px] w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="fixed top-[30%] right-[20%] w-[250px] h-[250px] bg-orange-300/10 rounded-full blur-3xl"></div>

      {/* Overlay */}
      <div className="fixed inset-0 bg-black/20"></div>

      {/* Main Content */}
      <div className="relative z-10 px-6 md:px-16 py-20">
        {/* Heading */}
        <h1
          className="
            text-center
            text-white
            text-5xl
            md:text-7xl
            mb-24
            drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]
          "
          style={{
            fontFamily: "'Cause', cursive",
          }}
        >
          The Legend of Shakti ✨
        </h1>

        {/* FIRST SECTION */}
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-12
            items-stretch
          "
        >
          {/* Shiva Image */}
          <div className="flex justify-center h-full">
            <img
              src={shivaImage}
              alt="shiva"
              className="
                w-full
                max-w-[420px]
                h-full
                object-cover
                rounded-[32px]
                border
                border-white/10
                shadow-[0_0_40px_rgba(255,255,255,0.08)]
                drop-shadow-[0_0_40px_rgba(255,255,255,0.12)]
              "
            />
          </div>

          {/* Story */}
          <div
            className="
              h-full
              flex
              items-center
              rounded-[32px]
              bg-white/5
              backdrop-blur-md
              border
              border-white/10
              p-8
              md:p-12
              shadow-[0_0_40px_rgba(255,255,255,0.04)]
            "
          >
            <p
              className="
                text-white/90
                text-lg
                md:text-2xl
                leading-loose
              "
              style={{
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Once upon a time in India, on this date — 16-5-99 — God bestow the
              power and gave a girl to this world. Her name was Shakti.
              <br />
              <br />
              Not an ordinary girl, but a force of nature. 🌪️
              <br />
              <br />
              No no… the universe looked at Earth and said:
              <br />
              <br />
              “Hmm… life is too peaceful here. Let’s send chaos wrapped in
              cuteness.”
              <br />
              <br />
              And that’s how Shakti arrived. 🌸✨
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-24 w-full flex justify-center">
          <div className="w-72 h-[2px] bg-gradient-to-r from-transparent via-pink-200/40 to-transparent"></div>
        </div>

        {/* SECOND SECTION */}
        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-12
            items-stretch
          "
        >
          {/* Story */}
          <div
            className="
              md:order-1
              order-2
              h-full
              flex
              items-center
              rounded-[32px]
              bg-white/5
              backdrop-blur-md
              border
              border-white/10
              p-8
              md:p-12
              shadow-[0_0_40px_rgba(255,255,255,0.04)]
            "
          >
            <p
              className="
                text-white/90
                text-lg
                md:text-2xl
                leading-loose
              "
              style={{
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              By the age of 10, relatives knew one thing very clearly:
              <br />
              <br />
              “If golgappe are nearby… hide them.”
              <br />
              <br />
              Because Shakti could eat 50 golgappe like it was a warm-up round.
              <br />
              <br />
              The golgappe wala once saw her coming and whispered:
              <br />
              <br />
              “Bhai… extra pani ready karo.”
            </p>
          </div>

          {/* Golgappa Image */}
          <div className="flex justify-center h-full md:order-2 order-1">
            <img
              src={golgappaImage}
              alt="golgappa"
              className="
                w-full
                max-w-[420px]
                h-full
                object-cover
                rounded-[32px]
                border
                border-white/10
                shadow-[0_0_35px_rgba(255,200,100,0.08)]
                drop-shadow-[0_0_35px_rgba(255,200,100,0.18)]
              "
            />
          </div>
        </div>

        {/* Divider */}
        <div className="my-24 w-full flex justify-center">
          <div className="w-72 h-[2px] bg-gradient-to-r from-transparent via-pink-200/40 to-transparent"></div>
        </div>

        {/* THIRD SECTION */}
        <div
          ref={(el) => (sectionsRef.current[2] = el)}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-12
            items-stretch
          "
        >
          {/* Shakti Image */}
          <div className="flex justify-center h-full">
            <img
              src={shaktiCartoon}
              alt="shakti cartoon"
              className="
                w-full
                max-w-[420px]
                h-full
                object-cover
                rounded-[32px]
                border
                border-white/10
                shadow-[0_0_40px_rgba(255,255,255,0.08)]
                drop-shadow-[0_0_40px_rgba(255,255,255,0.12)]
              "
            />
          </div>

          {/* Story */}
          <div
            className="
              h-full
              flex
              items-center
              rounded-[32px]
              bg-white/5
              backdrop-blur-md
              border
              border-white/10
              p-8
              md:p-12
              shadow-[0_0_40px_rgba(255,255,255,0.04)]
            "
          >
            <p
              className="
                text-white/90
                text-lg
                md:text-2xl
                leading-loose
              "
              style={{
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              But Shakti was not only dangerous to golgappes. She also had cute
              habits that confused humanity daily.
              <br />
              <br />
              She would say “I’m not hungry” and then steal fries from
              everyone’s plate.
              <br />
              <br />
              She would watch one emotional reel and suddenly question the
              entire universe at 2 AM.
              <br />
              <br />
              Her smile could fix bad moods.
              <br />
              Her laughter sounded like happiness itself.
              <br />
              <br />
              And her angry face? Honestly… even that looked cute. 🌚
            </p>
          </div>
        </div>

        {/* Bottom Button Section */}
        <div className="w-full flex justify-center mt-24">
          <button
            onClick={() => navigate("/fourth")}
            className=" px-10 py-5 rounded-full text-white text-lg md:text-xl tracking-wide bg-white/5
      backdrop-blur-md

      border
      border-pink-200/10

      shadow-[0_0_35px_rgba(255,255,255,0.05)]

      hover:bg-pink-300/10
      hover:border-pink-200/20
      hover:scale-105

      transition-all
      duration-500
    "
            style={{
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            There&apos;s More To The Story ✨
          </button>
        </div>

        {/* Bottom Space */}
        <div className="h-24"></div>
      </div>
    </div>
  );
};

export default ThirdPage;
