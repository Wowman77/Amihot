import React, { useState } from "react";
import IconButton from "./IconButton";
import { home, leaderboards, ratings } from "../assets";
import LargeButton from "./LargeButton";
import { Link } from "react-router-dom";

// Eventually pull from a user and put variable in with button cta
let your_ratings = 24;

const Sidebar = (props) => {
  const [isPopupOpen, setisPopupOpen] = useState(false);

  const openPopup = () => {
    setisPopupOpen(true);
  };

  const closePopup = () => {
    setisPopupOpen(false);
  };

  return (
    // Sidebar element
    <div className="gap-y-2 flex-col font-semibold text-lg hidden md:flex md:w-4/12 lg:w-3/12">
      <Link to="/">
        <IconButton cta={"Home"} icon={home} />
      </Link>
      <Link to="leaderboards">
        <IconButton cta={"Leaderboards"} icon={leaderboards} />
      </Link>
      <Link to="your-ratings">
        <IconButton
          cta={`Ratings (+${your_ratings})`}
          notification={"47"}
          icon={ratings}
        />{" "}
      </Link>
      <div onClick={openPopup} className="w-full flex mt-4 transition-all">
        {props.isLoggedIn ? null : <LargeButton cta={"Get Rated"} />}
      </div>

      {/* Popup element */}
      {isPopupOpen && (
        // Dim background
        <div
          onClick={closePopup}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
        >
          {/* Actual card */}
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">Popup Content</h2>
            <p className="mb-4 font-normal">
              This is the content of the popup.
            </p>
            <button
              onClick={closePopup}
              className="px-4 py-2 bg-black hover:bg-blue-700 text-white rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
