import React from "react";

// These are the button that you find on the sidebar with an icon and text next to them.
// Do these need to be a component? Idk. But we're doing it.

const IconButton = (props) => {
  return (
    <div>
      <button className="w-inline flex flex-row gap-x-3 items-center text-lightgray hover:gap-x-4 hover:text-black transition-all ">
        <img src={props.icon} alt="icon" />
        <span>{props.cta}</span>
      </button>
    </div>
  );
};

export default IconButton;
