import React from "react";

import pageImage from "../assets/page.png";


const LastPage = () => {
  const letterContent = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
Sed nisi. Nulla quis sem at nibh elementum imperdiet.

Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
Mauris massa. Vestibulum lacinia arcu eget nulla.

Class aptent taciti sociosqu ad litora torquent per conubia nostra.
`;

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
      <div className="relative z-10 w-full min-h-screen px-[7px] py-[12px]">

        {/* Letter Container */}
        <div className="relative w-full h-[calc(100vh-24px)] flex items-center justify-center">

          {/* Page Image */}
          <img
            src={pageImage}
            alt="letter page"
            className="
              w-full
              h-full
              object-cover

              rounded-[18px]

              shadow-[0_0_50px_rgba(0,0,0,0.35)]
            "
          />

          {/* Written Content */}
          <div
            className="
              absolute
              inset-0

              flex
              items-center
              justify-center

              px-10
              md:px-24
              py-16
            "
          >

            <p
              className="
                text-[#3a2415]

                text-[13px]
                md:text-[20px]

                leading-loose

                whitespace-pre-line

                max-w-5xl

                opacity-90
              "
              style={{
                fontFamily: "'Dancing Script', cursive",
              }}
            >
              {letterContent}
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LastPage;