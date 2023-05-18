import React from "react";

// Becaue of the "w-full" property, it's always going to take up the full width of any container
// it's in from now on. Hopefully that doesn't make any problems for the future

const LargeButton = (props) => {
  return (
    <button className="w-full bg-black rounded-full text-white font-semibold hover:bg-[#404040] py-2 transition-all">
      {props.cta}
    </button>
  );
};

export default LargeButton;
