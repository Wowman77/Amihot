import React from "react";
import IconButton from "./IconButton";
import { home, leaderboards, ratings } from "../assets";
import LargeButton from "./LargeButton";
import { Link } from "react-router-dom";

// Eventually pull from a user and put variable in with button cta
let rates = 24;

const Sidebar = (props) => {
  return (
    <div className="gap-y-2 flex-col font-semibold text-lg hidden md:flex md:w-4/12 lg:w-3/12">
      <Link to="/">
        <IconButton cta={"Home"} icon={home} />
      </Link>
      <Link to="leaderboards">
        <IconButton cta={"Leaderboards"} icon={leaderboards} />
      </Link>
      <Link to="your-ratings">
        <IconButton
          cta={`Ratings (+${rates})`}
          notification={"47"}
          icon={ratings}
        />{" "}
      </Link>
      <div className="w-full flex mt-4">
        {props.isLoggedIn ? null : <LargeButton cta={"Get Rated"} />}
      </div>
    </div>
  );
};

export default Sidebar;
