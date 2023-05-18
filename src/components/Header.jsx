import React, { useState } from "react";
import { menu, close, logo } from "../assets";
import { GirlsRate, GuysRate, IconButton } from "./index.jsx";
import { home, leaderboards, ratings } from "../assets";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    closeMobileMenu();
    // Add any additional functionality for link clicks here
  };

  // Add logged in version of the header **WIP**
  return (
    <header>
      <div className=" xl:max-w-[1280px] mx-auto px-4 py-4 md:py-6 flex justify-between items-center ">
        <Link to="/">
          <img src={logo} alt="Close" className="w-[65px] h-[20px]" />
        </Link>
        <nav className="flex items-center">
          <div className="hidden md:flex space-x-4">
            <img src="" className="rounded-full"></img>
            <GirlsRate></GirlsRate>
            <GuysRate></GuysRate>
          </div>
          {/* Mobile header */}
          <div className="md:hidden flex flex-row gap-x-2">
            {props.isLoggedIn ? null : (
              <button className="text-sm text-white rounded-full bg-black px-4">
                Get rated
              </button>
            )}
            <button onClick={toggleMobileMenu} className="text-white">
              {isMobileMenuOpen ? (
                <img src={close} alt="Close" className="w-6 h-6" />
              ) : (
                <img src={menu} alt="Menu" className="w-6 h-6" />
              )}
            </button>
            {isMobileMenuOpen && (
              <div className=" z-100 absolute right-0 mt-10 p-4 border bg-white text-black rounded-b-[10px] w-full flex flex-col space-y-2 font-semibold text-lg">
                <Link to="/">
                  <IconButton cta={"Home"} icon={home} />
                </Link>
                <Link to="/leaderboards">
                  <IconButton cta={"Leaderboards"} icon={leaderboards} />
                </Link>
                <Link to="/your-ratings">
                  <IconButton cta={"Your Ratings"} icon={ratings} />
                </Link>
                <div>
                  {props.isLoggedIn ? (
                    <button className="text-orange">Logout</button>
                  ) : null}
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
