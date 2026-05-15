import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import twentySevenImage from "../assets/27.png";
import angerImage from "../assets/anger.png";
import loveImage from "../assets/love.png";
import { useNavigate } from "react-router-dom"

gsap.registerPlugin(ScrollTrigger);

const headingText = "Years passed.\nAnd today is herbirthday...";

const FourthPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState("");

  const sectionsRef = useRef([]);
  const endingTextRef = useRef(null);

  /* ---------------- TYPING EFFECT ---------------- */

  useEffect(() => {

    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(headingText.slice(0, index + 1));
      index++;

      if (index === headingText.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);

  }, []);

  /* ---------------- GSAP SCROLL EFFECT ---------------- */

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
          duration: 1.8,
          ease: "power4.out",

          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 45%",
            scrub: 1.2,
          },
        }
      );
    });

    gsap.fromTo(
      endingTextRef.current,
      {
        opacity: 0,
        y: 80,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 2,
        ease: "power4.out",

        scrollTrigger: {
          trigger: endingTextRef.current,
          start: "top 85%",
        },
      }
    );

  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      {/* Background */}
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
        <div className="flex justify-center text-center mb-28">

          <h1
            className="
              text-white
              text-4xl
              md:text-7xl
              leading-relaxed
              whitespace-pre-line
              drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]
            "
            style={{
              fontFamily: "'Cause', cursive",
            }}
          >
            {displayedText}
            <span className="animate-pulse">|</span>
          </h1>

        </div>

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

          {/* Image */}
          <div className="flex justify-center h-full">

            <img
              src={twentySevenImage}
              alt="27"
              className="
                w-full
                max-w-[420px]
                h-full
                object-cover

                rounded-[32px]

                border
                border-white/10

                shadow-[0_0_40px_rgba(255,255,255,0.08)]
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
              Now Shakti is 27 years old — older, wiser…
              but still capable of starting arguments over:

              <br />
              <br />

              “Why did you reply with only ‘hmm’?”

              <br />
              <br />

              She became the kind of girl who could act strong
              in front of everyone but secretly cry during dog videos.

              <br />
              <br />

              The kind who says “I don’t care,”
              but remembers tiny details from 4 years ago.

              <br />
              <br />

              The kind who can fight with you
              and still ask:

              <br />
              <br />

              “Did you eat?”
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
              And somewhere in this imaginary story…
              there was a boy.

              <br />
              <br />

              A poor, innocent fellow.

              <br />

              He thought he was mentally stable…
              until he met Shakti.

              <br />
              <br />

              The first time he saw her,
              he realized three things instantly:

              <br />
              <br />

              She talks a lot.

              <br />

              She is impossible to handle.

              <br />

              He is absolutely going to fall in love with her.

              <br />
              <br />

              She annoyed him daily.

              <br />

              She roasted him for no reason.

              <br />

              She called him dramatic
              while being dramatic herself.
            </p>

          </div>

          {/* Image */}
          <div className="flex justify-center h-full md:order-2 order-1">

            <img
              src={angerImage}
              alt="anger"
              className="
                w-full
                max-w-[420px]
                h-full
                object-cover

                rounded-[32px]

                border
                border-white/10

                shadow-[0_0_40px_rgba(255,255,255,0.08)]
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

          {/* Image */}
          <div className="flex justify-center h-full">

            <img
              src={loveImage}
              alt="love"
              className="
                w-full
                max-w-[420px]
                h-full
                object-cover

                rounded-[32px]

                border
                border-white/10

                shadow-[0_0_40px_rgba(255,255,255,0.08)]
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
              And one day he understood
              something very important:

              <br />
              <br />

              Shakti was not the calm in his life.

              <br />

              She was the storm.

              <br />
              <br />

              But somehow…
              she became his favorite weather. ❤️

              <br />
              <br />

              Even today, legends say:

              <br />
              <br />

              If you hear someone arguing
              while eating golgappes
              and laughing five seconds later…

              <br />
              <br />

              that’s probably Shakti.
            </p>

          </div>
        </div>

        {/* Final Ending Text */}
        <div
          ref={endingTextRef}
          className="
            flex
            justify-center
            text-center
            mt-40
            mb-20
          "
        >

          <h2
            className="
              text-white
              text-3xl
              md:text-6xl
              leading-relaxed
              whitespace-pre-line
              drop-shadow-[0_0_25px_rgba(255,255,255,0.12)]
            "
            style={{
              fontFamily: "'Cause', cursive",
            }}
          >
            The girl born on 16-5-99.

            {"\n"}

            The chaos.

            {"\n"}

            The cuteness.

            {"\n"}

            The sarcasm.

            {"\n"}

            And the love story nobody saw coming. ✨
          </h2>

        </div>
          <div className="w-full flex justify-center mt-24">
          <button
            onClick={() => navigate("/last")}
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
            Just one last thing from me ✨
          </button>
        </div>
        {/* Bottom Space */}
        <div className="h-24"></div>

      </div>
    </div>
  );
};

export default FourthPage;