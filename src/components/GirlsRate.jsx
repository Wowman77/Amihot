import React from "react";

const GirlsRate = ({ avg = 0.0 }) => {
  return (
    <div>
      <p className="text-pink text-[12px]">Girls rate you</p>
      <div className="text-pink text-center text-2xl leading-6">{avg}/10</div>
    </div>
  );
};

export default GirlsRate;
