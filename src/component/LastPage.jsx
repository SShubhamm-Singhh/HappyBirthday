import React from "react";

import pageImage from "../assets/page.png";

const LastPage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">

      <img
        src={pageImage}
        alt="page"
        className="
          w-screen
          h-screen

          object-contain
        "
      />

    </div>
  );
};

export default LastPage;